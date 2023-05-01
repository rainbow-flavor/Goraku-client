import { ReactNode } from "react";
import { atom } from "recoil";

export const modalState = atom<ReactNode | null>({
  key: "modal",
  default: null,
});
