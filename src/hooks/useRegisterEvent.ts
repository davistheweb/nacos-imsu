"use client";

import { events } from "@/services/events";
import type { RegistrationPayload, RegistrationResponse } from "@/types/events";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRegisterEvent() {
  const qc = useQueryClient();

  return useMutation<
    RegistrationResponse,
    any,
    { slug: string; payload: RegistrationPayload }
  >({
    mutationFn: async ({ slug, payload }) => {
      const res = await events.register(slug, payload);
      return res as RegistrationResponse;
    },
    onSuccess: () => {
     qc.invalidateQueries({
  queryKey: ["events"],
});
    },
  });
}
