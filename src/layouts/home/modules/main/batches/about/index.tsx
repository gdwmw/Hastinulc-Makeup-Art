"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
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
import { useLanguage } from "@/src/hooks";

interface I {
  language: RequestCookie | undefined;
}

export const About: FC<I> = (props): ReactElement => {
  const language = useLanguage().get(props.language?.value ?? undefined);
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
            <span className="font-montaguSlab text-7xl text-rose-500">15+</span>
            <span className="whitespace-pre text-center font-montaguSlab">{language.about[0].experience}</span>
          </figcaption>

          <Image alt="Accent Rectangle" className="absolute -bottom-20 -left-36" src={accentRectangle} width={420} />
        </figure>

        <SectionHeader
          className={{ container: "max-w-[500px] border-b border-rose-200 pb-8", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description={language.about[0].description}
          subtitle={language.about[0].subtitle}
          title={language.about[0].title}
        />
      </section>

      <section className="container mx-auto flex justify-between gap-10 px-5 max-lg:flex-col lg:gap-5">
        <SectionHeader
          className={{ container: "max-w-[700px] max-lg:text-right", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description={language.about[1].description}
          subtitle={language.about[1].subtitle}
          title={language.about[1].title}
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
          description={language.about[2].description}
          subtitle={language.about[2].subtitle}
          title={language.about[2].title}
        />

        <footer className="z-[1] flex gap-3 font-montaguSlab max-md:flex-col md:gap-10">
          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[0]}</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[1]}</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[2]}</span>
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[3]}</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[4]}</span>
            </li>
            <li className="flex items-center gap-5">
              <FaCheck className="text-rose-500" size={20} />
              <span className="md:text-sm lg:text-xl xl:text-2xl">{language.about[2].list?.[5]}</span>
            </li>
          </ul>
        </footer>
      </section>
    </section>
  );
};
