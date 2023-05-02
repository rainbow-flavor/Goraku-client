import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { modalAtom } from "@/atoms/modal-atom";

const Modal = () => {
  const component = useRecoilValue(modalAtom);

  useEffect(() => {
    document.body.style.overflow = component ? "hidden" : "auto";
  }, [component]);

  return <>{component}</>;
};

export default Modal;
