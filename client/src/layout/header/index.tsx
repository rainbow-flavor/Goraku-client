import Link from "next/link";

import styles from "./index.module.css";

import SearchImg from "@/assets/magnifying-glass.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkBox}>
        <Link href="/search">
          <img src={SearchImg.src} alt="상세 검색" />
        </Link>
      </div>
    </div>
  );
};

export default Header;