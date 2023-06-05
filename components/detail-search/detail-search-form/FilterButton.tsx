import React, { ReactNode } from "react";
import { FaAngleDown } from "react-icons/fa";

import styles from "./FilterButton.module.css";

import { useModalAtom } from "@/atoms/modal-atom";
import DetailSearchModal from "@/components/detail-search/detail-search-modal/DetailSearchModal";
import { TabType } from "@/types/filter";

export interface FilterButtonProps {
  filterType: TabType;
  title?: string;
  content?: ReactNode;
}
const FilterButton = ({ filterType, content, title }: FilterButtonProps) => {
  const { showModal } = useModalAtom();

  const showModalByFilter = () => {
    showModal(<DetailSearchModal tab={filterType} />);
  };

  return (
    <div onClick={showModalByFilter}>
      <small className={styles.filterTitle}>{title} : </small>
      <b>{content}</b>
      <FaAngleDown size={14} color="#fff" />
    </div>
  );
};

export default FilterButton;
