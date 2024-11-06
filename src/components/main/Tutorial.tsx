import React from "react";
import Image from "next/image";

import { createStringExtractor } from "@/lib/utils";

const Tutorial = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 text-black md:flex md:flex-row md:px-16 md:py-[120px]">
      <Image
        alt="tutorial-thumbnail"
        className="mb-6 aspect-square w-full shrink-0 rounded-lg bg-black object-cover md:me-20 md:w-1/2"
        src="/eg.png"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t("tutorialNote")}</p>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold">{t("tutorialTitle")}</h3>
          <p>{t("tutorialDescription")}</p>
          <button className="mt-4 rounded-[5px] bg-[#3D52D5] px-6 py-4 text-white md:w-fit">
            {t("tutorialButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
