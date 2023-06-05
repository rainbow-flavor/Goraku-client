import { clsx } from "clsx";
import { ReactNode } from "react";

import styles from "./PageLayout.module.css";

import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";

interface PageLayoutProps {
  children?: ReactNode;
  type?: "cs";
}

const PageLayout = ({ children, type }: PageLayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.content}>
          <Header />

          <div className={clsx(styles.main, type && styles.csPageMain)}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
