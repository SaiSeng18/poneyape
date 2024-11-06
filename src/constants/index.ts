import PlaceholderImage from "@/icons/Placeholder Image.webp";
import {
  Card,
  FAQ,
  TestimonialProps,
  UserData,
  websiteCardFormat,
  WebsiteData,
} from "@/types";

export const cards: Card[] = [
  {
    id: 1,
    image: PlaceholderImage,
    name: "Thazin Win1",
    role: "UI/UX Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    linkdin_link: "https://linkedin.com",
    x_link: "https://x.com",
    dribble_link: "https://dribble.com",
  },
  {
    id: 2,
    image: PlaceholderImage,
    name: "Thazin Win2",
    role: "UI/UX Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    linkdin_link: "https://linkedin.com",
    x_link: "https://x.com",
    dribble_link: "https://dribble.com",
  },
  {
    id: 3,
    image: PlaceholderImage,
    name: "Thazin Win3",
    role: "UI/UX Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    linkdin_link: "https://linkedin.com",
    x_link: "https://x.com",
    dribble_link: "https://dribble.com",
  },
  {
    id: 4,
    image: PlaceholderImage,
    name: "Thazin Win2",
    role: "UI/UX Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    linkdin_link: "https://linkedin.com",
    x_link: "https://x.com",
    dribble_link: "https://dribble.com",
  },
  {
    id: 5,
    image: PlaceholderImage,
    name: "Thazin Win3",
    role: "UI/UX Designer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quidem.",
    linkdin_link: "https://linkedin.com",
    x_link: "https://x.com",
    dribble_link: "https://dribble.com",
  },
];

export const filters = [
  "Neumorphism",
  "Minimalism",
  "Glassmorphism",
  "Skeuomorphism",
  "Bento",
  "Dark Mode",
  "Spartial",
  "Brutalism",
  "Typography",
];

export const resources: {
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

export const placeholderSiteData: WebsiteData = {
  cover: "/eg.png",
  title: "Future Tracking",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae sequi aut harum neque possimus omnis veniam, quas ab labore sit repellendus, nam ipsum dignissimos numquam illum. Quis, veniam optio!",
  vision:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae sequi aut harum neque possimus omnis veniam, quas ab labore sit repellendus, nam ipsum dignissimos numquam illum. Quis, veniam optio!",
  publishDate: 0,
  tags: ["Blog", "Corporate"],
  typography: ["Poppins", "Pyidaungsu"],
  colorPalette: ["#E3EBEE", "#DF463C", "#1B3846"],
  authors: ["Thazin Win", "Julia"],
  owner: "",
  screens: ["/eg.png", "/eg.png", "/eg.png"],
};

export const placeholderUserData: UserData = {
  name: "Thazin Win",
  profilePicture: "/profile.png",
  id: "thazin-win",
  about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  profession: "UI/UX Designer",
  socials: ["https://linkedin.com", "https://x.com", "https://thazin-win.com"],
};

export const faq: FAQ[] = [
  {
    id: 1,
    question: "Question Text Go Here",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!",
  },
  {
    id: 2,
    question: "Question Text Go Here",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!",
  },
  {
    id: 3,
    question: "Question Text Go Here",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et suscipit tenetur voluptatibus ex optio corrupti non, culpa error eius natus sint dignissimos ullam esse voluptatem laudantium quas, mollitia ea commodi!",
  },
];

export const routes = {
  Home: "/",
  Contests: "/contests",
  Learning: "/learning",
  Explore: "/explore",
};

export const Testimonials: TestimonialProps[] = [
  {
    id: 1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate magnam dignissimos est praesentium enim! Repellat, voluptate, laboriosam obcaecati dolorem blanditiis cupiditate inventore eaque assumenda natus temporibus enim. Architecto, quia sapiente.",
    profile: "/profile.png",
    author: "Thazin Win",
    position: "UI/UX Designer",
  },
];

export const buttonLinks = [
  "Design Trends",
  "UI Type",
  "Featured",
  "UI Elements",
  "Apps",
];

export const websiteCard: websiteCardFormat[] = [
  {
    id: 1,
    image: "/eg.png",
    title: "Website Title",
    author_name: "Author Name",
    author_image: "/profile.png",
    link: "https://www.example.com",
  },
  {
    id: 2,
    image: "/eg.png",
    title: "Website Title",
    author_name: "Author Name",
    author_image: "/profile.png",
    link: "https://www.example.com",
  },
  {
    id: 3,
    image: "/eg.png",
    title: "Website Title",
    author_name: "Author Name",
    author_image: "/profile.png",
    link: "https://www.example.com",
  },
  {
    id: 4,
    image: "/eg.png",
    title: "Website Title",
    author_name: "Author Name",
    author_image: "/profile.png",
    link: "https://www.example.com",
  },
];
