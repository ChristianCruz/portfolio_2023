import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* Left BG gradient */}
        <div className="bg-[#daffdd] absolute -z-10 top-[-6rem] left-[-25rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* Right BG gradient */}
        <div className="bg-[#d7dcff] absolute -z-10 top-[-6rem] right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <Footer />

        <Toaster position="top-right" />
      </body>
    </html>
  );
}
