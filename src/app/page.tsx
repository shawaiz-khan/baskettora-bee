import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import * as Lucide from "lucide-react";
import { menuItems } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 bg-dark-brand text-light-brand min-h-[80vh] relative flex flex-col justify-center items-center overflow-hidden">
      {/* One Pager Nav */}
      <nav className="px-3 pr-5 absolute top-0 left-0 w-full flex justify-between items-center">
        <Image
          src={logo}
          alt="Logo"
          className="max-w-32"
        />

        <Lucide.Menu className="text-light-brand md:hidden block" />

        <div className="hidden md:flex gap-5">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-light-brand hover:text-accent-brand font-medium cursor-pointer transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="space-y-5 md:space-y-10 mt-10">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-5xl md:text-center text-light-brand font-semibold">Your Perfect Gift Baskets</h1>
          <p className="text-base md:text-lg md:text-center text-light-brand">Beautiful gifts for any event. We pick each item with care.</p>
        </div>
        <div className="grid col-span-1 md:grid-cols-2 gap-3">
          <button className="bg-accent-brand/90 hover:bg-accent-brand cursor-pointer text-light-brand transition-all duration-200 ease-in font-medium px-3 py-2 rounded-md">See Our Gifts</button>
          <button className="bg-transparent border border-accent-brand cursor-pointer hover:bg-accent-brand transition-all duration-200 ease-in text-light-brand font-medium px-3 py-2 rounded-md">Ask for Special Baskets</button>
        </div>
      </div>

      {/* Absolute Shade */}
      <div className="w-full md:w-96 h-36 md:h-96 bg-accent-brand rounded-full absolute bottom-0 right-0 translate-y-40 md:translate-y-1/2 md:translate-x-1/2 blur-2xl md:blur-3xl"></div>
      <div className="hidden md:block w-full md:w-96 h-36 md:h-96 bg-accent-brand rounded-full absolute bottom-0 left-0 translate-y-40 md:translate-y-1/2 md:-translate-x-1/2 blur-2xl md:blur-3xl"></div>
    </div>
  );
}
