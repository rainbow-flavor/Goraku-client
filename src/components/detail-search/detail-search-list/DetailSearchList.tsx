import { useQuery } from "@tanstack/react-query";

import styles from "./DetailSearchList.module.css";

import { fetchSearchList } from "@/api/store";
import { useFilterAtom } from "@/atoms/filter-atom";
import DetailSearchListItem from "@/components/detail-search/detail-search-list/DetailSearchListItem";

const DetailSearchList = () => {
  const {
    filterState: {
      city: { gu, si },
      card,
      open,
    },
  } = useFilterAtom();
  const hasName = (key: string) =>
    !!card.filter((item) => item.name.includes(key))[0];

  const { data } = useQuery(["FETCH_SEARCH_LIST", gu, si, card, open], () =>
    fetchSearchList({
      city1: gu,
      city2: si === "all" ? undefined : si,
      cardK: hasName("k"),
      cardN: hasName("n"),
      cardS: hasName("s"),
      cardT: hasName("t"),
      cardA: hasName("a"),
      limit: 60,
    })
  );

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
