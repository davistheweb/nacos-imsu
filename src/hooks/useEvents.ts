"use client";

import { events } from "@/services/events";
import type { Event } from "@/types/events";
import { useQuery } from "@tanstack/react-query";

export function useEvents() {
  return useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: async () => {
      return events.list();
    },
    staleTime: 1000 * 60,
  });
}
