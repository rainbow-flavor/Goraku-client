import { clsx } from "clsx";
import Image from "next/image";

import styles from "./Logo.module.css";

import LogoImg from "@/assets/logo.svg";

interface LogoProps {
  type: "home" | "nav";
}

const Logo = ({ type }: LogoProps) => {
  return (
    <h1
      className={clsx(
        styles.container,
        type === "home" ? styles.home : styles.nav
      )}
    >
      <Image src={LogoImg} alt="Goraku 오락실 찾기 서비스 로고" />
    </h1>
  );
};

export default Logo;
