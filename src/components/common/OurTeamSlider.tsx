"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cards } from "@/constants";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

const OurTeamSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="tab-wrapper flex space-x-12 overflow-x-auto pt-20">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent className="-ml-12">
            {cards.map((value, index) => (
              <CarouselItem
                key={index}
                className="pl-12 lg:basis-1/2 xl:basis-1/3"
              >
                <div className="animate-slide min-w-[400px]">
                  <Image
                    src={value.image}
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="mb-6 rounded-[100px]"
                  />
                  <h4 className="text-2xl font-semibold leading-9">
                    {value.name}
                  </h4>
                  <p className="text-base font-normal">{value.role}</p>
                  <p className="mb-6 mt-4 text-base font-normal">{value.bio}</p>

                  <div className="flex space-x-4">
                    <Link
                      href={value.linkdin_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Icon / LinkedIn">
                          <path
                            id="Vector"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 4.13135C3.67157 4.13135 3 4.80292 3 5.63135V20.6313C3 21.4597 3.67157 22.1313 4.5 22.1313H19.5C20.3284 22.1313 21 21.4597 21 20.6313V5.63135C21 4.80292 20.3284 4.13135 19.5 4.13135H4.5ZM8.52076 8.13407C8.52639 9.09032 7.81061 9.67954 6.96123 9.67532C6.16107 9.6711 5.46357 9.03407 5.46779 8.13548C5.47201 7.29032 6.13998 6.6111 7.00764 6.63079C7.88795 6.65048 8.52639 7.29595 8.52076 8.13407ZM12.2797 10.8931H9.75971H9.7583V19.4529H12.4217V19.2532C12.4217 18.8733 12.4214 18.4933 12.4211 18.1132C12.4203 17.0994 12.4194 16.0845 12.4246 15.071C12.426 14.8249 12.4372 14.569 12.5005 14.3341C12.7381 13.4566 13.5271 12.8899 14.4074 13.0292C14.9727 13.1177 15.3467 13.4454 15.5042 13.9784C15.6013 14.3116 15.6449 14.6702 15.6491 15.0176C15.6605 16.0652 15.6589 17.1128 15.6573 18.1605C15.6567 18.5303 15.6561 18.9003 15.6561 19.2701V19.4515H18.328V19.2462C18.328 18.7942 18.3278 18.3423 18.3275 17.8904C18.327 16.7609 18.3264 15.6314 18.3294 14.5015C18.3308 13.991 18.276 13.4876 18.1508 12.994C17.9638 12.2599 17.5771 11.6524 16.9485 11.2137C16.5027 10.9015 16.0133 10.7004 15.4663 10.6779C15.404 10.6754 15.3412 10.672 15.2781 10.6686C14.9984 10.6534 14.7141 10.6381 14.4467 10.692C13.6817 10.8453 13.0096 11.1954 12.5019 11.8127C12.4429 11.8835 12.3852 11.9554 12.2991 12.0627L12.2797 12.087V10.8931ZM5.68164 19.4557H8.33242V10.8987H5.68164V19.4557Z"
                            fill="#1B1B1B"
                          />
                        </g>
                      </svg>
                    </Link>
                    <Link href={value.x_link} target="_blank" rel="noreferrer">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Icon / X">
                          <path
                            id="Vector"
                            d="M17.1761 5.13135H19.9362L13.9061 11.9087L21 21.1313H15.4456L11.0951 15.5379L6.11723 21.1313H3.35544L9.80517 13.8821L3 5.13135H8.69545L12.6279 10.244L17.1761 5.13135ZM16.2073 19.5067H17.7368L7.86441 6.67063H6.2232L16.2073 19.5067Z"
                            fill="#1B1B1B"
                          />
                        </g>
                      </svg>
                    </Link>
                    <Link
                      href={value.dribble_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Icon / Dribble">
                          <path
                            id="Vector"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 3.88867C7.03145 3.88867 3 7.92012 3 12.8887C3 17.8573 7.03145 21.8887 12 21.8887C16.9588 21.8887 21 17.8573 21 12.8887C21 7.92012 16.9588 3.88867 12 3.88867ZM17.9447 8.03726C19.0184 9.34529 19.6627 11.0145 19.6822 12.8204C19.4284 12.7716 16.8904 12.2542 14.333 12.5763C14.2744 12.4494 14.2256 12.3128 14.167 12.1761C14.0108 11.8052 13.8352 11.4245 13.6594 11.0633C16.4902 9.91147 17.7787 8.25201 17.9447 8.03726ZM12 5.21622C13.9523 5.21622 15.7386 5.94833 17.0955 7.14898C16.9588 7.3442 15.7972 8.89626 13.064 9.9212C11.8048 7.60776 10.4089 5.71405 10.1942 5.42121C10.77 5.28455 11.3753 5.21622 12 5.21622ZM8.72996 5.93856C8.93494 6.21188 10.3015 8.11535 11.5803 10.38C7.98807 11.3367 4.81562 11.3171 4.47397 11.3171C4.9718 8.93531 6.58243 6.95374 8.72996 5.93856ZM4.30803 12.8985C4.30803 12.8204 4.30803 12.7423 4.30803 12.6642C4.63991 12.6739 8.36876 12.7228 12.205 11.5709C12.4295 12.0004 12.6345 12.4397 12.8297 12.8789C12.7321 12.9082 12.6247 12.9375 12.5271 12.9668C8.56399 14.2455 6.45553 17.7401 6.27983 18.0329C5.05965 16.6761 4.30803 14.8703 4.30803 12.8985ZM12 20.5807C10.2234 20.5807 8.58352 19.9755 7.28525 18.9603C7.42191 18.6772 8.98371 15.6707 13.3178 14.1577C13.3373 14.1479 13.3471 14.1479 13.3666 14.1382C14.4501 16.9397 14.8894 19.2921 15.0065 19.9657C14.0792 20.3659 13.064 20.5807 12 20.5807ZM16.2852 19.2629C16.2072 18.7943 15.7972 16.5492 14.7917 13.7867C17.2028 13.406 19.3113 14.0308 19.5749 14.1187C19.243 16.2564 18.013 18.1013 16.2852 19.2629Z"
                            fill="#1B1B1B"
                          />
                        </g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Array(count)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={cn(
                  "size-2 cursor-pointer rounded-full bg-[#E5E5E0]",
                  index === current && "bg-[#1B1B1B]",
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
        </div>

        <div className="flex gap-[15px]">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowLeft className="text-black" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="flex size-12 items-center justify-center rounded-full border border-black hover:bg-white"
          >
            <ArrowRight className="text-black" />
          </button>
        </div>
      </div>
      {/* <div className="mt-12 flex justify-end space-x-4">
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
      </div> */}
    </>
  );
};

export default OurTeamSlider;
