import Image from "next/image";

import Tag from "@/components/common/Tag";

export default function SearchPage() {
  return (
    <section className="flex flex-col gap-10 px-6 py-10 md:px-16 md:py-20">
      <div className="flex gap-1 pb-4">
        <p className="font-semibold">Hot Trend</p>
        <Image
          src="/assets/images/fire.png"
          alt="fire"
          width={16}
          height={16}
          className="my-auto"
        />
      </div>

      <p className="font-roboto text-[148px] capitalize leading-[177px] tracking-[-10px]">
        Neumorphism
      </p>
      <div>
        <div className="mb-5 flex justify-between">
          <button>Filters</button>
          <button>Sort By</button>
        </div>
        <div className="flex justify-between">
          <Tag tag="test" clickable={true} />
          <p>Showing 0 of 100</p>
        </div>
      </div>
    </section>
  );
}
