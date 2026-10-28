import { Community } from "@/components/community";
import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { SiteLayout } from "@/components/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <main className="flex-grow">
        <Hero />
        <Community />
        <News />
      </main>
    </SiteLayout>
  );
}
