"use client";
import { getIdDownloadUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const WebsiteCard2 = ({ data }: { data: WebsiteData }) => {
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  useEffect(() => {
    getIdDownloadUrl(data.coverImageId).then((u) => setCoverImageUrl(u));
  });

  return (
    <Link key={data.id} href={`/site/${data.id}`}>
      <div key={data.id} className="group relative rounded-xl">
        <Image
          className="min-h-[430px] min-w-[416px] cursor-pointer rounded-xl object-cover transition duration-1000"
          src={coverImageUrl}
          alt="Website Image"
          width={416}
          height={430}
        />
        <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
        <div className="absolute bottom-0 left-0 mx-4 my-6 w-full opacity-0 transition duration-300 group-hover:opacity-100">
          <p className="text-2xl font-semibold text-white">{data.title}</p>
          <div className="flex space-x-2">
            <p className="text-white">By</p>
            <Image
              className="rounded-full"
              src={""}
              alt="Author Image"
              width={32}
              height={32}
            />
            <p className="font-bold text-white underline">{data.authorIds}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard2;
