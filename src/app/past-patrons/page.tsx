import { PastPatrons } from "@/components/past-patrons/PastPatrons";
import { PastPatronsHeading } from "@/components/past-patrons/PastPatronsHeading";

export default function PastPatronsPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <PastPatronsHeading />
      <PastPatrons />
    </main>
  );
}
