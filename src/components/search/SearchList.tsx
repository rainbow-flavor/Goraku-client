import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";

import styles from "./SearchList.module.css";

import { searchState } from "@/atoms/search-state";

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

const SearchList = () => {
  const { push } = useRouter();
  const [state, setSearchState] = useRecoilState(searchState);
  const onClick = (keyword: string) => {
    setSearchState((prev) => ({ ...prev, searchWord: keyword }));
    push(`/detail-search?keyword=${keyword}`);
  };

  return (
    <div>
      {state.list.map((item: string, index) => {
        return (
          <SearchListItem key={index} text={item + index} onClick={onClick} />
        );
      })}
    </div>
  );
};

export default SearchList;
