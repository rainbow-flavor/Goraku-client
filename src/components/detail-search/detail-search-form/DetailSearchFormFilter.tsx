import { FaAngleDown } from "react-icons/fa";

import styles from "./DetailSearchFormFilter.module.css";

import { useFilterAtom } from "@/atoms/filter-atom";
import { useModalAtom } from "@/atoms/modal-atom";
import DetailSearchModal from "@/components/detail-search/detail-search-modal/DetailSearchModal";
import { TabType } from "@/types/filter";

const DetailSearchFormFilter = () => {
  const {
    translateKey,
    filterState: { city, card, open },
  } = useFilterAtom();

  const { showModal } = useModalAtom();

  const showModalByFilter = (tab: TabType) => {
    showModal(<DetailSearchModal tab={tab} />);
  };

  const checkedCards = card.filter((item) => item.checked);

  return (
    <div className={styles.container}>
      <div onClick={() => showModalByFilter("city")}>
        <small className={styles.filterTitle}>지역 : </small>
        <b>
          {city.si === "all" ? "전국" : `${translateKey(city.si)} ${city.gu}`}
        </b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div onClick={() => showModalByFilter("card")}>
        <small className={styles.filterTitle}>카드사 : </small>
        <b>
          {checkedCards.length > 0
            ? checkedCards.map((item) => item.name.toUpperCase()).join(", ")
            : "ALL"}
        </b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div onClick={() => showModalByFilter("open")}>
        <small className={styles.filterTitle}>폐업 여부 : </small>
        <b>{open ? "포함" : "미포함"}</b>
        <FaAngleDown size={14} color="#fff" />
      </div>
    </div>
  );
};

export default DetailSearchFormFilter;
