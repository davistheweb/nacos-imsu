import { ExecutivesList } from "@/components/executives/ExecutivesList";
import { ExecutivesPageHeading } from "@/components/executives/ExecutivesPageHeading";

export default function ExecutivesPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <ExecutivesPageHeading />
      <ExecutivesList />
    </main>
  );
}
