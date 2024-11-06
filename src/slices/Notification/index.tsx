"use client";

import { useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Notification`.
 */
export type NotificationProps = SliceComponentProps<Content.NotificationSlice>;

/**
 * Component for "Notification" Slices.
 */
const Notification = ({ slice }: NotificationProps): JSX.Element => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return <></>;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`px-6 2xl:px-16`}
      style={{
        backgroundImage: `linear-gradient(to right, ${slice.primary.gradient_1}, ${slice.primary.gradient_2})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-10">
          <div className="w-[43px]">
            <PrismicNextImage field={slice.primary.icon} />
          </div>
          <div className="">
            <h5 className="font-bold">{slice.primary.title}</h5>
            <p className="lg:text-[14px]">{slice.primary.description}</p>
          </div>
        </div>

        <button onClick={() => setShowBanner(false)}>
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8353 22.864L22.3638 23.3354C22.1035 23.5957 21.6814 23.5957 21.421 23.3354L15.9999 17.9142L10.5787 23.3353C10.3184 23.5957 9.89626 23.5957 9.63591 23.3353L9.1645 22.8639C8.90415 22.6036 8.90415 22.1815 9.1645 21.9211L14.5857 16.5L9.1645 11.0788C8.90415 10.8185 8.90415 10.3964 9.1645 10.136L9.6359 9.66463C9.89625 9.40428 10.3184 9.40428 10.5787 9.66463L15.9999 15.0858L21.421 9.66462C21.6814 9.40427 22.1035 9.40427 22.3638 9.66462L22.8353 10.136C23.0956 10.3964 23.0956 10.8185 22.8353 11.0788L17.4141 16.5L22.8353 21.9211C23.0956 22.1815 23.0956 22.6036 22.8353 22.864Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Notification;
