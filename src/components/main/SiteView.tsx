"use client";
import Image from "next/image";
import PieChart from "@/components/common/PieChart";
import TagBar from "@/components/common/TagBar";
import { SocialIcon } from "@/icons/SocialIcon";
import FontDisplay from "@/components/common/FontDisplay";
import { getDomain } from "@/lib/utils";
import Link from "next/link";
import { ChevronLeftIcon, Link2, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Tag from "../common/Tag";
import { useEffect, useState } from "react";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";

function formatDate(epochTimestamp: number) {
  const date = new Date(epochTimestamp);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return formattedDate;
}

const SiteView = ({ data, user }: { data: WebsiteData; user: UserData }) => {
  const [coverImageUrl, setCoverImageUrl] = useState<string | undefined>();

  useEffect(() => {
    getDownloadURL(ref(storage, `sitedata/${data.coverImageId}`)).then((url) =>
      setCoverImageUrl(url),
    );
  });

  return (
    <>
      <section className="flex flex-col gap-6 px-6 py-10 md:px-16 md:py-10">
        <div className="flex justify-between align-top">
          {/* BREADCURMBS */}
          <div className="flex flex-col gap-2 pb-6 md:flex-row md:gap-6">
            <Link className="hidden text-primary xl:flex" href="\">
              <ChevronLeftIcon className="pe-2" /> Home
            </Link>
            <p className="c-body font-semibold">{data.title}</p>
            <TagBar tags={data.tags} />
          </div>
          <div className="flex gap-4">
            {/* NOMINATED PULSE */}
            <div className="flex md:items-center">
              <div className="me-1 mt-[6px] h-[14px] w-[14px] rounded-full border-4 border-[#D7E2FF] bg-[#3D52D5] md:mt-0" />
              <p className="c-body font-semibold text-primary">NOMINATED</p>
            </div>
            {/* LG VOTE AND SHARE BUTTONS */}
            <div className="hidden gap-4 ps-4 lg:flex">
              <Button variant="outline" className="px-4">
                <Share2 />
              </Button>
              <Button variant="solid" className="bg-black text-white">
                Vote
              </Button>
            </div>
          </div>
        </div>
        <Image
          src="/eg.png"
          alt="Cover Image"
          layout="responsive"
          width={16}
          height={9}
        />
        <div>
          <h3 className="font-semibold uppercase xl:text-[96px]">
            {data.title}
          </h3>
          {/* WEBSITE CARD */}
          <div className="lg:flex lg:items-center" aria-label="Website Card">
            <div
              className="mt-2 flex gap-4 lg:mt-0"
              aria-label="Website Authors"
            >
              {data.authorIds.map((author) => (
                <div className="flex items-center gap-2" key={author}>
                  <Image
                    src="/profile.png"
                    className="rounded-[32px]"
                    alt="Profile Picture"
                    width={32}
                    height={32}
                  />
                  <p className="c-small md:c-body font-semibold underline">
                    {author}
                  </p>
                </div>
              ))}
            </div>
            <div
              aria-label="Website Statistics"
              className="c-small md:h5 flex items-center"
            >
              <span className="hidden px-1 font-semibold lg:block"> · </span>
              <span className="hidden md:block">Submitted on</span>
              <span className="px-1">{formatDate(data.publishDate)}</span>
              <span className="font-semibold"> · 61 views · </span>
              <PieChart percentage={50} />
            </div>
          </div>
        </div>
        {/* ACTION BAR */}
        <div className="relative">
          <div
            className="lg: flex w-full rounded-[20px] bg-white lg:absolute lg:-top-96 lg:max-w-[470px]"
            style={{
              boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(20px)",
            }}
          >
            <button className="flex flex-grow justify-center py-3">
              <Share2 />
              <span className="hidden">Share</span>
            </button>
            <button className="flex flex-grow justify-center py-3">
              <Link2 />
              <span className="hidden">Copy Link</span>
            </button>
            <button className="c-black flex-grow rounded-r-[20px] bg-black py-3 text-white">
              Vote
            </button>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col gap-10 px-6 py-10 md:gap-16 md:px-16 md:py-[120px]"
        aria-label="Website Details"
      >
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Description</h5>
          <p className="md:max-w-[600px]">{data.description}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Vision</h5>
          <p className="md:max-w-[600px]">{data.vision}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Typography</h5>
          <FontDisplay typography={data.typography} />
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Color Palette</h5>
          <div className="flex gap-4">
            {data.colorPalette.map((color) => (
              <div
                key={color}
                className="flex h-[170px] w-16 items-end justify-center rounded-[40px] pb-[11px]"
                style={{ background: color }}
              >
                <span
                  className="mix-blend-difference invert"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 font-bold">Tags</h5>
          <div className="flex gap-2">
            {data.tags.map((tag) => (
              <Tag tag={tag} key={tag} variant="outline" />
            ))}
          </div>
        </div>

        <h1 className="mt-10 font-bold">Other Screens of the Website</h1>
        <div className="flex flex-col gap-4">
          <Image src="/eg.jpg" alt="Other Screen" width={416} height={416} />
          <Image src="/eg.jpg" alt="Other Screen" width={416} height={416} />
          <Image src="/eg.jpg" alt="Other Screen" width={416} height={416} />
        </div>
      </section>
      <section
        className="relative -z-20 bg-[#1B1B1B] px-6 py-20 text-white md:px-16 md:py-[120px]"
        aria-label="Designers' Information"
      >
        <div
          className="absolute -left-[380px] top-[45px] -z-10 h-[644px] w-[644px] rounded-[644px] blur-[59px]"
          style={{
            background:
              "linear-gradient(236deg, rgba(0, 10, 96, 0.00) 16.76%, rgba(0, 20, 198, 0.21) 63.4%)",
          }}
        />
        <h3 className="mb-10 font-semibold">Designer Information</h3>
        <div className="flex flex-col gap-20 md:flex-row">
          {data.authorIds.map((author) => (
            <div key={author} className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <Image
                  src={user.profilePicture}
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="rounded-[100px]"
                />
                <div>
                  <p>{user.name}</p>
                  <p>{user.profession}</p>
                </div>
              </div>
              <p>{user.about}</p>
              <div className="flex gap-[14px]">
                {user.socials.map((link) => {
                  const domain = getDomain(link);
                  if (!domain) {
                    return;
                  }
                  return (
                    <Link key={domain} href={link}>
                      <SocialIcon
                        domain={domain}
                        className="h-[14px] w-[14px]"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SiteView;
