"use client";

import * as Lucide from "lucide-react";
import { menuItems } from "@/data";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false);

    return (
        <div className="relative w-full flex justify-end items-center">
            <Lucide.Menu
                onClick={() => setIsMenu((prev) => !prev)}
                className="text-light-brand md:hidden block"
            />

            {isMenu && (
                <div className="absolute bottom-0 right-0 w-full translate-y-48 z-50">
                    <div className="flex flex-col w-full gap-5 bg-light-brand shadow-lg p-3 rounded-md">
                        {menuItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                className="text-dark-brand hover:text-accent-brand font-medium cursor-pointer transition-all duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileMenu;