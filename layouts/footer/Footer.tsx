import Link from "next/link";

import styles from "./Footer.module.css";

import { RouteMap } from "@/constants/route";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div>
          <p>
            <small>Copyright ©</small>
            &nbsp;|&nbsp;
            <small>GORAKU All rights reserved</small>
          </p>
        </div>

        <div>
          <div className={styles.footerPolicyField}>
            <Link href={RouteMap.TERM_OF_CONTRACT}>이용약관</Link>
            <Link href={RouteMap.PRIVACY}>개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
