import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/Menu/Menu";
import CV_BG from "../../public/images/CV_BG.jpg";
import Image from "next/image";
import Info from "../../components/layout/Info";
import Provider from "../../components/Providers/Provider";
const inter = Inter({ subsets: ["latin"] });
import "aos/dist/aos.css";
import Darkmode from "@/components/Darkmode/Darkmode";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 min-h-screen transition-colors duration-1000 bg-gray-200 dark:bg-slate-800 relative">
        <Provider>
          <Darkmode />
          <div className={`${inter.className}  container mt-10  `}>
            <div data-aos="zoom-in" className="absolute max-w-[1200px]  z-1">
              <Image
                className="aspect-[1100/700] opacity-100 dark:opacity-25"
                src={CV_BG}
                alt={CV_BG.src}
              />
            </div>
            <div className="z-50 relative flex flex-row justify-around pt-10">
              <div className="w-3/12">
                <Info />
              </div>
              <div className="w-8/12 ">
                <div>
                  <Menu />
                </div>
                <div className="shadow-2xl dark:bg-slate-900 rounded-lg flex flex-col pt-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
