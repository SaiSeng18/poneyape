import { Metadata } from "next";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import FAQ from "@/components/main/FAQ";
import HomeSection from "@/components/main/HomeSection";
import HotTrend from "@/components/main/HotTrend";
import LatestNews from "@/components/main/LatestNews";
import Team from "@/components/main/Team";
import Testimonial from "@/components/main/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import { auth } from "@/lib/firebase/firebase-admin";
import { fetchData } from "@/lib/firestore";
import { getUserLocale } from "@/locale";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { WebsiteDataFetch } from "@/types";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const lang = await getUserLocale();
  const home = await client.getSingle("home", { lang });

  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Home() {
  const data: WebsiteDataFetch[] = await fetchData("triage-websites");
  const client = createClient();
  const lang = await getUserLocale();

  const home = await client.getSingle("home", { lang });

  return (
    <div className={`lang-${lang} bg-[var(--background-blue)]`}>
      {/* <HomeSection data={data} />
      <HotTrend data={data} />
      <Testimonial />
      <Tutorial />
      <LatestNews />
      <Team />
      <FAQ /> */}{" "}
      <SliceZone
        slices={home.data.slices}
        components={components}
        context={{ data }}
      />
    </div>
  );
}
