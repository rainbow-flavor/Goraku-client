import styles from "./DetailSearch.module.css";

import Header from "@/components/common/header/Header";
import DetailSearchForm from "@/components/detail-search/detail-search-form/DetailSearchForm";
import DetailSearchList from "@/components/detail-search/detail-search-list/DetailSearchList";
import { mock } from "@/components/detail-search/mock";

const DetailSearch = () => {
  return (
    <div className={styles.container}>
      <Header />
      <DetailSearchForm />
      <DetailSearchList list={mock} />
    </div>
  );
};

export default DetailSearch;
