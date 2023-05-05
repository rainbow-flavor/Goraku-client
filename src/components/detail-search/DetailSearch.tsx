import styles from "./DetailSearch.module.css";

import Header from "@/components/common/header/Header";
import DetailSearchForm from "@/components/detail-search/detail-search-form/DetailSearchForm";
import DetailSearchList from "@/components/detail-search/detail-search-list/DetailSearchList";

const DetailSearch = () => {
  return (
    <div className={styles.container}>
      <Header />
      <DetailSearchForm />
      <DetailSearchList />
    </div>
  );
};

export default DetailSearch;
