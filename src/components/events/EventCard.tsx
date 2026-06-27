"use client";

import type { Event } from "@/types/events";
import { format } from "date-fns";

interface Props {
  event: Event;
  onView: (e: Event) => void;
  onRsvp: (e: Event) => void;
}

export function EventCard({ event, onView, onRsvp }: Props) {
  const date = new Date(event.date + " " + event.time);

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900">
      <div className="h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {event.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={event.image_url}
            alt={event.name}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              event.event_type === "physical"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-indigo-100 text-indigo-800"
            }`}
          >
            {event.event_type === "physical" ? "Physical" : "Virtual"}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {event.location}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <div>
            {format(date, "PPP")} • {format(date, "p")}
          </div>
          <div>
            {event.registrations_count}{" "}
            {event.registrations_count === 1 ? "Going" : "Going"}
          </div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300">
          <div>
            Presented By:{" "}
            <span className="font-medium">{event.presented_by}</span>
          </div>
          <div>
            Hosted By: <span className="font-medium">{event.hosted_by}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onView(event)}
            className="flex-1 rounded-md border cursor-pointer border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50 dark:border-gray-700"
          >
            View Details
          </button>
          <button
            onClick={() => onRsvp(event)}
            className="flex-1 rounded-md cursor-pointer bg-custom-green px-3 py-2 text-sm font-medium text-white "
          >
            RSVP
          </button>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
