import { clsx } from "clsx";
import Image from "next/image";

import styles from "./Logo.module.css";

import LogoImg from "@/assets/logo.svg";

interface LogoProps {
  type: "home" | "nav" | "footer";
}

const Logo = ({ type }: LogoProps) => {
  const styleMap = {
    home: styles.home,
    nav: styles.nav,
    footer: styles.footer,
  };

  return (
    <h1 className={clsx(styles.container, styleMap[type])}>
      <Image src={LogoImg} alt="Goraku 오락실 찾기 서비스 로고" layout="fill" />
    </h1>
  );
};

export default Logo;
