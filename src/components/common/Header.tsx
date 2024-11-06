"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PrismicNextLink, SliceZone } from "@/lib/prismicio-next";
import {
  AwardIcon,
  BookOpen,
  HomeIcon,
  LogIn,
  LogOut,
  Search,
} from "lucide-react";

import AuthModal from "@/components/common/AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { firebaseClient } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/locale";
import { Locale } from "@/locale/config";
import { components } from "@/slices";

import {
  HeaderLinksDocument,
} from "@/../prismicio-types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Skeleton } from "../ui/skeleton";
import { NavLinks } from "./NavLinks";
import { SurveyPopup } from "./SurveyPopup";

const getNavItemIcon = (route: string) => {
  switch (route) {
    case "Home":
      return <HomeIcon className="lg:hidden" />;
    case "Contests":
      return <AwardIcon className="lg:hidden" />;
    case "Learning":
      return <BookOpen className="lg:hidden" />;
    case "Explore":
      return <Search className="lg:hidden" />;
  }
};

const Header = ({
  locale,
  data,
}: {
  locale: Locale;
  data: HeaderLinksDocument<string>;
}) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pathname = usePathname().trim();
  // const [showBanner, setShowBanner] = useState(true);

  const [surveyModel, setSurveyModel] = useState(false);
  const user = useCurrentUser();
  const links = data.data.links;

  const router = useRouter();
  const handleSearch = (e: FormData) => {
    const search = e.get("search") as string;

    if (search) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
      e.set("search", "");
    }
  };

  return (
    <>
      <AuthModal show={showAuthModal} setShow={setShowAuthModal} />
      <SurveyPopup open={surveyModel} setOpen={setSurveyModel} />
      <SliceZone
        slices={data.data.slices}
        components={components}
        context={{ locale }}
      />

      {/* {showBanner && (
        <section className="bg-linear-gradient-yellow-to-orange px-6 2xl:px-16">
          <div className="container mx-auto flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
              <div className="">
                <h5 className="font-bold">Volunteer Opportunities Available</h5>
                <p className="lg:text-[14px]">
                  We’ve opened volunteering opportunities for the following -
                  full stack developer x1 , front end developer x2
                </p>
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
      )} */}
      <div className="flex w-full items-center justify-between px-6 lg:px-16">
        <div className="flex items-center gap-2">
          <NavLinks links={links} setShowAuthModel={setShowAuthModal} />
          <Link
            href="/"
            className="shrink-0 font-pyidaungsu text-[20px] text-black"
          >
            <Image
              src="/poneyape.svg"
              alt="PoneYape"
              width={85}
              height={36}
              className="h-[36px] w-auto shrink-0"
            />
          </Link>
          <nav className="flex h-[72px] w-full items-center justify-end gap-2 border-solid bg-[#ffffff66]">
            <ul
              className="hidden text-[#1B1B1B] lg:flex lg:gap-8"
              aria-label="Navigation Items"
            >
              {links?.map((link, i) => {
                const url = (link.href as any).url;
                return (
                  <li key={i}>
                    <PrismicNextLink
                      field={link.href}
                      className={cn(
                        pathname === url
                          ? "pointer-events-none font-bold text-black"
                          : "text-darkGrey hover:text-black",
                        `regular flex shrink-0 gap-4 text-nowrap py-4 transition-all duration-200`,
                      )}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <form
          action={handleSearch}
          className="mx-10 hidden w-full flex-1 rounded-[30px] bg-[#eeeeee] px-4 py-3 text-black md:flex lg:hidden xl:flex"
        >
          <Search className="mr-[10px]" />
          <input
            type="text"
            name="search"
            placeholder={data.data.search as string}
            className="m-0 w-full border-none bg-transparent p-0 text-base outline-none placeholder:text-black hover:outline-none"
          />
        </form>

        <div className="flex shrink-0 items-center gap-2">
          {!locale ? (
            <Skeleton className="h-[45px] w-[90px] bg-gray-300" />
          ) : (
            <select
              value={locale}
              onChange={async (e) =>
                await setUserLocale(e.target.value as Locale)
              }
              className="rounded-[5px] border border-midGrey bg-transparent px-4 py-[10px] text-black"
            >
              <option value={"en-US"}>ENG</option>
              <option value={"my-mm"}>MY</option>
            </select>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="block md:hidden lg:block xl:hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
                    fill="#1B1B1B"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-full border-none shadow-none">
              <form
                action={handleSearch}
                className="flex w-full gap-2 rounded-[30px] border border-black bg-white px-4 py-3 text-black"
              >
                <Search className="mr-[10px]" />
                <input
                  type="text"
                  name="search"
                  placeholder={data.data.search as string}
                  className="m-0 w-full border-none bg-transparent p-0 text-base outline-none placeholder:text-black hover:outline-none"
                />
              </form>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <button className="block shrink-0 -rotate-90 lg:hidden">
              <LogOut className="text-black" />
            </button>
          ) : (
            <button className="block shrink-0 lg:hidden">
              <LogIn className="text-black" />
            </button>
          )}

          {user ? (
            <>
              <Link href="/create">
                <button className="c-outline hidden pb-6 lg:block">
                  {data.data.submit_work}
                </button>
              </Link>

              <Popover>
                <PopoverTrigger>
                  {user?.photoURL ? (
                    <Image
                      src={user?.photoURL || ""}
                      alt="user-avatar"
                      width={48}
                      height={48}
                      className="size-auto shrink-0 cursor-pointer rounded-full object-cover"
                      // onClick={() => signOut()}
                    />
                  ) : (
                    <div
                      className="flex size-[48px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-lg font-medium"
                      // onClick={() => signOut()}
                    >
                      {user?.email ? user.email[0].toUpperCase() : "N/A"}
                    </div>
                  )}
                </PopoverTrigger>
                <PopoverContent className="max-w-[140px]">
                  <div className="flex flex-col items-start gap-2">
                    <button className="w-full text-left hover:text-gray-500">
                      Profile
                    </button>
                    <button
                      className="w-full text-left hover:text-gray-500"
                      onClick={() => firebaseClient.signOut()}
                    >
                      Logout
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <button
              className="c-primary hidden pb-6 lg:block"
              onClick={() => setShowAuthModal(true)}
            >
              {data.data.register}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
