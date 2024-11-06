"use client";

import React from "react";

import { createStringExtractor } from "@/lib/utils";

import FAQDropDown from "../common/FAQDropDown";

const FAQ = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="px-6 py-[120px] text-black md:px-16">
      <h3 className="font-semibold">{t("faqTitle")}</h3>
      <p>{t("faqDescription")}</p>
      <div className="mb-20">{t("moreQuestionTitle")}</div>
      <FAQDropDown />
    </section>
  );
};

export default FAQ;
