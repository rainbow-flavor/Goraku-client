import { FaSearch } from "react-icons/fa";

import styles from "./SearchList.module.css";

import { useModalAtom } from "@/atoms/modal-atom";
import { useSearchAtom } from "@/atoms/search-Atom";
import useSearchQuery from "@/queries/useSearchQuery";

const SearchListItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: (keyword: string) => void;
}) => {
  return (
    <div className={styles.searchListItem} onClick={() => onClick(text)}>
      <div className={styles.searchIcon}>
        <FaSearch size={18} color="#8F969C" />
      </div>

      <p className={styles.searchItemText}>{text}</p>

      <div></div>
    </div>
  );
};

const SearchList = ({ onSearch }: { onSearch?: () => void }) => {
  const { closeModal } = useModalAtom();
  const { setState } = useSearchAtom();
  const { data } = useSearchQuery();

  const onClick = (keyword: string) => {
    onSearch?.();
    setState((prev) => ({ ...prev, searchWord: keyword }));
    closeModal();
  };

  return (
    <div>
      {data?.data.map((item: string, index) => {
        return (
          <SearchListItem key={index} text={item + index} onClick={onClick} />
        );
      })}
    </div>
  );
};

export default SearchList;
