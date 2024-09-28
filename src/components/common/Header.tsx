"use client";
import { useState } from "react";
import AuthModal from "@/components/common/AuthModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants";
import { useFirebase } from "@/hooks/useFirebase";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { Menu, Search, X } from "lucide-react";

const getNavItemIcon = (route: keyof typeof routes) => {
  switch (route) {
    case "Home":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 20.7957 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7957 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7957 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V21ZM10 21V13H14V21H10Z"
            fill="#1B1B1B"
          />
        </svg>
      );
    case "Contests":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_507_1110)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.1395 14.3547C5.23083 12.8926 4 10.59 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8C20 10.5895 18.7696 12.8917 16.8616 14.3538L17.9913 22.8685C18.0418 23.2491 17.8699 23.6251 17.549 23.8358C17.228 24.0466 16.8148 24.055 16.4855 23.8575L12 21.1662L7.5145 23.8575C7.18522 24.0551 6.7719 24.0466 6.45096 23.8358C6.13002 23.625 5.95815 23.249 6.00871 22.8683L7.1395 14.3547ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 10.0815 16.9401 11.9154 15.3305 12.9915C15.2735 13.021 15.2198 13.0558 15.1702 13.0951C14.2503 13.6686 13.1639 14 12 14C8.68629 14 6 11.3137 6 8ZM14.9861 15.4241C14.0634 15.7956 13.0556 16 12 16C10.9448 16 9.93733 15.7957 9.01497 15.4245L8.26444 21.0751L11.4855 19.1425C11.8022 18.9525 12.1978 18.9525 12.5145 19.1425L15.7359 21.0753L14.9861 15.4241Z"
              fill="#1B1B1B"
            />
          </g>
          <defs>
            <clipPath id="clip0_507_1110">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Learning":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2C1.44772 2 1 2.44772 1 3V18C1 18.5523 1.44772 19 2 19H9C9.53043 19 10.0391 19.2107 10.4142 19.5858C10.7893 19.9609 11 20.4696 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 20.4696 13.2107 19.9609 13.5858 19.5858C13.9609 19.2107 14.4696 19 15 19H22C22.5523 19 23 18.5523 23 18V3C23 2.44772 22.5523 2 22 2H16C14.6739 2 13.4021 2.52678 12.4645 3.46447C12.2962 3.63275 12.1411 3.81178 12 3.99997C11.8589 3.81178 11.7038 3.63275 11.5355 3.46447C10.5979 2.52678 9.32608 2 8 2H2ZM13 17.5359C13.6029 17.1878 14.2918 17 15 17H21V4H16C15.2044 4 14.4413 4.31607 13.8787 4.87868C13.3161 5.44129 13 6.20435 13 7V17.5359ZM11 17.5359V7C11 6.20435 10.6839 5.44129 10.1213 4.87868C9.55871 4.31607 8.79565 4 8 4H3V17H9C9.70823 17 10.3971 17.1878 11 17.5359Z"
            fill="#1B1B1B"
          />
        </svg>
      );
    case "Explore":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2C1.44772 2 1 2.44772 1 3V18C1 18.5523 1.44772 19 2 19H9C9.53043 19 10.0391 19.2107 10.4142 19.5858C10.7893 19.9609 11 20.4696 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 20.4696 13.2107 19.9609 13.5858 19.5858C13.9609 19.2107 14.4696 19 15 19H22C22.5523 19 23 18.5523 23 18V3C23 2.44772 22.5523 2 22 2H16C14.6739 2 13.4021 2.52678 12.4645 3.46447C12.2962 3.63275 12.1411 3.81178 12 3.99997C11.8589 3.81178 11.7038 3.63275 11.5355 3.46447C10.5979 2.52678 9.32608 2 8 2H2ZM13 17.5359C13.6029 17.1878 14.2918 17 15 17H21V4H16C15.2044 4 14.4413 4.31607 13.8787 4.87868C13.3161 5.44129 13 6.20435 13 7V17.5359ZM11 17.5359V7C11 6.20435 10.6839 5.44129 10.1213 4.87868C9.55871 4.31607 8.79565 4 8 4H3V17H9C9.70823 17 10.3971 17.1878 11 17.5359Z"
            fill="#1B1B1B"
          />
        </svg>
      );
  }
};

const Header = () => {
  const [showMenuPage, setShowMenuPage] = useState<boolean>(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const pathname = usePathname().trim();
  const { currentUser, logout } = useFirebase();

  return (
    <>
      <AuthModal show={showAuthModal} setShow={setShowAuthModal} />

      <div className="max-h-[60px] w-full bg-white py-2">
        <h5 className="text-nowrap font-bold">
          Volunteer Opportunities Available
        </h5>
      </div>

      <nav className="sticky top-0 z-20 flex h-[72px] items-center justify-between gap-10 border-b border-solid border-b-bg1 bg-[#ffffff90] px-6 backdrop-blur-xl lg:justify-normal lg:px-16">
        <div className="flex gap-2">
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setShowMenuPage(true)}
          >
            <Menu />
          </button>
          <Link href="/" className="font-pyidaungsu text-[20px]">
            ပုံရိပ်
          </Link>
        </div>
        
        <div
          className="absolute left-0 top-0 h-screen w-screen overflow-y-hidden bg-white px-5 py-10 lg:static lg:h-fit lg:w-fit lg:bg-transparent"
          hidden={!showMenuPage}
        >
          <div
            className="mb-8 flex justify-between border-b border-[#E5E5E0] pb-8 lg:hidden"
            aria-label="Mobile Navigation Icon"
          >
            <a className="font-pyidaungsu text-[20px]">ပုံရိပ်</a>
            <button type="button" onClick={() => setShowMenuPage(false)}>
              <X />
            </button>
          </div>
          <ul
            className="text-[#1B1B1B] lg:flex lg:gap-8"
            aria-label="Navigation Items"
          >
            {(Object.keys(routes) as (keyof typeof routes)[]).map(
              (routeKey) => (
                <li key={routeKey}>
                  <Link
                    className={`flex gap-4 ${pathname === routes[routeKey] && "pointer-events-none font-bold"} py-4`}
                    href={routes[routeKey]}
                  >
                    {getNavItemIcon(routeKey)}
                    <h5
                      className={`regular transition-all duration-200 ${pathname === routes[routeKey] ? "font-bold text-black" : "text-darkGrey hover:text-black"}`}
                    >
                      {routeKey}
                    </h5>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Button
            className="mt-6 w-full lg:hidden"
            variant="solid"
            onClick={() => setShowAuthModal(true)}
          >
            REGISTER
          </Button>
          <div
            className="mx-auto mt-[10px] text-center lg:hidden"
            aria-label="Mobile Navigation Copyright"
          >
            <Link href="" className="text-midGrey">
              Copyright {new Date().getFullYear()} poneyape.com
            </Link>
          </div>
        </div>
        <button className="flex max-w-[490px] grow justify-end rounded-[30px] lg:justify-start lg:bg-[#eeeeee] lg:px-4 lg:py-2">
          <Search size={24} />
          <span className="hidden lg:block">Search</span>
        </button>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="h-full border-gray-500 bg-background text-[16px]">
              <div className="flex items-center justify-center gap-1">ENG</div>
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectGroup>
                <SelectItem key="eng" value="eng">
                  ENG
                </SelectItem>
                <SelectItem key="my" value="my">
                  MY
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {currentUser ? (
            <>
              <Button
                className="hidden py-0 lg:block"
                onClick={() => setShowAuthModal(true)}
                variant="outline"
              >
                Submit Work
              </Button>
              <Image
                className="rounded-full"
                src={currentUser?.photoURL || ""}
                alt="user-avatar"
                width={38}
                height={38}
                onClick={() => logout()}
              />
            </>
          ) : (
            <Button
              className="hidden py-0 lg:block"
              variant="flashy"
              onClick={() => setShowAuthModal(true)}
            >
              REGISTER
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
