import { auth } from "@/auth";
import Collection from "@/components/shared/Collection";
import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/events.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(parseInt(id));
  const session = await auth();
  // @ts-ignore
  const userId = session?.user?.user_id;

  const isEventOrganizer = userId === event?.organizerByOrganizersId?.usersId;

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event?.categoryByCategoriesId?.id as number,
    eventId: event?.id as number,
    page: searchParams.page as string,
  });
  // remove the current event from the related events
  const filteredRelatedEvents = relatedEvents?.data?.filter(
    (relatedEvent) => relatedEvent?.id !== event?.id
  );

  const imageUrl = event?.imageUrl
    ? event?.imageUrl
    : "/assets/images/placeholder.png";
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold break-words">{event?.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                    {event?.isFree ? "FREE" : `$${event?.price}`}
                  </p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                    {event?.categoryByCategoriesId?.name}
                  </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500">
                    {event?.organizerByOrganizersId?.orgName}
                  </span>
                </p>
              </div>
            </div>
            {isEventOrganizer && (
              <div className="flex gap-3">
                <p className="p-medium-16 flex justify-center items-center rounded-full bg-blue-500/10 px-5 py-2.5 text-blue-500">
                  <Link
                    href={`/events/${event?.id}/update`}
                    className="flex gap-1"
                  >
                    <Image
                      src="/assets/icons/edit.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                    Edit
                  </Link>
                </p>

                <p className="p-medium-16 flex justify-center items-center rounded-full bg-red-500/10 px-5 py-2.5 text-red-500">
                  <DeleteConfirmation eventId={event?.id ?? 0} />
                  Delete
                </p>
              </div>
            )}
            {/** check out button */}

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event?.startDatetime).dateOnly} -{" "}
                    {formatDateTime(event?.startDatetime).timeOnly}
                  </p>
                  <p>
                    {formatDateTime(event?.endDatetime).dateOnly} -{" "}
                    {formatDateTime(event?.endDatetime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event?.location}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="p-bold-20 text-grey-600">What We&apos;ll Do:</p>
                <p className="p-medium-16 lg:p-regular-18">
                  {event?.description}
                </p>
                <a
                  href={event?.url as string}
                  className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event?.url}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection
          data={filteredRelatedEvents ?? []}
          emptyTitle="No Related Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
