import { FaAngleDown } from "react-icons/fa";

import styles from "./DetailSearchFormFilter.module.css";

import DetailSearchFormFilterModal from "@/components/detail-search/detail-search-form/DetailSearchFormFilterModal";
import useModalState from "@/hooks/use-modal-state";

const DetailSearchFormFilter = () => {
  const { showModal } = useModalState();

  const showModalByFilter = () => {
    showModal(<DetailSearchFormFilterModal />);
  };

  return (
    <div className={styles.container}>
      <div onClick={showModalByFilter}>
        <small className={styles.filterTitle}>지역 : </small>
        <b>서울 관악구</b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div>
        <small className={styles.filterTitle}>폐업 여부 : </small>
        <b>ALL</b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div>
        <small className={styles.filterTitle}>카드사 : </small>
        <b>ALL</b>
        <FaAngleDown size={14} color="#fff" />
      </div>
    </div>
  );
};

export default DetailSearchFormFilter;
