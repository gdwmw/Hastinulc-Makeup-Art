import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { FaChevronRight } from "react-icons/fa";

import portfolioImage from "@/public/assets/images/model/Portfolio.jpg";
import { ExampleATWM, SectionHeader } from "@/src/components";

export const Portfolio: FC = (): ReactElement => (
  <section className="scroll-mt-[88px] bg-white pt-24" id="portfolio">
    <div className="container mx-auto flex flex-col items-center gap-10 px-5">
      <SectionHeader
        className={{ container: "max-w-[1000px] text-center", title: "text-4xl sm:text-5xl md:text-6xl" }}
        description="Portofolio kami menyoroti seni dan ketelitian yang menjadi ciri khas karya kami. Dari tampilan tegas dan dramatis hingga elegan alami yang lembut, setiap gambar mencerminkan dedikasi kami terhadap kesempurnaan. Dengan pengalaman lebih dari 15 tahun, kami telah mengubah wajah-wajah menjadi mahakarya abadi untuk setiap acara spesial. Jelajahi karya kami dan biarkan kami menginspirasi penampilan tak terlupakan Anda berikutnya."
        subtitle="PORTOFOLIO"
        title="Memamerkan Mahakarya Kami"
      />

      <Image alt="Portfolio Image" className="rounded-lg" loading="lazy" src={portfolioImage} width={1000} />

      <Link
        className={ExampleATWM({ className: "w-64 font-semibold", color: "rose", size: "sm", variant: "solid" })}
        href={"https://www.instagram.com/hastinulc_makeupart/"}
        prefetch={false}
        target="_blank"
      >
        <FaChevronRight size={14} /> LIHAT LEBIH BANYAK
      </Link>
    </div>
  </section>
);
