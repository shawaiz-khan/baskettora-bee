import { StaticImageData } from "next/image";
import b1 from "@/assets/images/products/b-1.jpg"
import b2 from "@/assets/images/products/b-2.jpg"
import b3 from "@/assets/images/products/b-3.jpg"
import b4 from "@/assets/images/products/b-4.jpg"
import b5 from "@/assets/images/products/b-5.jpg"
import b6 from "@/assets/images/products/b-6.jpg"
import e1 from "@/assets/images/products/e-1.jpg"
import e2 from "@/assets/images/products/e-2.jpg"
import e3 from "@/assets/images/products/e-3.jpg"
import e4 from "@/assets/images/products/e-4.jpg"
import e5 from "@/assets/images/products/e-5.jpg"
import e6 from "@/assets/images/products/e-6.jpg"
import d1 from "@/assets/images/products/d-1.jpg"
import d2 from "@/assets/images/products/d-2.jpg"
import d3 from "@/assets/images/products/d-3.jpg"
import d4 from "@/assets/images/products/d-4.jpg"
import c1 from "@/assets/images/products/c-1.jpg"
import c2 from "@/assets/images/products/c-2.jpg"
import c3 from "@/assets/images/products/c-3.jpg"
import c4 from "@/assets/images/products/c-4.jpg"
import c5 from "@/assets/images/products/c-5.jpg"
import a1 from "@/assets/images/products/a-1.jpg"
import a2 from "@/assets/images/products/a-2.jpg"
import a3 from "@/assets/images/products/a-3.jpg"
import a4 from "@/assets/images/products/a-4.jpg"
import a5 from "@/assets/images/products/a-5.jpg"

export type TProducts = {
    images: string[] | StaticImageData[];
    title: string;
    startingPrice: number;
}

export const products: TProducts[] = [
    {
        title: "Silk Bouquets",
        startingPrice: 800,
        images: [b1, b2, b3, b4, b5, b6]
    },
    {
        title: "Customized Gifts",
        startingPrice: 8000,
        images: [d1, d2, d3, d4]
    },
    {
        title: "Stanley Makeup Cup",
        startingPrice: 5500,
        images: [c1, c2, c3, c4, c5]
    },
    {
        title: "Customized Balloons",
        startingPrice: 1500,
        images: [e1, e2, e3, e4, e5, e6]
    },
    {
        title: "12AM Surprises",
        startingPrice: 3000,
        images: [a1, a2, a3, a4, a5]
    },
];