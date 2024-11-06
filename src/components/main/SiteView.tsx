"use client";

import Image from "next/image";
import Link from "next/link";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ChevronLeft } from "lucide-react";
import useSWR from "swr";

import FontDisplay from "@/components/common/FontDisplay";
import PieChart from "@/components/common/PieChart";
import TagBar from "@/components/common/TagBar";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFirestoreUser } from "@/hooks/useFirestoreUser";
import { SocialIcon } from "@/icons/SocialIcon";
import { getDomain } from "@/lib/utils";
import { UserData, WebsiteData, WebsiteDataFetch } from "@/types";

import { WebsiteDetailDocument } from "../../../prismicio-types";

const SiteView = ({
  data,
  user,
  details,
}: {
  data: WebsiteDataFetch;
  user: UserData;
  details: WebsiteDetailDocument<string>;
}) => {
  const date = new Date(data.publishDate * 1000).toLocaleString();
  // const { userInfo: owner, isLoading, error } = useFirestoreUser(data.ownerId);

  return (
    <>
      <section className="flex flex-col gap-6 px-6 py-10 md:px-16 md:py-10">
        <div className="flex items-start justify-between lg:items-center">
          <div className="flex flex-col gap-2 md:gap-6 lg:flex-row">
            <Link className="hidden text-primary lg:flex lg:gap-2" href="\">
              <ChevronLeft /> Home
            </Link>
            <p className="c-body font-semibold text-[#1B1B1B]">{data.title}</p>
            <TagBar tags={data.tags} />
          </div>
          <div className="flex gap-4">
            <div className="flex opacity-0 md:items-center">
              <div className="me-1 mt-[6px] h-[14px] w-[14px] rounded-full border-4 border-[#D7E2FF] bg-[#3D52D5] md:mt-0" />
              <p className="c-body font-semibold uppercase text-primary">
                {details.data.nominated}
              </p>
            </div>
            <button className="hidden rounded-[8px] border border-black px-4 py-3 md:block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5001 15.5001C6.3752 15.4951 7.21688 15.1634 7.8601 14.5701L14.1201 18.1501C14.0404 18.4264 14 18.7125 14.0001 19.0001C13.9937 19.8116 14.2671 20.6006 14.7743 21.2341C15.2815 21.8677 15.9915 22.3071 16.7848 22.4785C17.5781 22.6498 18.4061 22.5426 19.1296 22.1748C19.8531 21.807 20.4277 21.2012 20.7568 20.4594C21.0859 19.7175 21.1493 18.8849 20.9363 18.1018C20.7234 17.3187 20.2471 16.6328 19.5876 16.1597C18.9282 15.6867 18.1259 15.4553 17.3158 15.5045C16.5058 15.5538 15.7374 15.8806 15.1401 16.4301L8.8801 12.8501C8.95565 12.6037 8.99605 12.3478 9.0001 12.0901L15.1501 8.57008C15.7442 9.10692 16.5047 9.42317 17.3043 9.46578C18.1039 9.5084 18.8938 9.27479 19.5415 8.80413C20.1893 8.33348 20.6555 7.6544 20.862 6.8808C21.0685 6.1072 21.0027 5.28611 20.6757 4.55526C20.3486 3.8244 19.7802 3.22822 19.0658 2.86671C18.3514 2.50519 17.5344 2.40033 16.7518 2.56971C15.9692 2.73908 15.2687 3.17239 14.7677 3.79697C14.2667 4.42155 13.9957 5.1994 14.0001 6.00008C14.0035 6.28739 14.0438 6.57307 14.1201 6.85008L8.4301 10.1001C8.10041 9.59004 7.64367 9.17456 7.10479 8.89448C6.5659 8.61441 5.9634 8.47938 5.35653 8.50267C4.74965 8.52595 4.15928 8.70675 3.64343 9.0273C3.12759 9.34784 2.70403 9.79709 2.41439 10.3309C2.12475 10.8647 1.979 11.4647 1.99146 12.0719C2.00392 12.6791 2.17416 13.2726 2.48545 13.7941C2.79675 14.3155 3.23837 14.747 3.76693 15.0462C4.29549 15.3453 4.89278 15.5017 5.5001 15.5001ZM17.5001 17.5001C17.7968 17.5001 18.0868 17.5881 18.3335 17.7529C18.5801 17.9177 18.7724 18.152 18.8859 18.4261C18.9995 18.7001 19.0292 19.0017 18.9713 19.2927C18.9134 19.5837 18.7705 19.851 18.5608 20.0607C18.351 20.2705 18.0837 20.4134 17.7927 20.4713C17.5018 20.5291 17.2002 20.4994 16.9261 20.3859C16.652 20.2724 16.4177 20.0801 16.2529 19.8334C16.0881 19.5868 16.0001 19.2968 16.0001 19.0001C16.0001 18.6023 16.1581 18.2207 16.4394 17.9394C16.7207 17.6581 17.1023 17.5001 17.5001 17.5001ZM17.5001 4.50008C17.7968 4.50008 18.0868 4.58805 18.3335 4.75288C18.5801 4.9177 18.7724 5.15197 18.8859 5.42606C18.9995 5.70014 19.0292 6.00174 18.9713 6.29272C18.9134 6.58369 18.7705 6.85096 18.5608 7.06074C18.351 7.27052 18.0837 7.41338 17.7927 7.47126C17.5018 7.52914 17.2002 7.49943 16.9261 7.3859C16.652 7.27237 16.4177 7.08011 16.2529 6.83344C16.0881 6.58676 16.0001 6.29675 16.0001 6.00008C16.0001 5.60226 16.1581 5.22072 16.4394 4.93942C16.7207 4.65812 17.1023 4.50008 17.5001 4.50008ZM5.5001 10.5001C5.79677 10.5001 6.08678 10.5881 6.33346 10.7529C6.58013 10.9177 6.77239 11.152 6.88592 11.4261C6.99945 11.7001 7.02916 12.0017 6.97128 12.2927C6.9134 12.5837 6.77054 12.851 6.56076 13.0607C6.35098 13.2705 6.08371 13.4134 5.79274 13.4713C5.50177 13.5291 5.20017 13.4994 4.92608 13.3859C4.65199 13.2724 4.41772 13.0801 4.2529 12.8334C4.08808 12.5868 4.0001 12.2968 4.0001 12.0001C4.0001 11.6023 4.15814 11.2207 4.43944 10.9394C4.72075 10.6581 5.10228 10.5001 5.5001 10.5001Z"
                  fill="#1B1B1B"
                />
              </svg>
            </button>
            <button className="c-black hidden flex-grow rounded-[8px] bg-black px-6 py-3 text-white md:block">
              {details.data.vote}
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src={data.cover}
            alt="Preview"
            width={1500}
            height={1500}
            priority
            className="h-auto w-full rounded-lg object-cover"
          />

          <div
            className="absolute bottom-[38px] left-1/2 hidden w-[450px] -translate-x-1/2 items-center rounded-[20px] md:flex"
            style={{
              boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(20px)",
            }}
          >
            <button className="flex flex-1 flex-grow justify-center gap-3 rounded-l-full bg-white py-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5001 15.5001C6.3752 15.4951 7.21688 15.1634 7.8601 14.5701L14.1201 18.1501C14.0404 18.4264 14 18.7125 14.0001 19.0001C13.9937 19.8116 14.2671 20.6006 14.7743 21.2341C15.2815 21.8677 15.9915 22.3071 16.7848 22.4785C17.5781 22.6498 18.4061 22.5426 19.1296 22.1748C19.8531 21.807 20.4277 21.2012 20.7568 20.4594C21.0859 19.7175 21.1493 18.8849 20.9363 18.1018C20.7234 17.3187 20.2471 16.6328 19.5876 16.1597C18.9282 15.6867 18.1259 15.4553 17.3158 15.5045C16.5058 15.5538 15.7374 15.8806 15.1401 16.4301L8.8801 12.8501C8.95565 12.6037 8.99605 12.3478 9.0001 12.0901L15.1501 8.57008C15.7442 9.10692 16.5047 9.42317 17.3043 9.46578C18.1039 9.5084 18.8938 9.27479 19.5415 8.80413C20.1893 8.33348 20.6555 7.6544 20.862 6.8808C21.0685 6.1072 21.0027 5.28611 20.6757 4.55526C20.3486 3.8244 19.7802 3.22822 19.0658 2.86671C18.3514 2.50519 17.5344 2.40033 16.7518 2.56971C15.9692 2.73908 15.2687 3.17239 14.7677 3.79697C14.2667 4.42155 13.9957 5.1994 14.0001 6.00008C14.0035 6.28739 14.0438 6.57307 14.1201 6.85008L8.4301 10.1001C8.10041 9.59004 7.64367 9.17456 7.10479 8.89448C6.5659 8.61441 5.9634 8.47938 5.35653 8.50267C4.74965 8.52595 4.15928 8.70675 3.64343 9.0273C3.12759 9.34784 2.70403 9.79709 2.41439 10.3309C2.12475 10.8647 1.979 11.4647 1.99146 12.0719C2.00392 12.6791 2.17416 13.2726 2.48545 13.7941C2.79675 14.3155 3.23837 14.747 3.76693 15.0462C4.29549 15.3453 4.89278 15.5017 5.5001 15.5001ZM17.5001 17.5001C17.7968 17.5001 18.0868 17.5881 18.3335 17.7529C18.5801 17.9177 18.7724 18.152 18.8859 18.4261C18.9995 18.7001 19.0292 19.0017 18.9713 19.2927C18.9134 19.5837 18.7705 19.851 18.5608 20.0607C18.351 20.2705 18.0837 20.4134 17.7927 20.4713C17.5018 20.5291 17.2002 20.4994 16.9261 20.3859C16.652 20.2724 16.4177 20.0801 16.2529 19.8334C16.0881 19.5868 16.0001 19.2968 16.0001 19.0001C16.0001 18.6023 16.1581 18.2207 16.4394 17.9394C16.7207 17.6581 17.1023 17.5001 17.5001 17.5001ZM17.5001 4.50008C17.7968 4.50008 18.0868 4.58805 18.3335 4.75288C18.5801 4.9177 18.7724 5.15197 18.8859 5.42606C18.9995 5.70014 19.0292 6.00174 18.9713 6.29272C18.9134 6.58369 18.7705 6.85096 18.5608 7.06074C18.351 7.27052 18.0837 7.41338 17.7927 7.47126C17.5018 7.52914 17.2002 7.49943 16.9261 7.3859C16.652 7.27237 16.4177 7.08011 16.2529 6.83344C16.0881 6.58676 16.0001 6.29675 16.0001 6.00008C16.0001 5.60226 16.1581 5.22072 16.4394 4.93942C16.7207 4.65812 17.1023 4.50008 17.5001 4.50008ZM5.5001 10.5001C5.79677 10.5001 6.08678 10.5881 6.33346 10.7529C6.58013 10.9177 6.77239 11.152 6.88592 11.4261C6.99945 11.7001 7.02916 12.0017 6.97128 12.2927C6.9134 12.5837 6.77054 12.851 6.56076 13.0607C6.35098 13.2705 6.08371 13.4134 5.79274 13.4713C5.50177 13.5291 5.20017 13.4994 4.92608 13.3859C4.65199 13.2724 4.41772 13.0801 4.2529 12.8334C4.08808 12.5868 4.0001 12.2968 4.0001 12.0001C4.0001 11.6023 4.15814 11.2207 4.43944 10.9394C4.72075 10.6581 5.10228 10.5001 5.5001 10.5001Z"
                  fill="#1B1B1B"
                />
              </svg>
              <span className="hidden text-black md:block">
                {details.data.share}
              </span>
            </button>
            <button className="flex flex-1 flex-grow justify-center gap-3 bg-white py-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.22172 20.278C4.68559 20.7425 5.23669 21.1108 5.84334 21.3617C6.44999 21.6126 7.10023 21.7411 7.75672 21.74C8.41335 21.7411 9.06374 21.6125 9.67054 21.3617C10.2774 21.1108 10.8286 20.7425 11.2927 20.278L14.1207 17.449L12.7067 16.035L9.87872 18.864C9.31519 19.425 8.55239 19.7399 7.75722 19.7399C6.96205 19.7399 6.19925 19.425 5.63572 18.864C5.07422 18.3007 4.75892 17.5378 4.75892 16.7425C4.75892 15.9471 5.07422 15.1842 5.63572 14.621L8.46472 11.793L7.05072 10.379L4.22172 13.207C3.28552 14.1454 2.75977 15.4169 2.75977 16.7425C2.75977 18.068 3.28552 19.3395 4.22172 20.278ZM19.7777 11.793C20.7134 10.8542 21.2388 9.58288 21.2388 8.25746C21.2388 6.93204 20.7134 5.66068 19.7777 4.72196C18.8393 3.78577 17.5678 3.26001 16.2422 3.26001C14.9166 3.26001 13.6452 3.78577 12.7067 4.72196L9.87872 7.55096L11.2927 8.96496L14.1207 6.13596C14.6842 5.57495 15.447 5.25999 16.2422 5.25999C17.0374 5.25999 17.8002 5.57495 18.3637 6.13596C18.9252 6.69923 19.2405 7.46213 19.2405 8.25746C19.2405 9.05279 18.9252 9.81569 18.3637 10.379L15.5347 13.207L16.9487 14.621L19.7777 11.793Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M8.46371 17.45L7.04871 16.036L15.5357 7.55005L16.9497 8.96505L8.46371 17.45Z"
                  fill="#1B1B1B"
                />
              </svg>
              <span className="hidden text-black md:block">
                {details.data.copy_link}
              </span>
            </button>
            <button className="c-black flex-1 flex-grow rounded-r-full bg-black py-3 text-white">
              {details.data.vote}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[32px] font-bold uppercase text-black md:text-[48px] xl:text-[96px]">
            {data.title}
          </h3>
          <div
            aria-label="Website Card"
            className="flex flex-col gap-3 md:flex-row md:items-center"
          >
            <div
              className="flex flex-wrap items-center gap-4"
              aria-label="Authors"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={data?.owner.profileImage || "/profile.png"}
                  className="size-8 shrink-0 rounded-full"
                  alt="Profile Picture"
                  width={32}
                  height={32}
                />
                <p className="c-small md:c-body font-semibold text-black underline">
                  {data?.owner.username}
                </p>
              </div>
              {data.authors?.map((author) => (
                <div className="flex items-center gap-2" key={author.userId}>
                  <Image
                    src="/profile.png"
                    className="rounded-full"
                    alt="Profile Picture"
                    width={32}
                    height={32}
                  />
                  <p className="c-small md:c-body font-semibold text-black underline">
                    {author.username}
                  </p>
                </div>
              ))}
            </div>

            <div
              aria-label="Website Statistics"
              className="flex items-center gap-3"
            >
              <span className="text-3xl font-bold text-black">·</span>
              <span className="text-sm text-black md:text-lg">
                Submitted on <span>{date}</span>
              </span>
              <span className="text-3xl font-bold text-black">·</span>
              <span className="text-sm font-semibold text-black md:text-lg">
                61 {details.data.views}
              </span>{" "}
              <span className="text-3xl font-bold text-black">·</span>
              <PieChart percentage={50} />
            </div>
          </div>

          <div
            className="flex w-full items-center rounded-[20px] md:hidden"
            style={{
              boxShadow: "0px 1px 7px 0px rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(20px)",
            }}
          >
            <button className="flex flex-1 flex-grow justify-center gap-3 rounded-l-full bg-white py-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5001 15.5001C6.3752 15.4951 7.21688 15.1634 7.8601 14.5701L14.1201 18.1501C14.0404 18.4264 14 18.7125 14.0001 19.0001C13.9937 19.8116 14.2671 20.6006 14.7743 21.2341C15.2815 21.8677 15.9915 22.3071 16.7848 22.4785C17.5781 22.6498 18.4061 22.5426 19.1296 22.1748C19.8531 21.807 20.4277 21.2012 20.7568 20.4594C21.0859 19.7175 21.1493 18.8849 20.9363 18.1018C20.7234 17.3187 20.2471 16.6328 19.5876 16.1597C18.9282 15.6867 18.1259 15.4553 17.3158 15.5045C16.5058 15.5538 15.7374 15.8806 15.1401 16.4301L8.8801 12.8501C8.95565 12.6037 8.99605 12.3478 9.0001 12.0901L15.1501 8.57008C15.7442 9.10692 16.5047 9.42317 17.3043 9.46578C18.1039 9.5084 18.8938 9.27479 19.5415 8.80413C20.1893 8.33348 20.6555 7.6544 20.862 6.8808C21.0685 6.1072 21.0027 5.28611 20.6757 4.55526C20.3486 3.8244 19.7802 3.22822 19.0658 2.86671C18.3514 2.50519 17.5344 2.40033 16.7518 2.56971C15.9692 2.73908 15.2687 3.17239 14.7677 3.79697C14.2667 4.42155 13.9957 5.1994 14.0001 6.00008C14.0035 6.28739 14.0438 6.57307 14.1201 6.85008L8.4301 10.1001C8.10041 9.59004 7.64367 9.17456 7.10479 8.89448C6.5659 8.61441 5.9634 8.47938 5.35653 8.50267C4.74965 8.52595 4.15928 8.70675 3.64343 9.0273C3.12759 9.34784 2.70403 9.79709 2.41439 10.3309C2.12475 10.8647 1.979 11.4647 1.99146 12.0719C2.00392 12.6791 2.17416 13.2726 2.48545 13.7941C2.79675 14.3155 3.23837 14.747 3.76693 15.0462C4.29549 15.3453 4.89278 15.5017 5.5001 15.5001ZM17.5001 17.5001C17.7968 17.5001 18.0868 17.5881 18.3335 17.7529C18.5801 17.9177 18.7724 18.152 18.8859 18.4261C18.9995 18.7001 19.0292 19.0017 18.9713 19.2927C18.9134 19.5837 18.7705 19.851 18.5608 20.0607C18.351 20.2705 18.0837 20.4134 17.7927 20.4713C17.5018 20.5291 17.2002 20.4994 16.9261 20.3859C16.652 20.2724 16.4177 20.0801 16.2529 19.8334C16.0881 19.5868 16.0001 19.2968 16.0001 19.0001C16.0001 18.6023 16.1581 18.2207 16.4394 17.9394C16.7207 17.6581 17.1023 17.5001 17.5001 17.5001ZM17.5001 4.50008C17.7968 4.50008 18.0868 4.58805 18.3335 4.75288C18.5801 4.9177 18.7724 5.15197 18.8859 5.42606C18.9995 5.70014 19.0292 6.00174 18.9713 6.29272C18.9134 6.58369 18.7705 6.85096 18.5608 7.06074C18.351 7.27052 18.0837 7.41338 17.7927 7.47126C17.5018 7.52914 17.2002 7.49943 16.9261 7.3859C16.652 7.27237 16.4177 7.08011 16.2529 6.83344C16.0881 6.58676 16.0001 6.29675 16.0001 6.00008C16.0001 5.60226 16.1581 5.22072 16.4394 4.93942C16.7207 4.65812 17.1023 4.50008 17.5001 4.50008ZM5.5001 10.5001C5.79677 10.5001 6.08678 10.5881 6.33346 10.7529C6.58013 10.9177 6.77239 11.152 6.88592 11.4261C6.99945 11.7001 7.02916 12.0017 6.97128 12.2927C6.9134 12.5837 6.77054 12.851 6.56076 13.0607C6.35098 13.2705 6.08371 13.4134 5.79274 13.4713C5.50177 13.5291 5.20017 13.4994 4.92608 13.3859C4.65199 13.2724 4.41772 13.0801 4.2529 12.8334C4.08808 12.5868 4.0001 12.2968 4.0001 12.0001C4.0001 11.6023 4.15814 11.2207 4.43944 10.9394C4.72075 10.6581 5.10228 10.5001 5.5001 10.5001Z"
                  fill="#1B1B1B"
                />
              </svg>
              <span className="hidden text-black md:block">
                {details.data.share}
              </span>
            </button>
            <button className="flex flex-1 flex-grow justify-center gap-3 bg-white py-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.22172 20.278C4.68559 20.7425 5.23669 21.1108 5.84334 21.3617C6.44999 21.6126 7.10023 21.7411 7.75672 21.74C8.41335 21.7411 9.06374 21.6125 9.67054 21.3617C10.2774 21.1108 10.8286 20.7425 11.2927 20.278L14.1207 17.449L12.7067 16.035L9.87872 18.864C9.31519 19.425 8.55239 19.7399 7.75722 19.7399C6.96205 19.7399 6.19925 19.425 5.63572 18.864C5.07422 18.3007 4.75892 17.5378 4.75892 16.7425C4.75892 15.9471 5.07422 15.1842 5.63572 14.621L8.46472 11.793L7.05072 10.379L4.22172 13.207C3.28552 14.1454 2.75977 15.4169 2.75977 16.7425C2.75977 18.068 3.28552 19.3395 4.22172 20.278ZM19.7777 11.793C20.7134 10.8542 21.2388 9.58288 21.2388 8.25746C21.2388 6.93204 20.7134 5.66068 19.7777 4.72196C18.8393 3.78577 17.5678 3.26001 16.2422 3.26001C14.9166 3.26001 13.6452 3.78577 12.7067 4.72196L9.87872 7.55096L11.2927 8.96496L14.1207 6.13596C14.6842 5.57495 15.447 5.25999 16.2422 5.25999C17.0374 5.25999 17.8002 5.57495 18.3637 6.13596C18.9252 6.69923 19.2405 7.46213 19.2405 8.25746C19.2405 9.05279 18.9252 9.81569 18.3637 10.379L15.5347 13.207L16.9487 14.621L19.7777 11.793Z"
                  fill="#1B1B1B"
                />
                <path
                  d="M8.46371 17.45L7.04871 16.036L15.5357 7.55005L16.9497 8.96505L8.46371 17.45Z"
                  fill="#1B1B1B"
                />
              </svg>
              <span className="hidden text-black md:block">
                {details.data.copy_link}
              </span>
            </button>
            <button className="c-black flex-1 flex-grow rounded-r-full bg-black py-3 text-white">
              {details.data.vote}
            </button>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col gap-10 px-6 py-10 text-black md:gap-16 md:px-16 md:py-[120px]"
        aria-label="Website Details"
      >
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 flex-1 font-bold">{details.data.description}</h5>
          <p className="flex-1">{data.description}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 flex-1 font-bold">{details.data.vision}</h5>
          <p className="flex-1">{data.vision}</p>
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 flex-1 text-nowrap font-bold">
            {details.data.typography}
          </h5>
          <FontDisplay typography={data.typography} />
        </div>
        <div className="border-b border-dashed border-black pb-10 md:flex md:justify-between md:pb-16">
          <h5 className="mb-4 flex-1 font-bold">
            {details.data.color_palette}
          </h5>
          <div className="flex flex-1 flex-wrap items-center justify-start gap-4">
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
          <h5 className="mb-4 flex-1 font-bold">{details.data.tags}</h5>
          <div className="flex flex-1 flex-wrap gap-2">
            {data.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-[35px] border border-black px-4 py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <h1 className="mt-10 text-4xl font-bold md:text-5xl">
          {details.data.other_screens_of_the_website}
        </h1>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {data?.screens?.map((screen, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <Image
                  src={screen}
                  alt="Other Screen"
                  width={416}
                  height={416}
                  className="aspect-square w-full cursor-pointer rounded-lg object-cover"
                />
              </DialogTrigger>
              <DialogContent
                aria-describedby={undefined}
                className="overflow-y-auto border-none bg-transparent p-0 sm:max-w-2xl"
              >
                <VisuallyHidden.Root>
                  <DialogTitle>Screen {i + 1}</DialogTitle>
                </VisuallyHidden.Root>
                <Image
                  src={screen}
                  alt="Other Screen"
                  width={416}
                  height={416}
                  className="w-full rounded-lg object-cover"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
      <section
        className="relative bg-[#1B1B1B] px-6 py-20 text-white md:px-16 md:py-[120px]"
        aria-label="Designers' Information"
      >
        <div
          className="absolute -left-[380px] top-[45px] h-[644px] w-[644px] rounded-[644px] blur-[59px]"
          style={{
            background:
              "linear-gradient(236deg, rgba(0, 10, 96, 0.00) 16.76%, rgba(0, 20, 198, 0.21) 63.4%)",
          }}
        />
        <h3 className="mb-10 text-[32px] font-semibold md:text-4xl">
          {details.data.designer_information}
        </h3>
        <div className="flex flex-col gap-20 md:flex-row">
          {data.authors.map((author) => (
            <div key={author.userId} className="flex flex-col gap-4">
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
