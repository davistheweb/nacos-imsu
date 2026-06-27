export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
  }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface Event {
  id: string | number;
  name: string;
  slug: string;
  about: string;
  image: string | null;
  image_url: string | null;
  location: string;
  date: string;
  time: string;
  event_type: "virtual" | "physical";
  presented_by: string;
  hosted_by: string;
  host_contact: string;
  status: string;
  created_by: string | number;
  created_at: string;
  updated_at: string;
  registrations_count: number;
}

export interface EventRegistration {
  id: string | number;
  event_id: string | number;
  full_name: string;
  phone: string;
  email: string;
  department: string;
  level: string;
  created_at: string;
  updated_at: string;
}

export interface RegistrationPayload {
  full_name: string;
  email: string;
  phone: string;
  department: string;
  level: string;
}

export interface RegistrationResponse {
  message: string;
  data?: EventRegistration;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  errors?: Record<string, string[]> | null;
}
