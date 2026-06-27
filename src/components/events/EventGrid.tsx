"use client";

import type { Event } from "@/types/events";
import EventCard from "./EventCard";

interface Props {
  events: Event[];
  onView: (e: Event) => void;
  onRsvp: (e: Event) => void;
}

export function EventGrid({ events, onView, onRsvp }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((ev) => (
        <EventCard
          key={ev.slug}
          event={ev}
          onView={onView}
          onRsvp={onRsvp}
        />
      ))}
    </div>
  );
}

export default EventGrid;
