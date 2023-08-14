import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Christian CD | Portfolio",
  description:
    "Christian is a Junior Developer with a senior background in Graphic Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
      >
        {/* Left BG gradient */}
        <div className="bg-[#ffd2d2] absolute -z-10 top-[-6rem] left-[-25rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* Right BG gradient */}
        <div className="bg-[#d2d7ff] absolute -z-10 top-[-6rem] right-[-20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
