import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

import styles from "./SearchList.module.css";

import { useSearchAtom } from "@/atoms/search-atom";
import { RouteMap } from "@/constants/route";
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
    </div>
  );
};

const SearchList = () => {
  const { push } = useRouter();
  const { setState } = useSearchAtom();
  const { data } = useSearchQuery();

  const onClick = (keyword: string) => {
    setState((prev) => ({ ...prev, searchWord: keyword }));
    push(RouteMap.DETAIL_SEARCH);
  };

  return (
    <div>
      {data.map((keyword, index) => {
        return <SearchListItem key={index} text={keyword} onClick={onClick} />;
      })}
    </div>
  );
};

export default SearchList;
