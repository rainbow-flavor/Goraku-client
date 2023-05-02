import { FaAngleDown } from "react-icons/fa";

import styles from "./DetailSearchFormFilter.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import DetailSearchModal from "@/components/detail-search/detail-search-modal/DetailSearchModal";
import useModalState from "@/hooks/use-modal-state";

const DetailSearchFormFilter = () => {
  const {
    translateKey,
    filterState: { city, card, open },
  } = useFilterState();

  const { showModal } = useModalState();

  const showModalByFilter = () => {
    showModal(<DetailSearchModal />);
  };

  const checkedCards = card.filter((item) => item.checked);

  return (
    <div className={styles.container}>
      <div onClick={showModalByFilter}>
        <small className={styles.filterTitle}>지역 : </small>
        <b>
          {city.si === "all" ? "전국" : `${translateKey(city.si)} ${city.gu}`}
        </b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div>
        <small className={styles.filterTitle}>카드사 : </small>
        <b>
          {checkedCards.length > 0
            ? checkedCards.map((item) => item.name).join(", ")
            : "ALL"}
        </b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div>
        <small className={styles.filterTitle}>폐업 여부 포함 : </small>
        <b>{open ? "TRUE" : "FALSE"}</b>
        <FaAngleDown size={14} color="#fff" />
      </div>
    </div>
  );
};

export default DetailSearchFormFilter;
