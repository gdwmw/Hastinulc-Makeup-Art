"use client";

import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import { FaCheck, FaPlay } from "react-icons/fa";

import accentCircle from "@/public/assets/images/background/Accent-Circle.svg";
import accentRectangle from "@/public/assets/images/background/Accent-Rectangle.svg";
import aboutImage1 from "@/public/assets/images/model/About-1.jpg";
import aboutImage2 from "@/public/assets/images/model/About-2.jpg";
import aboutImage3 from "@/public/assets/images/model/About-3.jpg";
import aboutImage4 from "@/public/assets/images/model/About-4.jpg";
import aboutImage5 from "@/public/assets/images/model/About-5.jpg";
import aboutImage6 from "@/public/assets/images/model/About-6.jpg";
import aboutImage7 from "@/public/assets/images/model/About-7.jpg";
import { SectionHeader } from "@/src/components";

export const About: FC = (): ReactElement => {
  const [active, setActive] = useState(false);

  return (
    <section className="flex scroll-mt-[88px] flex-col gap-24 bg-white pt-24" id="about">
      <section className="container relative mx-auto flex items-center justify-center gap-10 px-5 max-lg:flex-col xl:gap-20">
        <Image alt="Accent Circle" className="absolute -top-10 right-5 sm:right-36" src={accentCircle} width={96} />

        <figure className="relative flex flex-col gap-3 max-lg:order-last sm:gap-5">
          <div className="z-[1] flex gap-3 sm:gap-5">
            <div className="relative aspect-square size-full max-h-[230px] max-w-[230px] overflow-hidden rounded-lg">
              <Image alt="About Image" className="object-cover" src={aboutImage1} width={230} />
            </div>
            <div className="relative aspect-square size-full max-h-[230px] max-w-[230px] overflow-hidden rounded-lg">
              <Image alt="About Image" className="object-cover" src={aboutImage2} width={230} />
            </div>
          </div>

          <div className="z-[1] flex gap-3 sm:gap-5">
            <div className="relative aspect-square size-full max-h-[230px] max-w-[230px] overflow-hidden rounded-lg">
              <Image alt="About Image" className="object-cover" src={aboutImage4} width={230} />
            </div>
            <div className="relative aspect-square size-full max-h-[230px] max-w-[230px] overflow-hidden rounded-lg">
              <Image alt="About Image" className="object-cover" src={aboutImage3} width={230} />
            </div>
          </div>

          <figcaption className="absolute left-1/2 top-1/2 z-[2] flex size-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white">
            <span className="font-montaguSlab text-7xl text-rose-500">2+</span>
            <span className="text-center font-montaguSlab">
              Tahun
              <br />
              Pengalaman
            </span>
          </figcaption>

          <Image alt="Accent Rectangle" className="absolute -bottom-20 -left-36" src={accentRectangle} width={420} />
        </figure>

        <SectionHeader
          className={{ container: "max-w-[500px] border-b border-rose-200 pb-8", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description="Di Hastinulc Makeup Art, kami percaya setiap wajah memiliki cerita, dan kami hadir untuk membuatnya bersinar. Dengan pengalaman lebih dari 15 tahun, kami mengkhususkan diri dalam mempercantik kecantikan alami dan menciptakan tampilan tak terlupakan untuk setiap momen spesial. Percayakan pada kami untuk menampilkan rasa percaya diri dan elegan Anda dengan layanan makeup profesional kami."
          subtitle="SELAMAT DATANG DI"
          title="Professional Makeup Artist"
        />
      </section>

      <section className="container mx-auto flex justify-between gap-10 px-5 max-lg:flex-col lg:gap-5">
        <SectionHeader
          className={{ container: "max-w-[700px] max-lg:text-right", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description="Setiap momen layak menjadi luar biasa, dan kami hadir untuk mewujudkannya. Dari pernikahan hingga acara spesial, sentuhan ahli kami memastikan Anda tampil dan merasa yang terbaik. Biarkan kami menciptakan kenangan abadi dengan layanan kecantikan yang sempurna dan personal."
          subtitle="SPESIALIS KAMI"
          title="Kami Hadir untuk Membuat Hari Anda Berkesan"
        />

        <div className="flex gap-5 max-lg:justify-center">
          <div>
            <Image alt="About Image" className="rounded-lg" src={aboutImage5} />
          </div>
          <div className="lg:mt-auto xl:mt-0">
            <Image alt="About Image" className="rounded-lg" src={aboutImage6} />
          </div>
        </div>
      </section>

      <section className="container relative mx-auto flex flex-col items-center justify-center space-y-16 rounded-lg bg-slate-100 px-5 py-20 sm:mt-36 sm:pt-48 md:mt-48 md:pt-64 lg:mt-64 lg:pt-80">
        <div className="max-sm:w-full sm:absolute sm:inset-x-0 sm:-top-36 sm:z-[1] md:-top-48 lg:-top-64">
          {active ? (
            <div className="sm:px-5">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-auto aspect-video w-full max-w-[1000px] rounded-lg shadow-md"
                referrerPolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/XHOmBV4js_E?si=aKZzaIeGn4CFfE3z"
                title="YouTube Video Player"
              />
            </div>
          ) : (
            <div className="relative sm:px-5">
              <button
                className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white text-white hover:border-rose-400 hover:text-rose-400 active:scale-95 active:border-rose-300 active:text-rose-300"
                onClick={() => setActive((prev) => !prev)}
              >
                <FaPlay className="-mb-0.5 -mr-1" size={25} />
              </button>
              <Image alt="About Image" className="mx-auto aspect-video w-full max-w-[1000px] rounded-lg shadow-md" loading="lazy" src={aboutImage7} />
            </div>
          )}
        </div>

        <SectionHeader
          className={{ container: "z-[1] max-w-[700px] text-center", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description="Memilih makeup artist yang tepat adalah kunci untuk membuat hari spesial Anda tak terlupakan. Kami menggabungkan keahlian, passion, dan perhatian pada detail untuk memastikan kecantikan Anda bersinar di setiap momen. Inilah yang membuat kami berbeda."
          subtitle="KENAPA KAMI"
          title="Mengapa Memilih Kami?"
        />

        <footer className="z-[1] flex w-full gap-3 font-montaguSlab max-md:flex-col md:gap-10">
          <ul className="basis-1/2">
            <div className="mx-auto w-fit space-y-3">
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Kami datang ke lokasi Anda, di mana pun</span>
              </li>
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Layanan lengkap untuk kebutuhan Anda</span>
              </li>
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Kami membantu memilih makeup yang sempurna</span>
              </li>
            </div>
          </ul>

          <ul className="basis-1/2">
            <div className="mx-auto w-fit space-y-3">
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Suasana tenang & menyenangkan di hari spesial Anda</span>
              </li>
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Tim profesional yang berpengalaman</span>
              </li>
              <li className="flex items-center gap-5">
                <FaCheck className="min-w-fit text-rose-500" size={20} />
                <span className="md:text-sm lg:text-xl xl:text-2xl">Garansi kepuasan untuk Anda</span>
              </li>
            </div>
          </ul>
        </footer>
      </section>
    </section>
  );
};
