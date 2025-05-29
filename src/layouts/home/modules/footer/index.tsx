import { FC, ReactElement } from "react";

import { getCookie } from "@/src/hooks";

import { Content } from "./batches";

export const Footer: FC = async (): Promise<ReactElement> => {
  const language = await getCookie("language");

  return <Content language={language} />;
};
