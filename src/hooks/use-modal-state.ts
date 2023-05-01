import { ReactNode } from "react";
import { useSetRecoilState } from "recoil";

import { modalState } from "@/atoms/modal-state";

const useModalState = () => {
  const setModalState = useSetRecoilState(modalState);

  const showModal = (children: ReactNode) => {
    setModalState(children);
  };

  const closeModal = () => {
    setModalState(null);
  };

  return { showModal, closeModal };
};

export default useModalState;
