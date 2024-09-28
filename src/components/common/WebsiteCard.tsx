import Image from "next/image";
import TagBar from "./TagBar";
import Link from "next/link";
import { Button } from "../ui/button";

const WebsiteCard = ({
  id,
  title,
  tags,
  primaryAuthor,
  coverImage,
  profile,
}: WebsiteCardProps) => {
  return (
    <div className="flex flex-grow justify-center pb-6 md:pb-16">
      <div>
        <Link href={`/site/${id}`} className="group relative">
          <Image
            src={coverImage}
            alt="cover-image"
            style={{
              width: "29svw",
              height: "auto",
            }}
            layout="responsive"
            width={16}
            height={9}
            className="mb-6 max-w-[435px] cursor-pointer transition-all duration-300 md:hover:[filter:brightness(0.6)]"
          />
          <Button
            variant="outline"
            className="pointer-events-none absolute left-[150px] top-[120px] hidden border-white bg-transparent text-white transition-all duration-300 md:group-hover:block"
          >
            View Detail
          </Button>
        </Link>
        <div className="flex flex-col gap-2">
          <TagBar tags={tags} />
          <h5 className="semibold cursor-pointer">
            <Link href={`/site/${id}`}>
              <h4 className="font-semibold">{title}</h4>
            </Link>
          </h5>
          <div className="flex items-center gap-2">
            <p>By</p>
            <Image
              src={profile}
              width={32}
              height={32}
              alt="profile-picture"
              className="rounded-[32px]"
            />
            <p className="font-roboto underline">{primaryAuthor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
