"use client";

import EmptyState from "@/components/events/EmptyState";
import EventDetailsDialog from "@/components/events/EventDetailsDialog";
import EventGrid from "@/components/events/EventGrid";
import RSVPDialog from "@/components/events/RSVPDialog";
import { Skeleton } from "@/components/ui/Skeleton";
import { useEvents } from "@/hooks/useEvents";
import { useState } from "react";
import { nunitoFont } from "@/lib/font";
import { motion } from "framer-motion";


export function EventsPage() {

  const { data: events, isLoading } = useEvents();
  const [selected, setSelected] = useState<any | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);

  const handleView = (e: any) => {
    setSelected(e);
    setDetailsOpen(true);
  };

  const handleRsvp = (e: any) => {
    setSelected(e);
    setRsvpOpen(true);
  };

  return (
    <div className="min-h-screen w-full p-6 py-8">
      <div className="center-post-run-ani relative flex flex-col items-center justify-center gap-2 py-4">
        <motion.h1
          className="text-custom-green text-2xl font-semibold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          Upcoming Events
        </motion.h1>
        <motion.h1
          className={`${nunitoFont.className} text-center text-2xl font-extrabold md:text-4xl`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
       Discover upcoimg event for Nacos Imsu Chapter
        </motion.h1>
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="mt-6">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="space-y-2"
                >
                  <Skeleton className="h-48 w-full rounded-md" />
                  <Skeleton className="h-6 w-3/4 rounded-md" />
                  <Skeleton className="h-4 w-1/2 rounded-md" />
                </div>
              ))}
            </div>
          ) : !events || events.length === 0 ? (
            <EmptyState />
          ) : (
            <EventGrid
              events={events}
              onView={handleView}
              onRsvp={handleRsvp}
            />
          )}
        </div>
      </div>

      <EventDetailsDialog
        event={selected}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
      <RSVPDialog
        event={selected}
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
      />
      {/* <Toaster /> */}
    </div>
  );
}