"use server";
import Stripe from "stripe";
import { CheckoutOrderParams, CreateOrderParams } from "@/types";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import {
  CreateOrderInput,
  CreateOrderPayload,
} from "@/schemas/generated/graphql";
import client from "@/apolloClient";
import { CREATE_ORDER_MUTATION } from "../mutations/orders";
import { auth } from "@/auth";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const price = order.isFree ? 0 : Number(order.price) * 100;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: order.eventTitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        eventId: order.eventId,
        buyerId: order.buyerId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
    });

    redirect(session.url!);
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (order: CreateOrderParams) => {
  const session = await auth();
  //@ts-ignore
  const attendeeId = JSON.parse(session?.user?.attendeeInfo).id;
  try {
    const input: CreateOrderInput = {
      order: {
        attendeeId: Number(attendeeId),
        eventId: Number(order.eventId),
        stripeId: order.stripeId,
        totalAmount: order.totalAmount,
      },
    };

    const { data } = await client.mutate<{
      createOrder: CreateOrderPayload;
    }>({
      mutation: CREATE_ORDER_MUTATION,
      variables: { input },
    });

    return data?.createOrder?.order;
  } catch (error) {
    handleError(error);
  }
};
