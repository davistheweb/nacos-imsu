"use client";

import { Input } from "@/components/ui/input";
import { useRegisterEvent } from "@/hooks/useRegisterEvent";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const schema = z.object({
  full_name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Enter phone"),
  department: z.string().min(1, "Department required"),
  level: z.string().min(1, "Level required"),
});

type FormData = z.infer<typeof schema>;

export function RSVPDialog({
  event,
  open,
  onClose,
}: {
  event?: any | null;
  open: boolean;
  onClose: () => void;
}) {
  const registerMutation = useRegisterEvent();

  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  if (!open || !event) return null;

  const onSubmit = async (data: FormData) => {
    try {
      await registerMutation.mutateAsync({
        slug: event.slug,
        payload: data as any,
      });
      toast.success("Registration successful!");
      reset()
      onClose();
    } catch (err: any) {
      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong.\nPlease try again.");
      }
    }
  };

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
      <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white shadow-lg dark:bg-gray-900">
        <div className="p-6">
          <h3 className="text-lg font-semibold">{event.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {event.location} • {event.date} • {event.time}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 grid grid-cols-1 gap-3"
          >
            <Input
              {...register("full_name")}
              placeholder="Full Name"
            />
            <Input
              {...register("email")}
              placeholder="Email"
            />
            <Input
              {...register("phone")}
              placeholder="Phone Number"
            />
            <Input
              {...register("department")}
              placeholder="Department"
            />
            <Input
              {...register("level")}
              placeholder="Level"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border px-3 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="rounded-md bg-custom-green cursor-pointer px-3 py-2 text-white"
              >
                {formState.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RSVPDialog;
