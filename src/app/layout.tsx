import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

import "./globals.css";

import { PrismicPreview } from "@prismicio/next";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Toaster } from "@/components/ui/toaster";
import LenisWrapper from "@/lib/lenis-wrapper";
import { getUserLocale } from "@/locale";
import { createClient, repositoryName } from "@/prismicio";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "poneyape",
  description: "Poneyape",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getUserLocale();
  const client = createClient();

  const data = await client.getSingle("header_links", { lang: locale });

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <Header locale={locale} data={data} />
        {/* <LenisWrapper> */}
        {children}
        {/* </LenisWrapper> */}
        <Footer />
        <Toaster />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
