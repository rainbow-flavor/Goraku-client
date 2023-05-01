import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { modalState } from "@/atoms/modal-state";

const Modal = () => {
  const component = useRecoilValue(modalState);

  useEffect(() => {
    document.body.style.overflow = component ? "hidden" : "auto";
  }, [component]);

  return <>{component}</>;
};

export default Modal;
