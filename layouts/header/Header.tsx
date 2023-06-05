import Link from "next/link";
import { FaBars } from "react-icons/fa";

import styles from "./Header.module.css";

import Logo from "@/components/common/logo/Logo";
import { RouteMap } from "@/constants/route";
import Navbar from "@/layouts/navbar/Navbar";
import useToggle from "@/hooks/useToggle";

const Header = () => {
  const { toggle, onToggle } = useToggle();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href={RouteMap.HOME}>
          <Logo type="nav" />
        </Link>

        <div className={styles.menu} onClick={onToggle}>
          <FaBars size={24} color="#fff" title="메뉴" />
        </div>
      </div>

      <Navbar close={toggle} />
    </div>
  );
};

export default Header;
