import { Community } from "@/components/community";
import { Hero } from "@/components/hero";
import { News } from "@/components/news";
import { SiteLayout } from "@/components/site-layout";
import { getDebianNews } from "@/lib/debian-news";

export default async function HomePage() {
  const news = await getDebianNews();

  return (
    <SiteLayout>
      <main className="flex-grow">
        <Hero />
        <Community />
        <News {...news} />
      </main>
    </SiteLayout>
  );
}
