import React from "react";
import { InView } from "react-intersection-observer";

import styles from "./DetailSearchList.module.css";

import DetailSearchListItem from "@/components/detail-search/detail-search-list/DetailSearchListItem";
import DetailSearchListSkeleton from "@/components/detail-search/detail-search-list/DetailSearchListSkeleton";
import { ERROR_TEXT } from "@/constants/message";
import useStoreListQuery from "@/queries/useStoreListQuery";

const DetailSearchList = () => {
  const { storeList, fetchNextPage, hasNextPage, total, isLoading } =
    useStoreListQuery();

  return (
    <div className={styles.container}>
      <div className={styles.result}>검색결과 {total.toLocaleString()}건</div>

      <div className={styles.itemList}>
        {storeList.map((store) => {
          return <DetailSearchListItem key={store.id} {...store} />;
        })}

        {!isLoading && storeList.length === 0 && (
          <div className={styles.emptyText}>{ERROR_TEXT.NO_ITEM}</div>
        )}

        {hasNextPage && (
          <InView
            onChange={(inView, entry) => {
              if (entry.boundingClientRect.y > 500 && inView) fetchNextPage();
            }}
          />
        )}

        {isLoading && <DetailSearchListSkeleton />}
      </div>
    </div>
  );
};

export default DetailSearchList;
