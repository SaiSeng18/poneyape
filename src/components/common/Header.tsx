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
  SelectLabel,
  SelectTrigger,
} from "../ui/select";
import { Cross1Icon } from "@radix-ui/react-icons";

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
  const [showBanner, setShowBanner] = useState(true);
  const { currentUser, logout } = useFirebase();

  return (
    <>
      <AuthModal show={showAuthModal} setShow={setShowAuthModal} />

      {showBanner && (
        <section className="bg-white">
          <div className="container mx-auto flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
              <div className="mx-16">
                <h5 className="font-bold">Volunteer Opportunities Available</h5>
                <p className="lg:text-[14px]">
                  We’ve opened volunteering opportunities for the following -
                  full stack developer x1 , front end developer x2
                </p>
              </div>
            </div>

            <button className="me-16" onClick={() => setShowBanner(false)}>
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
      )}

      <nav className="flex h-[72px] items-center justify-between gap-10 border-b border-solid border-b-bg1 bg-[#ffffff66] px-6 lg:justify-normal lg:px-16">
        <div className="flex gap-2">
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setShowMenuPage(true)}
          >
            <Cross1Icon />
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
            className="mb-8 border-b border-[#E5E5E0] pb-8 lg:hidden"
            aria-label="Mobile Navigation Icon"
          >
            <a className="font-pyidaungsu text-[20px]">ပုံရိပ်</a>
            <button
              type="button"
              className="ms-10"
              onClick={() => setShowMenuPage(false)}
            >
              x
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
          <button
            className="primary mt-6 w-full lg:hidden"
            onClick={() => setShowAuthModal(true)}
          >
            REGISTER
          </button>
          <div
            className="mx-auto text-center lg:hidden"
            aria-label="Mobile Navigation Copyright"
          >
            <Link href="" className="text-midGrey">
              Copyright {new Date().getFullYear()} poneyape.com
            </Link>
          </div>
        </div>
        <button className="flex grow rounded-[30px] bg-[#eeeeee] px-4 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-[10px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8858 17.2543 14.5974 16.0417 15.8561C16.0073 15.8825 15.9743 15.9114 15.9428 15.9429C15.9113 15.9744 15.8824 16.0074 15.856 16.0418C14.5973 17.2543 12.8857 18 11 18C7.13401 18 4 14.866 4 11ZM16.6176 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.0781 18.0319 16.6177L21.707 20.2929C22.0975 20.6834 22.0975 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L16.6176 18.0319Z"
              fill="#1B1B1B"
            />
          </svg>
          Search
        </button>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="text-[16px] h-full border-gray-500">
              <div className="flex items-center justify-center gap-1">Eng</div>
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
                className="hidden lg:block py-0"
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
                onClick={() => logout}
              />
            </>
          ) : (
            <button
              className="c-primary hidden pb-6 lg:block"
              onClick={() => setShowAuthModal(true)}
            >
              REGISTER
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
