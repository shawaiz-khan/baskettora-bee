"use client";

import Image from "next/image";
import logo from "@/assets/images/logo/logo.png";
import { menuItems, products, TProducts } from "@/data";
import Link from "next/link";
import MobileMenu from "../../components/mobileMenu";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ item }: { item: TProducts }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImgIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? item.images.length - 1 : newIndex;
    });
  };

  return (
    <div className="space-y-4 rounded-xl text-dark-brand">
      <div className="relative h-60 w-full overflow-hidden rounded-lg">
        <Image
          src={item.images[currentImgIndex]}
          alt={item.title}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button
            className="cursor-pointer rounded-full bg-accent-brand/70 p-2 text-light-brand transition-all duration-200 ease-in hover:bg-accent-brand"
            onClick={handlePrevImage}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="cursor-pointer rounded-full bg-accent-brand/70 p-2 text-light-brand transition-all duration-200 ease-in hover:bg-accent-brand"
            onClick={handleNextImage}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="text-lg font-medium">
          Starting from: <span className="text-accent-brand font-bold">{item.startingPrice} PKR</span>
        </p>
      </div>

      <Link href={"https://www.instagram.com/basketorra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
        <button
          className="cursor-pointer w-full rounded-full bg-accent-brand/90 py-3 font-semibold text-light-brand transition-colors duration-200 ease-in hover:bg-accent-brand"
        >
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-dark-brand p-5 text-light-brand">
        <nav className="absolute left-0 top-0 flex w-full items-center justify-between px-3 pr-5 md:w-fit md:gap-5">
          <Image src={logo} alt="Logo" className="max-w-32" />
          <MobileMenu />
          <div className="hidden gap-5 md:flex">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="cursor-pointer font-medium text-light-brand transition-all duration-200 hover:text-accent-brand"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-10 space-y-5 md:space-y-10">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-center font-semibold text-light-brand md:text-5xl">Your Perfect Gift Baskets</h1>
            <p className="text-center text-base text-light-brand md:text-lg">
              Beautiful gifts for any event. We pick each item with care.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <Link href={"/#pricing"}>
              <button
                className="cursor-pointer rounded-md bg-accent-brand/90 px-3 py-2 font-medium text-light-brand transition-all duration-200 ease-in hover:bg-accent-brand"
              >
                See Our Gifts
              </button>
            </Link>
            <Link href={"https://www.instagram.com/basketorra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="}>
              <button
                className="cursor-pointer rounded-md border border-accent-brand bg-transparent px-3 py-2 font-medium text-light-brand transition-all duration-200 ease-in hover:bg-accent-brand"
              >
                Ask for Special Baskets
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-36 w-full translate-y-40 blur-2xl md:h-96 md:w-96 md:translate-x-1/2 md:translate-y-1/2 md:blur-3xl"></div>
        <div className="absolute bottom-0 left-0 hidden h-36 w-full translate-y-40 blur-2xl md:block md:h-96 md:w-96 md:-translate-x-1/2 md:translate-y-1/2 md:blur-3xl"></div>
      </div>

      {/* Product Section */}
      <div className="min-h-screen space-y-5 p-5" id="pricing">
        <h1 className="text-2xl md:text-4xl font-bold p-3">Our Pricing List</h1>

        <div className="grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3">
          {products.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <div className="min-h-fit space-y-5 p-5 bg-dark-brand flex justify-center items-center" id="contact">
        <button className="px-5 py-2 bg-accent-brand font-medium text-light-brand rounded-full flex justify-center items-center">Instagram Link</button>
      </div>
    </>
  );
}