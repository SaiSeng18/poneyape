"use client";

import { Suspense } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import useLocale from "@/locale/client";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { locale, isLoading, isValidating } = useLocale();
  console.log(locale);

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
          )}
          style={{ lineHeight: locale === "en-US" ? "100%" : "160%" }}
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
