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
        {storeList.map((store, index, arr) => {
          return (
            <React.Fragment key={store.id}>
              <DetailSearchListItem {...store} />
              {index > arr.length - 3 && hasNextPage && (
                <InView
                  onChange={(inView, entry) => {
                    if (
                      entry.boundingClientRect.y > 300 &&
                      inView &&
                      storeList.length !== total
                    )
                      fetchNextPage();
                  }}
                />
              )}
            </React.Fragment>
          );
        })}

        {!isLoading && storeList.length === 0 && (
          <div className={styles.emptyText}>{ERROR_TEXT.NO_ITEM}</div>
        )}

        {isLoading && <DetailSearchListSkeleton />}
      </div>
    </div>
  );
};

export default DetailSearchList;
