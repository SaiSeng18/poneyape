import Testimonial from "@/components/common/Testimonial";
import Tutorial from "@/components/main/Tutorial";
import LatestNews from "@/components/main/LatestNews";
import HomeSection from "@/components/main/HomeSection";
import FAQ from "@/components/main/FAQ";
import MonthlyPopularSection from "@/components/main/MothlyPopularSites";

export default function Home() {
  const lang = "en";
  return (
    <div className={`lang-${lang}`}>
      <HomeSection />
      <MonthlyPopularSection />
      {/* <HotTrend /> */}
      <Testimonial />
      <Tutorial />
      <LatestNews />
      <FAQ />
    </div>
  );
}
