import { About } from "@/components/landing/About";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
