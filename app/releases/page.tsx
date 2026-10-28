import { Releases } from "@/components/releases";
import { SiteLayout } from "@/components/site-layout";

export default function ReleasesPage() {
  return (
    <SiteLayout>
      <main className="flex-grow">
        <Releases />
      </main>
    </SiteLayout>
  );
}
