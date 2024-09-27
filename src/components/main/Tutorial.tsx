import React from "react";
import Image from "next/image";
import { createStringExtractor } from "@/lib/util";
import { Button } from "../ui/button";

const Tutorial = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="px-6 py-10 text-black md:flex md:px-16 md:py-[120px]">
      <Image
        alt="tutorial-thumbnail"
        className="mb-6 h-[250px] w-full bg-black md:me-20"
        src=""
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{t("tutorialNote")}</p>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold">{t("tutorialTitle")}</h3>
          <p>{t("tutorialDescription")}</p>
          <Button className="mt-4 md:w-fit" variant="solid">
            {t("tutorialButton")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
