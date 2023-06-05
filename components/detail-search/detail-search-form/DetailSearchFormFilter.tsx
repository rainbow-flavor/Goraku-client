import { useMemo } from "react";

import styles from "./DetailSearchFormFilter.module.css";

import { useFilterAtom } from "@/atoms/filter-atom";
import FilterButton, {
  FilterButtonProps,
} from "@/components/detail-search/detail-search-form/FilterButton";

const DetailSearchFormFilter = () => {
  const {
    translateKey,
    filterState: { city, card, open },
  } = useFilterAtom();

  const checkedCards = card.filter((item) => item.checked);

  const filterList: FilterButtonProps[] = useMemo(
    () => [
      {
        title: "지역",
        content:
          city.si === "all" ? "전국" : `${translateKey(city.si)} ${city.gu}`,
        filterType: "city",
      },
      {
        title: "카드사",
        content:
          checkedCards.length > 0
            ? checkedCards.map((item) => item.name.toUpperCase()).join(", ")
            : "ALL",
        filterType: "card",
      },
      {
        title: "폐업 여부",
        content: open ? "포함" : "미포함",
        filterType: "open",
      },
    ],
    [city.si, city.gu, checkedCards, open]
  );

  return (
    <div className={styles.container}>
      {filterList.map(({ title, content, filterType }) => {
        return (
          <FilterButton
            key={filterType}
            title={title}
            content={content}
            filterType={filterType}
          />
        );
      })}
    </div>
  );
};

export default DetailSearchFormFilter;
