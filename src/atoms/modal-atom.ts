import { ReactNode } from "react";
import { atom, useSetRecoilState } from "recoil";

import { ModalAtom } from "@/types/atom";

export const modalAtom = atom<ModalAtom>({
  key: "modal",
  default: null,
});

export const useModalAtom = () => {
  const setModalState = useSetRecoilState(modalAtom);

  const showModal = (children: ReactNode) => {
    setModalState(children);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return { showModal, closeModal };
};
