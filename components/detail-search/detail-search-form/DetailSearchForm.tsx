import { clsx } from "clsx";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  const onClickInput = () => {
    push(RouteMap.SEARCH);
  };

  useEffect(() => {
    const onScroll = () => {
      if (!ref?.current) return;

      const scrollY = window.scrollY;
      const offsetTop = ref.current.offsetTop;
      ref.current.className = clsx(
        styles.wrapper,
        scrollY > offsetTop && styles.fixed
      );
    };
    const onScrollHandler = () => requestAnimationFrame(onScroll);

    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div className={styles.field}>
      <div className={styles.wrapper} ref={ref}>
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
    </div>
  );
};

export default DetailSearchForm;
