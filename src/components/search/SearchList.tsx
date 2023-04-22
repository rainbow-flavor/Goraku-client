import { FaSearch } from "react-icons/fa";
import styles from "./SearchList.module.css";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
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
  const setSearchState = useSetRecoilState(searchState);
  const onClick = (keyword: string) => {
    setSearchState((prev) => ({ ...prev, searchWord: keyword }));
    push(`/detail-search?keyword=${keyword}`);
  };

  return (
    <div>
      {Array(10)
        .fill("추천 검색어")
        .map((item, index) => {
          return (
            <SearchListItem key={index} text={item + index} onClick={onClick} />
          );
        })}
    </div>
  );
};

export default SearchList;
