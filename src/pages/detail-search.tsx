import React from "react";

import DetailSearch from "@/components/detail-search/DetailSearch";
import styles from "@/styles/Layout.module.css";

const DetailSearchPage = () => {
  return (
    <div className={styles.layout}>
      <DetailSearch />
    </div>
  );
};

export default DetailSearchPage;
