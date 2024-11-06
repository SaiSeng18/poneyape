"use client";

import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@/lib/prismicio-next";
import type { SliceComponentProps } from "@prismicio/react";

import { cn } from "@/lib/utils";
import { Locale } from "@/locale/config";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice> & {
  context: {
    locale: Locale;
  };
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const locale = context.locale;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-[120px]"
    >
      <div className="py-6 text-center md:mx-auto md:max-w-[1000px]">
        <h1
          className={cn(
            "font-poppins text-[40px] font-bold text-black md:text-[86px]",
            locale === "en-US" ? "leading-[100%]" : "leading-[160%]",
          )}
        >
          {slice.primary.title_1}{" "}
          <span className="text-primary">{slice.primary.title_2}</span>{" "}
          {slice.primary.title_3}
        </h1>

        <p className="py-10 font-semibold text-black md:mx-auto md:max-w-[800px]">
          {slice.primary.description}
        </p>
        {/* <button className="c-primary block pb-6 md:hidden">
          {t("registerModalTitle")}
        </button> */}
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="mb-10 text-center font-semibold text-black">
          {slice.primary.featuring_title}
        </h3>

        <PrismicNextImage
          field={slice.primary.featuring_image}
          className="w-full rounded-[8px]"
        />
      </div>
    </section>
  );
};

export default Hero;
