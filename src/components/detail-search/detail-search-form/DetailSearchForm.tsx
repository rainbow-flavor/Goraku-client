import { FaSearch } from "react-icons/fa";

import styles from "./DetailSearchForm.module.css";

import Input from "@/components/common/input/Input";
import DetailSearchFormFilter from "@/components/detail-search/detail-search-form/DetailSearchFormFilter";
import useSearchState from "@/hooks/use-search-state";

const DetailSearchForm = () => {
  const {
    state: { searchWord },
    onChange,
  } = useSearchState();

  return (
    <div className={styles.wrapper}>
      <form className={styles.container}>
        <Input
          placeholder="원하는 오락실 게임을 검색하세요"
          styleType="search"
          value={searchWord}
          onChange={onChange}
        />

        {searchWord && (
          <button className={styles.submitIcon} type="submit">
            <FaSearch size={18} color="#FFF" title="" />
          </button>
        )}
      </form>

      <DetailSearchFormFilter />
    </div>
  );
};

export default DetailSearchForm;
