import { FaAngleDown } from "react-icons/fa";

import styles from "./DetailSearchFormFilter.module.css";

const DetailSearchFormFilter = () => {
  return (
    <div className={styles.container}>
      <div>
        <small className={styles.filterTitle}>지역 : </small>
        <b>서울</b>
        <FaAngleDown size={14} color="#fff" />
      </div>

      <div>
        <small className={styles.filterTitle}>상세 지역 : </small>
        <b>관악구</b>
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
