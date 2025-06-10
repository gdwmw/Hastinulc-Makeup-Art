import { Metadata, Viewport } from "next";
import { FC, ReactElement } from "react";

import HomeLayout from "@/src/layouts/home";

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export const metadata: Metadata = {
  description: "Hastinulc Makeup Art - Layanan Makeup Profesional di Padang - Dapatkan tampilan sempurna untuk hari spesial Anda dengan harga terjangkau",
  keywords: [
    "Hastinulc Makeup Art",
    "Hastinulc Makeup",
    "Hastinulc",
    "Layanan Makeup Profesional di Padang",
    "Layanan Makeup Profesional",
    "Makeup Profesional",
  ],
  openGraph: {
    description: "Hastinulc Makeup Art - Layanan Makeup Profesional di Padang - Dapatkan tampilan sempurna untuk hari spesial Anda dengan harga terjangkau",
    images: [
      {
        alt: "Hastinulc Makeup Art",
        height: 800,
        url: "https://hastinulc-makeup-art.vercel.app/assets/images/logos/Hastinulc.png",
        width: 800,
      },
    ],
    locale: "id_ID",
    siteName: "Hastinulc Makeup Art",
    title: "Hastinulc | Beranda",
    type: "website",
    url: "https://hastinulc-makeup-art.vercel.app/",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      noimageindex: false,
    },
    index: true,
    nocache: false,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@hastinulchotimah",
    description: "Hastinulc Makeup Art - Layanan Makeup Profesional di Padang - Dapatkan tampilan sempurna untuk hari spesial Anda dengan harga terjangkau",
    images: ["https://hastinulc-makeup-art.vercel.app/assets/images/logos/Hastinulc.png"],
    title: "Hastinulc | Beranda",
  },
};

const HomePage: FC = (): ReactElement => <HomeLayout />;

export default HomePage;
