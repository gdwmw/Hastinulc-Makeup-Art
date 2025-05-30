"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { FaChevronRight } from "react-icons/fa";

import portfolioImage from "@/public/assets/images/model/Portfolio.jpg";
import { ExampleATWM, SectionHeader } from "@/src/components";
import { useLanguage } from "@/src/hooks";

interface I {
  language: RequestCookie | undefined;
}

export const Portfolio: FC<I> = (props): ReactElement => {
  const language = useLanguage().get(props.language?.value ?? undefined);

  return (
    <section className="scroll-mt-[88px] bg-white pt-24" id="portfolio">
      <div className="container mx-auto flex flex-col items-center gap-10 px-5">
        <SectionHeader
          className={{ container: "max-w-[1000px] text-center", title: "text-4xl sm:text-5xl md:text-6xl" }}
          description={language.portfolio.description}
          subtitle={language.portfolio.subtitle}
          title={language.portfolio.title}
        />

        <Image alt="Portfolio Image" className="rounded-lg" loading="lazy" src={portfolioImage} width={1000} />

        <Link
          className={ExampleATWM({ className: "w-64 font-semibold", color: "rose", size: "sm", variant: "solid" })}
          href={"https://www.instagram.com/hastinulc_makeupart/"}
          prefetch={false}
          target="_blank"
        >
          <FaChevronRight size={14} /> {language.portfolio.button[1]}
        </Link>
      </div>
    </section>
  );
};
