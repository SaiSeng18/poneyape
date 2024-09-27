import { createStringExtractor } from "@/lib/util";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LatestNews = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="bg-[url('/assets/images/subscribe-bg.webp')] px-6 py-20 text-white md:px-16 md:py-[120px]">
      <div className="flex flex-col gap-6">
        <h1>{t("ctaTitle")}</h1>
        <p className="c-body">{t("ctaDescription")}</p>
        <div>
          <div className="mb-4">
            <input
              className="mb-4 me-4 w-full text-black md:mb-0 md:w-[325px]"
              type="text"
              placeholder="Enter your email"
            />
            <Button className="w-full md:w-fit" variant="flashy">
              {t("ctaButton")}
            </Button>
          </div>
          <p>
            By subscribing, you agree to our{" "}
            <Link href="/" className="underline">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
