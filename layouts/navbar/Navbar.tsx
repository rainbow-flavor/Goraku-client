import { clsx } from "clsx";
import Link from "next/link";
import { FaHome, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { InView } from "react-intersection-observer";

import styles from "./Navbar.module.css";

import { RouteMap } from "@/constants/route";

interface NavbarProps {
  close?: boolean;
  onClick?: () => void;
}

const Navbar = ({ close, onClick }: NavbarProps) => {
  const routes = [
    {
      name: "홈 페이지",
      pathname: RouteMap.HOME,
      icon: <FaHome size={30} color="#fff" />,
    },
    {
      name: "오락실 찾기",
      pathname: RouteMap.DETAIL_SEARCH,
      icon: <FaSearch size={30} color="#fff" />,
    },
    {
      name: "제보하기",
      pathname: RouteMap.CUSTOMER_SERVICE,
      icon: <FaPhoneAlt size={30} color="#fff" />,
    },
  ];

  return (
    <div className={clsx(styles.container, close && styles.active)}>
      <div className={styles.content}>
        <div className={styles.navLinkBox}>
          {routes.map((route) => {
            return (
              <div
                key={route.name}
                className={styles.navLink}
                onClick={onClick}
              >
                {route.icon}
                <Link href={route.pathname}>{route.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <InView
        onChange={(inView) => {
          if (!inView) onClick?.();
        }}
      />
    </div>
  );
};

export default Navbar;
