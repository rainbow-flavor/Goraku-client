import { ReactNode } from "react";

import styles from "./PageLayout.module.css";

import Header from "@/layouts/header/Header";

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
