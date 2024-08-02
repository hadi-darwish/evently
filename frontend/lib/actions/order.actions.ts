"use server";
import Stripe from "stripe";
import {
  CheckoutOrderParams,
  CreateOrderParams,
  GetOrdersByEventParams,
  GetOrdersByUserParams,
} from "@/types";
import { redirect } from "next/navigation";
import { handleError } from "../utils";
import {
  CreateOrderInput,
  CreateOrderPayload,
  OrdersConnection,
  OrdersOrderBy,
  QueryAllOrdersArgs,
} from "@/schemas/generated/graphql";
import client from "@/apolloClient";
import { CREATE_ORDER_MUTATION, GET_ALL_ORDERS } from "../mutations/orders";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const attandeeSession = await auth();
  //@ts-ignore
  const attendeeId = JSON.parse(attandeeSession?.user?.attendeeInfo).id;

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
        buyerId: attendeeId,
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
  try {
    const input: CreateOrderInput = {
      order: {
        attendeeId: Number(order.buyerId),
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

export async function getOrdersByUser({
  userId,
  limit = 3,
  page,
}: GetOrdersByUserParams) {
  try {
    const session = await auth();
    //@ts-ignore
    const attendeeId = JSON.parse(session?.user?.attendeeInfo).id;

    const args: QueryAllOrdersArgs = {
      orderBy: [OrdersOrderBy.CreatedAtDesc],
      //last: limit,
      //offset: (page - 1) * limit,
      condition: {
        deletedAt: null,
        attendeeId: attendeeId,
      },
    };

    const { data } = await client.query<{
      allOrders: OrdersConnection;
    }>({
      query: GET_ALL_ORDERS,
      variables: args,
      fetchPolicy: "no-cache",
    });

    return {
      data: data?.allOrders?.edges.map((edge) => edge.node),
      totalPages: Math.ceil(data?.allOrders?.totalCount / limit),
      pageInfo: data?.allOrders?.pageInfo,
    };
  } catch (error) {
    handleError(error);
  }
}

export async function getOrdersByEvent({
  searchString,
  eventId,
}: GetOrdersByEventParams) {
  try {
    const args: QueryAllOrdersArgs = {
      // orderBy: [OrdersOrderBy.CreatedAtDesc],
      //last: limit,
      //offset: (page - 1) * limit,
      condition: {
        deletedAt: null,
        eventId: eventId,
      },
    };

    const { data } = await client.query<{
      allOrders: OrdersConnection;
    }>({
      query: GET_ALL_ORDERS,
      variables: args,
      fetchPolicy: "no-cache",
    });

    console.log("data", data);
    revalidatePath("/orders");

    return {
      data: data?.allOrders?.edges.map((edge) => edge.node),
    };
  } catch (error) {
    handleError(error);
  }
}
