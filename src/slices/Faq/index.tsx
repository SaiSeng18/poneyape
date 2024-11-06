import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import FAQDropDown from "@/components/common/FAQDropDown";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-[120px] text-black md:px-16"
    >
      <h3 className="font-semibold">{slice.primary.title}</h3>
      <p className="mb-20">{slice.primary.description}</p>

      <FAQDropDown faq={slice.primary.questions} />

      <div className="mt-20 flex flex-col gap-6">
        <p className="text-4xl font-semibold">
          {slice.primary.questioning_title}
        </p>
        <p className="text-[18px]">{slice.primary.questioning_description}</p>
        <PrismicNextLink
          field={slice.primary.questioning_link}
          className="w-fit rounded-lg border border-black px-6 py-3 text-black"
        />
      </div>
    </section>
  );
};

export default Faq;
