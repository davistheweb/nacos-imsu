import type { ApiResponse, Event, RegistrationPayload } from "@/types/events";
import http from "./http";

const BASE = "/api/events";

export const events = {
  async list(): Promise<Event[]> {
    const res = await http.get<Event[]>(BASE);
    return res.data;
  },

  async get(slug: string): Promise<Event> {
    const res = await http.get<Event>(`${BASE}/${slug}`);
    return res.data;
  },

  async register(slug: string, payload: RegistrationPayload) {
    const res = await http.post<ApiResponse>(
      `${BASE}/${slug}/register`,
      payload,
    );
    return res.data;
  },
};

export default events;
