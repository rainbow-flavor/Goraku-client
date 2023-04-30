import { useRouter } from "next/router";
import React from "react";

import DetailSearch from "@/components/detail-search/DetailSearch";
import styles from "@/styles/Layout.module.css";

const DetailSearchPage = () => {
  const { query } = useRouter();

  return (
    <div className={styles.layout}>
      <DetailSearch />
    </div>
  );
};

export default DetailSearchPage;
