import Link from "next/link";
import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => (
  <footer className="mt-24 flex w-full justify-between bg-rose-300 px-10 py-5 text-xs text-white">
    <section className="max-md:w-full max-md:text-center">
      <span>&copy; 2025 Hastinulc Makeup Art, Seluruh hak dilindungi.</span>
    </section>

    <section className="hidden md:block">
      <ul className="flex gap-5">
        <li>
          <Link href={""} prefetch={false}>
            Syarat Layanan
          </Link>
        </li>
        <li>
          <Link href={""} prefetch={false}>
            Kebijakan Privasi
          </Link>
        </li>
        <li>
          <Link href={""} prefetch={false}>
            Kelola Cookies
          </Link>
        </li>
      </ul>
    </section>
  </footer>
);
