import { createStringExtractor } from "@/lib/utils";
import React from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import WebsiteCard2 from "../common/WebsiteCard2";

const MonthlyPopularSection = async () => {
  const lang = "en";
  const t = createStringExtractor(lang);

  const querySnapshot = await getDocs(
    query(collection(db, "triage-websites"), limit(5)),
  );

  const data = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as unknown as WebsiteData;
  });

  console.log(data);

  return (
    <section className="flex flex-col px-6 pb-10 md:px-16 md:pb-[120px]">
      <div className="mb-20 flex flex-col gap-4">
        <h3 className="text-left font-semibold">{t("popularWebsitesTitle")}</h3>
        <p>{t("popularWebsitesDescription")}</p>
      </div>
      <div className="tab-wrapper flex space-x-10 overflow-x-auto">
        {data.map((card) => (
          <WebsiteCard2 key={card.id} data={card} />
        ))}
      </div>

      <div className="mt-12 flex justify-end space-x-4">
        <svg
          className="right"
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.38867"
            width="47"
            height="47"
            rx="23.5"
            stroke="black"
          />
          <path
            d="M32 23.8887H19.83L25.42 18.2987L24 16.8887L16 24.8887L24 32.8887L25.41 31.4787L19.83 25.8887H32V23.8887Z"
            fill="#1B1B1B"
          />
        </svg>

        <svg
          className="left"
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.38867"
            width="47"
            height="47"
            rx="23.5"
            stroke="black"
          />
          <path
            d="M24 16.8887L22.59 18.2987L28.17 23.8887H16V25.8887H28.17L22.59 31.4787L24 32.8887L32 24.8887L24 16.8887Z"
            fill="#1B1B1B"
          />
        </svg>
      </div>
    </section>
  );
};

export default MonthlyPopularSection;
