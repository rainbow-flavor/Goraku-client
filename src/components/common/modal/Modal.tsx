import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { modalAtom } from "@/atoms/modal-atom";

const Modal = () => {
  const component = useRecoilValue(modalAtom);

  useEffect(() => {
    if (component) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [component]);

  return <>{component}</>;
};

export default Modal;
