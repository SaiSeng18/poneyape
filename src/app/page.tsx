"use client";
import WebsiteCard from "@/components/WebsiteCard";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const resources: {
  [language: string]: { translation: { [title: string]: string } };
} = {
  en: {
    translation: {
      navItemHome: "Home",
      navItemContest: "Contests",
      navItemLearn: "Learning",
      navItemExplore: "Explore",
      registerModalTitle: "Register",
      registerModalSubtitle: "Join our community!",
      heroTitle: "Elevating Design Excellence in Myanmar",
      heroDescription:
        "Join a vibrant community of designers and unleash your creativity with Poneyape. Whether you're seeking inspiration or aiming to refine your skills, Poneyape is your gateway to mastering Burmese typography and beyond.",
      designCarouselItemDesign: "Design Trends",
      designCarouselItemUI: "UI Type",
      designCarouselItemFeatured: "Featured",
      designCarouselItemUIElements: "UI Elements",
      designCarouselItemApps: "Apps",
      styleNameNeu: "Neumorphism",
      styleNameMini: "Minimilism",
      styleNameGlass: "Glassmorphism",
      styleNameSkeu: "Skeuomorphism",
      styleNameBento: "Bento",
      styleNameSpa: "Spatial",
      styleNameBrute: "Brutalism",
      styleNameTypo: "Typography",
      styleBriefNeu: "",
      styleBriefMini: "",
      styleBriefGlass: "",
      styleBriefSkeu: "",
      styleBriefBento: "",
      styleBriefSpa: "",
      styleBriefBrute: "",
      styleBriefTypo: "",
      viewAll: "View All",
      popularWebsitesTitle: "Popular Websites of the Month",
      popularWebsitesDescription:
        "Find out which projects are gaining popularity this month!",
      testimonials: "Testimonials",
      tutorialNote: "Tutorial",
      tutorialTitle: "How to submit your work?",
      tutorialDescription:
        "Done painting out the pixels of a creative design? Take these steps to submit the design and present the public with your effort.",
      tutorialButton: "Learn More",
      ctaTitle: "Get the Latest Design Updates",
      ctaDescription:
        "Subscribe to our newsletter for updates on new submissions and voting results",
      ctaButton: "Subscribe",
      ourTeamTitle: "Meet Our team",
      ourTeamDescription: "",
      volunteeringTitle: "We're open for volunteers!",
      volunteeringDescription:
        "Join us and get an amazing experience working alongsider Myanmar's most creative community.",
      contactUs: "Contact Us",
      faqTitle: "FAQs",
      faqDescription: "Frequently asked questions",
      moreQuestionTitle: "Still have a question?",
      moreQuestionDescription:
        "Book a meeting with the Poneyape team or send us an email!",
    },
  },
  mm: {
    translation: {
      navItemHome: "ပင်မစာမျက်နာ",
      navItemContest: "ပြိုင်ပွဲများ",
      navItemLearn: "သင်ယူခြင်း",
      navItemExplore: "စူးစမ်းပါ",
      registerModalTitle: "Register",
      registerModalSubtitle: "Join our community!",
      heroTitle: "မြန်မာ့ဒီဇိုင်းအရည်အသွေးကို မြှင့်တင်ခြင်း",
      heroDescription:
        "ပုံရုပ်နှင့်အတူ တက်ကြွသော ဒီဇိုင်နာလူထုထဲတွင်ပါဝင်ပါ။ စိတ်ပြေလက်ပျောက် ဒီဇိုင်းများရှာဖွေနေသည်ဖြစ်စေ၊ ဒီဇိုင်းကျွမ်းကျင်မှုကို မြှင့်တင်လိုသည်ဖြစ်စေ၊ ပုံရိပ် သည်သင်၏ လမ်းကြောင်းဖြစ်သည်။",
      designCarouselItemDesign: "Design Trends",
      designCarouselItemUI: "UI Type",
      designCarouselItemFeatured: "Featured",
      designCarouselItemUIElements: "UI Elements",
      designCarouselItemApps: "Apps",
      styleNameNeu: "Neumorphism",
      styleNameMini: "Minimilism",
      styleNameGlass: "Glassmorphism",
      styleNameSkeu: "Skeuomorphism",
      styleNameBento: "Bento",
      styleNameSpa: "Spatial",
      styleNameBrute: "Brutalism",
      styleNameTypo: "Typography",
      styleBriefNeu: "",
      styleBriefMini: "",
      styleBriefGlass: "",
      styleBriefSkeu: "",
      styleBriefBento: "",
      styleBriefSpa: "",
      styleBriefBrute: "",
      styleBriefTypo: "",
      viewAll: "ဆက်လက်ကြည့်ရှုရန်",
      popularWebsitesTitle: "ဒီလအဟော့ဆုံးများ",
      popularWebsitesDescription:
        "ယခုလအတွက် အဟော့ဆုံး ဖြစ်နေတဲ့ ဒီဇိုင်း‌တွေကိုကြည့်ပြီးပြီးလား",
      testimonials: "သက်သေခံချက်များ",
      tutorialNote: "Tutorial",
      tutorialTitle: "သင့်ဝဘ်ဆိုဒ်ကို ဘယ်လို အပ်လုဒ်လုပ်မလဲ။",
      tutorialDescription:
        "သင့်ဒီဇိုင်းကို ဆွဲပြီးပြီလား။ ဒီအဆင့်များကိုလိုက်နာပြီး ကြိုးပမ်းမှုကို အကောင်ထည်ဖော် တင်ပြလိုက်ပါ။",
      tutorialButton: "Learn More",
      ctaTitle: "ပုံရိပ်ဂျာနယ် ရရှိရန် စာရင်းသွင်းပါ",
      ctaButton: "စာရင်းသွင်းပါ",
      ctaDescription:
        "အပ်လုဒ်အသစ်များနှင့် ဒီဇိုင်းဆိုင်ရာ အပ်ဒိတ်များအတွက် ပုံရိပ်ဂျာနယ်ကို စာရင်းသွင်းပါ။",
      ourTeamTitle: "ပုံရိပ် ရဲဘော အာစိကြီးများ",
      Description: "ထောက်ပံ",
      volunteeringTitle: "ပုံရိပ်မှာ စေတနာ့ဝန်ထမ်းအဖြစ် ပါဝင်ကူညီပါ။",
      volunteeringDescription:
        "ပုံရိပ်နှင့် အတူပါဝင်ပြီး မြန်မာနိုင်ငံ၏ ဖန်တီးမှုကို အက္ခရာထား‌‌သော အဖွဲ့အစီးတွင့်အလုပ် အတွေ့အကြုံများကိုရယူပါ။",
      contactUs: "ဆက်သွယ်ရန်",
      faqTitle: "FAQs",
      faqDescription: "Frequently asked questions",
      moreQuestionTitle: "မေးလိုတာရှိသေးပါသလား",
      moreQuestionDescription:
        "ပုံရိပ် အသင်းသားတွေနှင့် တွေ့ဆုံရန် စာရင်းသွင်းပါ သို့မဟုတ် အီးမေးလ် ပို့ပါ။",
    },
  },
};

function createStringExtractor(language?: string | null) {
  if (!language) {
    language = "en";
  }
  return (title: string) => resources[language].translation[title];
}

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  const t = createStringExtractor(lang);

  return (
    <div className={`lang-${lang}`}>
      <section className="py-10 px-6 md:py-[120px]md:px-16 flex flex-col gap-10">
        <div className="py-6 text-center md:mx-auto md:max-w-[1000px]">
          <h1 className="font-poppins text-[40px] font-bold leading-10  md:text-[86px] md:leading-[100%] md:tracking-[-3.44px]">
            Elevating <span className="text-primary">Design Excellence</span> in
            Myanmar
          </h1>
          <p className="py-10 md:max-w-[800px] md:mx-auto">
            {t("heroDescription")}
          </p>
          <button className="primary pb-6 md:hidden">
            {t("registerModalTitle")}
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="semibold text-center">#1 of the month</h3>
          <Image src="" alt="most-voted-site" className="h-[248px]" />
        </div>
        <div>
          <div>
            <button>Design Trends</button>
            <button>UI Type</button>
            <button>Featured</button>
            <button>UI Elements</button>
            <button>Apps</button>
          </div>
          <div>
            <button>Neumorphism</button>
            <button>Minimalism</button>
            <button>Glassmorphism</button>
            <button>Skeuomorphism</button>
            <button>Bento</button>
            <button>Dark Mode</button>
            <button>Spartial</button>
            <button>Brutalism</button>
            <button>Typography</button>
          </div>
        </div>
        <div>
          <p className="semibold text-center pb-6">Hot Trend 🔥</p>
          <h2 className="text-2xl font-[700] text-center pb-10">NEUMORPHISM</h2>
          <div className="flex flex-wrap gap-6">
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
            <WebsiteCard
              coverImage="/eg.jpg"
              author="Ralph Edwards"
              tags={["Blog", "Corporate"]}
              title="Future Tracking"
            />
          </div>
          <button className="outline mx-auto">{t("viewAll")}</button>
        </div>
      </section>
      <section className="py-10 px-6 md:py-[120px] md:px-16">
        <div className="mb-10 flex flex-col gap-4">
          <h3 className="semibold text-left">{t("popularWebsitesTitle")}</h3>
          <p>{t("popularWebsitesDescription")}</p>
        </div>
        <div>Carousel</div>
      </section>
      <section className="py-10 px-6 md:py-[120px] md:px-16 bg-[#9191911a]">
        <h3 className="semibold text-center mb-10">{t("testimonials")}</h3>
        <div>
          <Testimonial
            author="Robert Fox"
            position="CEO of everything"
            rating={5}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
          />
        </div>
      </section>
      <section className="py-10 px-6 md:py-[120px] md:px-16 md:flex">
        <Image
          alt="tutorial-thumbnail"
          className="h-[250px] w-full bg-black mb-6 md:me-20"
          src=""
        />
        <div className="flex gap-4 flex-col">
          <p className="semibold">{t("tutorialNote")}</p>
          <div className="flex gap-6 flex-col">
            <h3 className="semibold">{t("tutorialTitle")}</h3>
            <p>{t("tutorialDescription")}</p>
            <button className="primary mt-4 md:w-fit">
              {t("tutorialButton")}
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:py-[120px] md:px-16 bg-[url('/assets/images/subscribe-bg.webp')] text-white">
        <div className="flex gap-6 flex-col">
          <h3 className="semibold">{t("ctaTitle")}</h3>
          <p className="body regular">{t("ctaDescription")}</p>
          <div>
            <div className="mb-4">
              <input
                className="text-black me-4 w-full mb-4 md:mb-0 md:w-[325px]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="primary w-full md:w-fit">{t('ctaButton')}</button>
            </div>
            <p>
              By subscribing, you agree to our{" "}
              <a href="/" className="underline">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 px-6 md:py-[120px] md:px-16 flex flex-col gap-20">
        <div className="mb-10">
          <h3 className="semibold mb-6">Meet Our Team</h3>
          <p>{t('moreQuestionDescription')}</p>
          <div>Carousel</div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="semibold mb-4">We are open for volunteers</h3>
            <p>
              {t('volunteeringDescription')}
            </p>
          </div>
          <button className="primary w-full md:w-fit">{t('contactUs')}</button>
        </div>
      </section>
      <section className="py-[120px] px-6 md:px-16">
        <h3 className="semibold">{t('faqTitle')}</h3>
        <p>{t('faqDescription')}</p>
        <div>{t('moreQuestionTitle')}</div>
      </section>
    </div>
  );
}
