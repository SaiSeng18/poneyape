import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Tutorial`.
 */
export type TutorialProps = SliceComponentProps<Content.TutorialSlice>;

/**
 * Component for "Tutorial" Slices.
 */
const Tutorial = ({ slice }: TutorialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center px-6 py-10 text-black md:flex md:flex-row md:px-16 md:py-[120px]"
    >
      <PrismicNextImage
        className="mb-6 aspect-square w-full shrink-0 rounded-lg bg-black object-cover md:me-20 md:w-1/2"
        field={slice.primary.image}
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold">{slice.primary.header}</p>
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold">{slice.primary.title}</h3>
          <p>{slice.primary.description}</p>

          <PrismicNextLink
            className="mt-4 rounded-[5px] bg-[#3D52D5] px-6 py-4 text-white md:w-fit"
            field={slice.primary.link}
          />
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
