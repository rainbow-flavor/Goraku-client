import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { modalAtom } from "@/atoms/modal-atom";

const useModalState = () => {
  const setModalState = useSetRecoilState(modalAtom);

  const showModal = (children: ReactNode) => {
    setModalState(children);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return { showModal, closeModal };
};

export default useModalState;
