import styles from "./DetailSearchForm.module.css";

import { useModalAtom } from "@/atoms/modal-atom";
import { useSearchAtom } from "@/atoms/search-Atom";
import Input from "@/components/common/input/Input";
import DetailSearchFormFilter from "@/components/detail-search/detail-search-form/DetailSearchFormFilter";
import Search from "@/components/search/Search";

const DetailSearchForm = () => {
  const {
    state: { searchWord },
    onChange,
  } = useSearchAtom();
  const { showModal } = useModalAtom();

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
