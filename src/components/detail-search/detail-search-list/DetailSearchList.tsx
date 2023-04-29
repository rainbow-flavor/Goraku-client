import styles from "./DetailSearchList.module.css";

import DetailSearchListItem from "@/components/detail-search/detail-search-list/DetailSearchListItem";
import { Store } from "@/types/store";

interface DetailSearchListProps {
  list: Store[];
}

const DetailSearchList = ({ list }: DetailSearchListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        검색결과 {list.length.toLocaleString()}건
      </div>

      <div className={styles.itemList}>
        {list.map((store, index) => {
          return <DetailSearchListItem key={index} {...store} />;
        })}
      </div>
    </div>
  );
};

export default DetailSearchList;
