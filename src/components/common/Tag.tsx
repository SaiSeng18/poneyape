import { tags } from "@/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { MouseEventHandler } from "react";

type TagProps = {
  tag: string;
  clickable?: boolean;
  variant?: "primary" | "outline";
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const variants = {
  primary: "rounded-[20px] bg-neutralLightest px-2 py-1",
  outline: "rounded-[35px] border border-black px-4 py-2",
};

const Tag = ({ tag, clickable, variant, onClick }: TagProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex items-center gap-2", variants[variant || "primary"])}
    >
      <p className="c-small">{tags[tag as keyof typeof tags].nameEn}</p>
      {clickable && <X />}
    </div>
  );
};

export default Tag;
