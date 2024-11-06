"use client";

import React, { useState } from "react";
import type { Content, GroupField } from "@prismicio/client";

import { Simplify } from "@/../prismicio-types";

const FAQDropDown = ({
  faq,
}: {
  faq?: GroupField<Simplify<Content.FaqSliceDefaultPrimaryQuestionsItem>>;
}) => {
  const [isOpen, setIsOpen] = useState(faq?.map((item, index) => index === 0));

  const handleToggle = (key: number) => {
    setIsOpen((prevIsOpen) =>
      prevIsOpen?.map((open, i) => (i === key ? !open : open)),
    );
  };

  const OpenArrow = () => (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.70711 0.681565C7.31658 0.291041 6.68342 0.291041 6.29289 0.681565L0.292893 6.68157C-0.0976311 7.07209 -0.0976311 7.70525 0.292893 8.09578C0.683417 8.4863 1.31658 8.4863 1.70711 8.09578L7 2.80289L12.2929 8.09578C12.6834 8.4863 13.3166 8.4863 13.7071 8.09578C14.0976 7.70525 14.0976 7.07209 13.7071 6.68157L7.70711 0.681565Z"
        fill="#2D3648"
        transform="rotate(180 7 4.5)"
      />
    </svg>
  );

  const CloseArrow = () => (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.70711 0.681565C7.31658 0.291041 6.68342 0.291041 6.29289 0.681565L0.292893 6.68157C-0.0976311 7.07209 -0.0976311 7.70525 0.292893 8.09578C0.683417 8.4863 1.31658 8.4863 1.70711 8.09578L7 2.80289L12.2929 8.09578C12.6834 8.4863 13.3166 8.4863 13.7071 8.09578C14.0976 7.70525 14.0976 7.07209 13.7071 6.68157L7.70711 0.681565Z"
        fill="#2D3648"
      />
    </svg>
  );

  return (
    <div>
      <hr className="border-black" />
      {faq?.map((value, i) => (
        <div key={i} className="border-b border-black">
          <h4
            onClick={() => handleToggle(i)}
            className="flex items-center justify-between py-5"
          >
            <span className="font-roboto text-xl">{value.question}</span>{" "}
            {isOpen && isOpen[i] ? <OpenArrow /> : <CloseArrow />}
          </h4>
          <span className="pb-6">
            {isOpen && isOpen[i] && <p className="pb-6">{value.answer}</p>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FAQDropDown;
