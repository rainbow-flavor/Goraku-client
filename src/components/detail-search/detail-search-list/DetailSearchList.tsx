import styles from "./DetailSearchList.module.css";

import DetailSearchListItem from "@/components/detail-search/detail-search-list/DetailSearchListItem";
import useStoreListQuery from "@/queries/useStoreListQuery";

const DetailSearchList = () => {
  const { data } = useStoreListQuery();

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        검색결과 {data?.data.length.toLocaleString()}건
      </div>

      <div className={styles.itemList}>
        {data?.data.map((store) => {
          return <DetailSearchListItem key={store.id} {...store} />;
        })}
      </div>
    </div>
  );
};

export default DetailSearchList;
