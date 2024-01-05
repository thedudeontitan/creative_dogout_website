import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdOutlineCopyright } from "react-icons/md";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creative Dugout",
  description: "Creative Dugout's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen ">

          <Navbar />

          {children}
        </main>
        <footer className="bg-slate-50 px-2 lg:px-40 py-10 w-full">
          <div className="mb-12">
            <span>FOLLOW US</span>
          </div>
          <div className="flex flex-col lg:flex-row text-black">
            <div className="flex flex-row">
              <div className="flex flex-row gap-x-2">
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  About
                </Link>
                {"  |  "}
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  Terms of Use
                </Link>
                {"   |   "}
                <Link
                  href=""
                  className="border-b-2 border-transparent hover:border-black transition-all duration-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            <span className=" mt-10 lg:mt-0 lg:ml-auto flex flex-row items-center">
              <MdOutlineCopyright className="text-xl mr-1 lg:mx-1" />
              2023 Creative Dugout
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
