import { ReactNode } from "react";

import styles from "./PolicyLayout.module.css";

import Logo from "@/components/common/logo/Logo";

interface PolicyLayoutProps {
  title?: string;
  children?: ReactNode;
}

const PolicyLayout = ({ title, children }: PolicyLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.titleField}>
        <Logo type="nav" />

        <div>
          <h2>{title}</h2>
          <p>2022년 01월 21일 신설</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PolicyLayout;
