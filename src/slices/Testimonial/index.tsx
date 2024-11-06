"use client";

import { useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-full flex-col bg-[#9191911A] px-6 py-10 md:px-16 md:py-[120px]"
    >
      <div className="mb-10 text-center text-4xl font-semibold text-black">
        {slice.primary.header}
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        {/* <button
          onClick={() => api?.scrollPrev()}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black hover:bg-white"
        >
          <ArrowLeft className="text-black" />
        </button> */}
        <Carousel className="w-full max-w-[750px]" setApi={setApi}>
          <CarouselContent>
            {slice.primary.feedbacks.map((item, index) => (
              <CarouselItem key={index}>
                <div className="mx-auto flex flex-col items-center gap-10 px-4">
                  <div className="flex gap-1">
                    {Array(5)
                      .fill(5)
                      .map((_, index) => (
                        <Star key={index} className="fill-black" />
                      ))}
                  </div>

                  <p className="text-center">{item.description}</p>

                  <div className="flex items-center gap-4">
                    <PrismicNextImage
                      field={item.profile}
                      className="size-[48px] shrink-0 rounded-full object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="font-semibold text-[#1B1B1B]">
                        {item.user}
                      </p>
                      <p className="text-sm text-[#999999]">
                        {item.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <button
          onClick={() => api?.scrollNext()}
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black hover:bg-white"
        >
          <ArrowRight className="text-black" />
        </button> */}
      </div>
      <div className="mx-auto mt-12 flex items-center gap-2">
        {slice.primary.feedbacks.map((item, index) => (
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
    </section>
  );
};

export default Testimonial;
