"use client";

import { cn, createStringExtractor } from "@/lib/util";
import React, { useRef, useState } from "react";
import WebsiteCard from "../common/WebsiteCard";
import Image from "next/image";
import { buttonLinks, filters } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const HotTrendSection = () => {
  const lang = "en";
  const t = createStringExtractor(lang);

  const tabWrapperRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <section className="px-6 pb-10 text-black md:px-16 md:pb-[120px]">
      <div className="flex flex-col gap-3">
        <div className="lg:flex lg:justify-center">
          <div
            className="tab-wrapper flex h-16 max-w-[1100px] space-x-5 overflow-x-auto rounded-3xl p-2 shadow-tab-wrapper-shadow"
            ref={tabWrapperRef}
          >
            {buttonLinks.map((item, index) => {
              const isActive = pathname === item[0];
              return (
                <Button
                  key={index}
                  className={cn(
                    "tab relative z-10 h-8 w-full flex-1 rounded-xl px-3.5 py-5 text-center font-semibold text-black",
                    {
                      "bg-linear-gradient-blue-to-pink shadow-tab-shadow":
                        isActive || index === 0,
                      "bg-transparent": !isActive && index !== 0,
                    },
                  )}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="mx-auto flex max-w-xl items-center justify-center">
          <div className="flex justify-center gap-3">
            {filters.map((filter, index) => {
              const isActive = activeFilter === filter;
              return (
                <Button
                  key={index}
                  className={cn(
                    "tab relative z-10 h-8 w-full flex-1 rounded-full px-3.5 py-5 text-center font-normal text-black",
                    {
                      "bg-linear-gradient-blue-to-pink shadow-tab-shadow":
                        isActive || index === 0,
                      "bg-transparent": !isActive && index !== 0,
                    },
                  )}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-black md:mt-[120px]">
        <div className="flex justify-center gap-1 pb-6">
          <p className="font-semibold">Hot Trend</p>
          <Image
            src="/assets/images/fire.png"
            alt="fire"
            width={16}
            height={16}
            className="my-auto"
          />
        </div>
        <h3 className="md:h1 pb-10 text-center text-2xl font-bold capitalize">
          Neumorphism
        </h3>
        <div className="flex flex-wrap gap-6">
          {[0, 0, 0, 0, 0, 0, 0].map((_) => (
            <WebsiteCard
              key={_}
              id="eg"
              coverImage="/eg.png"
              primaryAuthor="Ralph Edwards"
              profile="/profile.png"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
          ))}
        </div>
      </div>
      <Button variant="outline">{t("viewAll")}</Button>
      <Link
        href={"/search?category=neumorphism"}
        className="mx-auto flex items-center gap-2 rounded-md border-[1px] border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {t("viewAll")}
      </Link>
    </section>
  );
};

export default HotTrendSection;
