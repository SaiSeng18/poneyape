import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import LenisWrapper from "@/lib/lenis-wrapper";
import Footer from "@/components/common/Footer";
import { FirebaseProvider } from "@/context/firebaseContext";
import { Toaster } from "@/components/ui/toaster";

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
  title: "PoneYape - Elevating Desgin Excellence in Myanmar",
  description: "Join a vibrant community of designers and unleash your creativity with Poneyape. Whether you're seeking inspiration or aiming to refine your skills, Poneyape is your gateway to mastering Burmese typography and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body
        className={`${inter.className} ${poppins.variable} ${roboto.variable}`}
      >
        <FirebaseProvider>
          <Header />
          <LenisWrapper>{children}</LenisWrapper>
          <Toaster />
          <Footer />
        </FirebaseProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
