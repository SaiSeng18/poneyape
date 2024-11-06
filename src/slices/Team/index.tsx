import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import OurTeamSlider from "@/components/common/OurTeamSlider";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-28 flex flex-col gap-20 px-6 py-10 text-black md:px-16 md:py-[120px]"
    >
      <div className="mb-10">
        <h3 className="mb-6 font-semibold">{slice.primary.title}</h3>
        <p>{slice.primary.description}</p>
        <OurTeamSlider />
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-4xl font-semibold">
          {slice.primary.notification_title}
        </p>
        <p className="text-[18px]">{slice.primary.notification_description}</p>
        <PrismicNextLink
          field={slice.primary.notification_link}
          className="w-fit rounded-lg bg-[#3D52D5] px-6 py-3 text-white"
        />
      </div>
    </section>
  );
};

export default Team;
