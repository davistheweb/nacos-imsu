import { ChapterPresidents } from "@/components/chapter-presidents/ChapterPresidents";
import { ChapterPresidentsHeading } from "@/components/chapter-presidents/ChapterPresidentsHeading";

export default function ChapterPresidentsPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <ChapterPresidentsHeading />
      <ChapterPresidents />
    </main>
  );
}
