import { useRouter } from "next/router";

import styles from "./DetailSearchForm.module.css";

import { useSearchAtom } from "@/atoms/search-atom";
import Input from "@/components/common/input/Input";
import DetailSearchFormFilter from "@/components/detail-search/detail-search-form/DetailSearchFormFilter";
import { RouteMap } from "@/constants/route";

const DetailSearchForm = () => {
  const { push } = useRouter();
  const {
    state: { searchWord },
    onChange,
  } = useSearchAtom();

  const onClickInput = () => {
    push(RouteMap.SEARCH);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          placeholder="게임, 지역, 가게 이름을 검색해보세요"
          styleType="search"
          value={searchWord}
          onChange={onChange}
          onClick={onClickInput}
        />
      </div>

      <DetailSearchFormFilter />
    </div>
  );
};

export default DetailSearchForm;
