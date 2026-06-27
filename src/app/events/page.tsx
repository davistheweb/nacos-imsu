import { EventsPage } from "@/components/events/EventPage";
import { EventsPageHeading } from "@/components/events/EventsPageHeading";

export default function EventsPageClient() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <EventsPageHeading />
      <EventsPage />
    </main>
  );
}
