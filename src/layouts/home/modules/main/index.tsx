import { FC, PropsWithChildren, ReactElement } from "react";

import { getAllSession, getCookie } from "@/src/hooks";
import { GETBooking } from "@/src/utils";

import { About, Contact, Home, Packages, Portfolio } from "./batches";

type T = Readonly<PropsWithChildren>;

export const Main: FC<T> = async (props): Promise<ReactElement> => {
  const language = await getCookie("language");
  const session = await getAllSession();

  const fetchBooking = async () => {
    try {
      const res = await GETBooking();
      return res.data;
    } catch {
      console.warn("GETBooking Failed, Bypassed!");
      return null;
    }
  };

  return (
    <main>
      <Home language={language} response={session?.user?.role !== "demo" ? await fetchBooking() : undefined} session={session} />
      <About language={language} />
      <Portfolio language={language} />
      <Packages language={language} />
      <Contact language={language} />
      {props.children}
    </main>
  );
};
