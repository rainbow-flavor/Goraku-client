import styles from "./DetailSearchForm.module.css";

import { useModalAtom } from "@/atoms/modal-atom";
import { useSearchAtom } from "@/atoms/search-atom";
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
          placeholder="게임, 지역, 가게 이름을 검색해보세요"
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
