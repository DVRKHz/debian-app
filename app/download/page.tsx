"use client";

import { useEffect, useState } from "react";
import { DownloadResources } from "@/components/download-resources";
import { DownloadSelector } from "@/components/download-selector";
import { SiteLayout } from "@/components/site-layout";
import {
  DownloadConfig,
  isReleaseBranch,
} from "@/lib/download";

const initialConfig: DownloadConfig = {
  branch: "stable",
  architecture: "amd64",
  media: "netinst",
};

export default function DownloadPage() {
  const [config, setConfig] = useState(initialConfig);

  useEffect(() => {
    const branch = new URLSearchParams(window.location.search).get("branch");
    if (isReleaseBranch(branch)) {
      setConfig((current) => ({ ...current, branch }));
    }
  }, []);

  return (
    <SiteLayout>
      <main className="flex-grow pt-12 md:pt-16">
        <DownloadSelector
          config={config}
          onConfigChange={setConfig}
        />
        <DownloadResources />
      </main>
    </SiteLayout>
  );
}
