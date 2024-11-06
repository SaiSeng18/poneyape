import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import { WOTMCarousel } from "@/components/common/CarouselSlider";
import { WebsiteDataFetch } from "@/types";

/**
 * Props for `PopularWebsites`.
 */
export type PopularWebsitesProps =
  SliceComponentProps<Content.PopularWebsitesSlice> & {
    context: {
      data: WebsiteDataFetch[]; // Define `data` explicitly here
    };
  };

/**
 * Component for "PopularWebsites" Slices.
 */
const PopularWebsites = ({
  slice,
  context,
}: PopularWebsitesProps): JSX.Element => {
  const data = context?.data;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-10 text-black md:px-16 md:py-[120px]"
    >
      <div className="mb-20 flex flex-col gap-4">
        <h3 className="text-left font-semibold">{slice.primary.header}</h3>
        <p>{slice.primary.title}</p>
      </div>

      <WOTMCarousel data={data} />
    </section>
  );
};

export default PopularWebsites;
