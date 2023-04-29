import Link from "next/link";
import { FaBars } from "react-icons/all";

import styles from "./Header.module.css";

import Logo from "@/components/common/logo/Logo";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href={"/"}>
          <Logo type="nav" />
        </Link>

        <div className={styles.menu}>
          <FaBars size={24} color="#fff" title="상세 검색" />
        </div>
      </div>
    </div>
  );
};

export default Header;
