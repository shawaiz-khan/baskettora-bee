import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import * as Lucide from "lucide-react";

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

        <Lucide.Menu className="text-light-brand" />
      </nav>

      {/* Hero Section */}
      <div className="space-y-4 mt-10">
        <div className="space-y-2">
          <h1 className="text-2xl text-light-brand font-semibold">Your Perfect Gift Baskets</h1>
          <p className="text-base text-light-brand">Beautiful gifts for any event. We pick each item with care.</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-accent-brand/90 hover:bg-accent-brand text-light-brand font-medium px-3 py-2 rounded-md">See Our Gifts</button>
          <button className="bg-transparent border border-accent-brand hover:bg-accent-brand text-light-brand font-medium px-3 py-2 rounded-md">Ask for Special Baskets</button>
        </div>
      </div>

      {/* Absolute Shade */}
      <div className="w-full h-36 bg-accent-brand rounded-full absolute bottom-0 right-0 translate-y-40 blur-2xl"></div>
    </div>
  );
}
