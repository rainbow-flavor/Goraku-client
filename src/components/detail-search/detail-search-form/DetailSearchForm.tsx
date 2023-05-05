import styles from "./DetailSearchForm.module.css";

import Input from "@/components/common/input/Input";
import DetailSearchFormFilter from "@/components/detail-search/detail-search-form/DetailSearchFormFilter";
import Search from "@/components/search/Search";
import useModalState from "@/hooks/use-modal-state";
import useSearchState from "@/hooks/use-search-state";

const DetailSearchForm = () => {
  const {
    state: { searchWord },
    onChange,
  } = useSearchState();
  const { showModal } = useModalState();

  const onFocus = () => {
    showModal(<Search />);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          placeholder="원하는 오락실 게임을 검색하세요"
          styleType="search"
          value={searchWord}
          onChange={onChange}
          onClick={onFocus}
        />
      </div>

      <DetailSearchFormFilter />
    </div>
  );
};

export default DetailSearchForm;
