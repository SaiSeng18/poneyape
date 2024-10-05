"use client";

import { loadingSiteData, placeholderUserData } from "@/constants";
import SiteView from "@/components/main/SiteView";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";

export default function Site({ params }: PageProps) {
  const [data, setData] = useState<WebsiteData>(loadingSiteData);
  // we need to use the slug from params to fetch
  // the publicly viewable data of the website
  useEffect(() => {
    getDoc(doc(db, "triage-websites", params.slug)).then((resp) =>
      setData(resp.data() as unknown as WebsiteData),
    );
  });

  return (
    <>
      <SiteView data={data} user={placeholderUserData} />
      <section className="px-6 py-20 md:px-16 md:py-[120px]">
        <h1 className="font-bold">Discover Similar Collections</h1>
        <div></div>
      </section>
    </>
  );
}

export const runtime = "edge";
