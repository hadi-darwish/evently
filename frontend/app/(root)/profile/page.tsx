import Collection from "@/components/shared/Collection";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { getEventsByUserId } from "@/lib/actions/events.actions";
import { SearchParamProps } from "@/types";
import { getOrdersByUser } from "@/lib/actions/order.actions";

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const session = await auth();
  // @ts-ignore
  const userId = session?.user?.user_id;
  //@ts-ignore
  const isOrganizer = session?.user?.organizerInfo !== null;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const ordersPage = Number(searchParams?.ordersPage) || 1;

  const orders = !isOrganizer
    ? await getOrdersByUser({ userId, page: ordersPage })
    : null;

  const orderedEvents =
    orders?.data.map((order) => order?.eventByEventId) || [];

  let organizedEvents;
  if (isOrganizer) {
    organizedEvents = await getEventsByUserId({
      userId,
      page: eventsPage,
    });
  }

  return (
    <>
      {/* My Tickets */}
      {!isOrganizer && (
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/#events">Explore More Events</Link>
            </Button>
          </div>
        </section>
      )}

      {!isOrganizer && (
        <section className="wrapper my-8">
          <Collection
            data={orderedEvents}
            emptyTitle="No event tickets purchased yet"
            emptyStateSubtext="No worries - plenty of exciting events to explore!"
            collectionType="My_Tickets"
            limit={3}
            page={ordersPage}
            urlParamName="ordersPage"
            totalPages={orders?.totalPages}
          />
        </section>
      )}

      {/* Events Organized */}
      {isOrganizer && (
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
          <div className="wrapper flex items-center justify-center sm:justify-between">
            <h3 className="h3-bold text-center sm:text-left">
              Events Organized
            </h3>
            <Button asChild size="lg" className="button hidden sm:flex">
              <Link href="/events/create">Create New Event</Link>
            </Button>
          </div>
        </section>
      )}
      {isOrganizer && (
        <section className="wrapper my-8">
          <Collection
            data={organizedEvents?.data ?? []}
            emptyTitle="No events have been created yet"
            emptyStateSubtext="Go create some now"
            collectionType="Events_Organized"
            limit={3}
            page={eventsPage}
            urlParamName="eventsPage"
            totalPages={organizedEvents?.totalPages}
          />
        </section>
      )}
    </>
  );
};

export default ProfilePage;
