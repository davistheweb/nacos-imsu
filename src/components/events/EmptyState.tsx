export function EmptyState({
  title = "No events available.",
}: {
  title?: string;
}) {
  return (
    <div className="py-24 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 8.5C3 6 6 3 9.5 3S16 6 16 8.5"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 15.5C21 18 18 21 14.5 21S8 18 8 15.5"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm">
          There are currently no events. Check back later or contact the
          organizers.
        </p>
      </div>
    </div>
  );
}

export default EmptyState;
