import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      <body className={inter.className}>
        <main className="min-h-screen">
          <div className="">
            <Image
              src="/logo_final_BGP.jpg"
              alt="logo"
              width={80}
              height={80}
              className="fixed top-0 left-0 ml-8 mt-6 bg-purple-700 hover:scale-[1.02] transition-all"
            />
          </div>
          <nav className="flex flex-row">
            <div className="flex flex-row my-5 mx-auto gap-x-6">
              <Link href="/about">
                <div className="text-white">About</div>
              </Link>
              <Link href="/expertise">
                <div className="text-white">Expertise</div>
              </Link>
              <Link href="/work">
                <div className="text-white">Work</div>
              </Link>
              <Link href="/blogs">
                <div className="text-white">Blogs</div>
              </Link>
              <Link href="/contact">
                <div className="text-white">Contact</div>
              </Link>
            </div>
            <button className="bg-white text-base font-medium px-2 py-1  mr-5 my-3">
              Let's Talk
            </button>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
