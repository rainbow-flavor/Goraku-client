import { atom } from "recoil";

import { ModalAtom } from "@/types/atom";

export const modalAtom = atom<ModalAtom>({
  key: "modal",
  default: null,
});
