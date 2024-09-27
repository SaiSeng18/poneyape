import { createStringExtractor } from "@/lib/util";
import Image from "next/image";
import React from "react";

const HomeSection = () => {
  const lang = "en";
  const t = createStringExtractor(lang);

  return (
    <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-[120px]">
      <div className="py-6 text-center md:mx-auto md:max-w-[1000px]">
        <h1 className="font-poppins text-[40px] font-bold leading-10 text-black md:text-[86px] md:leading-[100%] md:tracking-[-3.44px]">
          Elevating <span className="text-primary">Design Excellence</span> in
          Myanmar
        </h1>
        <p className="py-10 font-semibold text-black md:mx-auto md:max-w-[800px]">
          {t("heroDescription")}
        </p>
        <button className="c-primary block pb-6 md:hidden">
          {t("registerModalTitle")}
        </button>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="mb-10 text-center font-semibold text-black">
          #1 of the month
        </h3>
        <Image
          src="/eg.png"
          alt="1-of-the-month"
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
    </section>
  );
};

export default HomeSection;
