"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonLinks, filters } from "@/constants";
import { cn, createStringExtractor } from "@/lib/utils";
import { WebsiteDataFetch } from "@/types";

import WebsiteCard from "../common/WebsiteCard";
import { Button } from "../ui/button";

const HomeSection = ({ data }: { data: WebsiteDataFetch[] }) => {
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
          src={data[0].cover || "/eg.png"}
          alt="1-of-the-month"
          width={1500}
          height={1500}
          className="w-full rounded-[8px]"
        />
      </div>
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
          <div className="flex flex-wrap justify-center gap-3">
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
      <div className="mt-[110px] text-black">
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
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {data.map((item, i) => (
            <WebsiteCard
              key={item.id}
              id={item.id!}
              coverImage={item.cover}
              primaryAuthor={item.owner}
              tags={item.tags}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <Link
        href={"/search?category=neumorphism"}
        className="mx-auto flex items-center gap-2 rounded-md border-[1px] border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {t("viewAll")}
      </Link>
    </section>
  );
};

export default HomeSection;
