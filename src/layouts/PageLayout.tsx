import { ReactNode } from "react";

import styles from "./PageLayout.module.css";

import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.content}>
          <Header />

          <div className={styles.main}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
