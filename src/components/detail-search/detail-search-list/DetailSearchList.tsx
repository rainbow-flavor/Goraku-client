import React from "react";
import { InView } from "react-intersection-observer";

import styles from "./DetailSearchList.module.css";

import DetailSearchListItem from "@/components/detail-search/detail-search-list/DetailSearchListItem";
import useStoreListQuery from "@/queries/useStoreListQuery";

const DetailSearchList = () => {
  const { data, fetchNextPage, hasNextPage } = useStoreListQuery();

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        검색결과 {data?.pages[0].totalElements?.toLocaleString()}건
      </div>

      <div className={styles.itemList}>
        {data?.pages.map((page) => {
          return page.data.map((store) => {
            return <DetailSearchListItem key={store.id} {...store} />;
          });
        })}

        {hasNextPage && (
          <InView
            onChange={(inView, entry) => {
              if (entry.boundingClientRect.y > 300 && inView) fetchNextPage();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DetailSearchList;
