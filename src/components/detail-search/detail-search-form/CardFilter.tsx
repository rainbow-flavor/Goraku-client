import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./CardFilter.module.css";

import SubmitFilterButton from "@/components/detail-search/detail-search-form/SubmitFilterButton";

const CardFilter = () => {
  const [card, setCard] = useState([
    {
      name: "",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        <div>
          <FaCheckCircle />{" "}
        </div>
      </div>
      <SubmitFilterButton name="카드사" />
    </div>
  );
};

export default CardFilter;
