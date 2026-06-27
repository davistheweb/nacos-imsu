"use client";

import type { Event } from "@/types/events";

export function EventDetailsDialog({
  event,
  open,
  onClose,
}: {
  event?: Event | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!open || !event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white shadow-lg dark:bg-gray-900">
        <div className="p-4">
          <div className="h-64 w-full overflow-hidden rounded-md bg-gray-100">
            {event.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={event.image_url}
                alt={event.name}
                className="h-64 w-full object-cover"
              />
            ) : null}
          </div>

          <h2 className="mt-4 text-2xl font-bold">{event.name}</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {event.about}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2 dark:text-gray-200">
            <div>
              <strong>Location:</strong>
              <div>{event.location}</div>
            </div>
            <div>
              <strong>Date & Time:</strong>
              <div>
                {event.date} • {event.time}
              </div>
            </div>
            <div>
              <strong>Presented By:</strong>
              <div>{event.presented_by}</div>
            </div>
            <div>
              <strong>Hosted By:</strong>
              <div>{event.hosted_by}</div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-md bg-red-500 cursor-pointer px-3 py-2 dark:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsDialog;
