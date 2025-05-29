"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Link from "next/link";
import { FC, ReactElement } from "react";

import { TLanguage, useLanguage } from "@/src/hooks";

interface I {
  language: RequestCookie | undefined;
}

export const Content: FC<I> = (props): ReactElement => {
  const language = useLanguage().get(props.language?.value ?? undefined);
  const { set: setLanguage } = useLanguage();

  return (
    <footer className="mt-24 flex w-full justify-between bg-rose-300 px-10 py-5 text-xs text-white">
      <section className="max-md:w-full max-md:text-center">
        <span>&copy; 2025 Hastinulc Makeup Art, {language.footer[0]}</span>
      </section>

      <section className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <select
              className="min-w-fit cursor-pointer bg-rose-300 text-white outline-none"
              defaultValue={props.language?.value ?? "ID"}
              onChange={(e) => setLanguage(e.target.value as TLanguage)}
            >
              <option className="bg-white text-black" value="EN">
                English
              </option>
              <option className="bg-white text-black" value="ID">
                Indonesia
              </option>
            </select>
          </li>
          <li>
            <Link href={""} prefetch={false}>
              {language.footer[1]}
            </Link>
          </li>
          <li>
            <Link href={""} prefetch={false}>
              {language.footer[2]}
            </Link>
          </li>
          <li>
            <Link href={""} prefetch={false}>
              {language.footer[3]}
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
