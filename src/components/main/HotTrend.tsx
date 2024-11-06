"use client";

import React from "react";

import { WOTMCarousel } from "@/components/common/CarouselSlider";
import { createStringExtractor } from "@/lib/utils";
import { WebsiteDataFetch } from "@/types";

const HotTrendSection = ({ data }: { data: WebsiteDataFetch[] }) => {
  const lang = "en";
  const t = createStringExtractor(lang);

  return (
    <section className="px-6 py-10 text-black md:px-16 md:py-[120px]">
      <div className="mb-20 flex flex-col gap-4">
        <h3 className="text-left font-semibold">{t("popularWebsitesTitle")}</h3>
        <p>{t("popularWebsitesDescription")}</p>
      </div>

      <WOTMCarousel data={data} />
    </section>
  );
};

export default HotTrendSection;
