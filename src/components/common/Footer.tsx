import { SocialIcon } from "@/icons/SocialIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-6 md:px-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col gap-6 md:mb-0">
            <Link href="https://poneyape.com/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                PoneYape
              </span>
            </Link>
            <div>
              <h2 className="font-poppins text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p>
                Elevating design excellence in myanmar.
              </p>
            </div>
            <div>
              <h2 className="font-poppins text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Contact
              </h2>
                <p>info@poneyape.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 font-poppins text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://poneyape.com/about"
                    className="hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Volunteering
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contests
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-poppins text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Learning
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Voting Rules
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Tutorials
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    YouTube Playlist
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-poppins text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link href="https://akkhayar.com/" className="hover:underline">
              Akkhayar™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="facebook" className="h-4 w-4" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="discord" className="h-4 w-4" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="x" className="h-4 w-4" />

              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <SocialIcon domain="github" className="h-4 w-4" />

              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {" "}
              <SocialIcon domain="dribbble" className="h-4 w-4" />
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
