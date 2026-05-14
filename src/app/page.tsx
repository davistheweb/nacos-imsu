import { About } from "@/components/landing/About";
import { Hero } from "@/components/landing/Hero";
import { WhatWeDo } from "@/components/landing/WhatWeDo";

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <Hero />
      <About />
      <WhatWeDo />
    </main>
  );
}
