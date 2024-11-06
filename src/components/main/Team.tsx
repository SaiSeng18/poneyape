import React from "react";

import OurTeamSlider from "@/components/common/OurTeamSlider";
import { createStringExtractor } from "@/lib/utils";

const Team = () => {
  const lang = "en";
  const t = createStringExtractor(lang);
  return (
    <section className="mt-28 flex flex-col gap-20 px-6 py-10 text-black md:px-16 md:py-[120px]">
      <div className="mb-10">
        <h3 className="mb-6 font-semibold">Meet Our Team</h3>
        <p>{t("moreQuestionDescription")}</p>
        <OurTeamSlider />
      </div>
    </section>
  );
};

export default Team;
