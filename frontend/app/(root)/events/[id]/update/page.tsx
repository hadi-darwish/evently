import { auth } from "@/auth";
import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/events.actions";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const session = await auth();

  //@ts-ignore
  const userId = session?.user?.user_id as string;
  const event = await getEventById(Number(id));
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          event={event}
          eventId={event?.id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
