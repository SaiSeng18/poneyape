import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@/lib/prismicio-next";

/**
 * Props for `Subscribe`.
 */
export type SubscribeProps = SliceComponentProps<Content.SubscribeSlice>;

/**
 * Component for "Subscribe" Slices.
 */
const Subscribe = ({ slice }: SubscribeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[url('/assets/images/subscribe-bg.webp')] px-6 py-20 text-white md:px-16 md:py-[120px]"
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold">{slice.primary.title}</h3>
        <p className="c-body">{slice.primary.description}</p>
        <div>
          <div className="mb-4">
            <input
              className="mb-4 me-4 w-full text-black md:mb-0 md:w-[325px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="c-primary w-full md:w-fit">Subscribe</button>
          </div>
          <p>
            {slice.primary.agreement}{" "}
            <PrismicNextLink className="underline" field={slice.primary.link} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
