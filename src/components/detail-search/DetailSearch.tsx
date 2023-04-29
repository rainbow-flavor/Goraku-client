import styles from "./DetailSearch.module.css";

import Header from "@/components/common/header/Header";
import DetailSearchFooter from "@/components/detail-search/detail-search-footer/DetailSearchFooter";
import DetailSearchList from "@/components/detail-search/detail-search-list/DetailSearchList";
import { mock } from "@/components/detail-search/mock";

const DetailSearch = () => {
  return (
    <div className={styles.container}>
      <Header />
      <DetailSearchList list={mock} />
      <DetailSearchFooter />
    </div>
  );
};

export default DetailSearch;
