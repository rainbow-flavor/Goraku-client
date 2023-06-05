import { useEffect } from "react";

import styles from "./OpenFilter.module.css";

import { useFilterAtom } from "@/atoms/filter-atom";
import Checkbox from "@/components/common/checkbox/Checkbox";

const OPEN_FILTER_TITLE = "포함";

const OpenFilter = () => {
  const {
    filterState: { open: realOpen },
    localFilterState: { open },
    setLocalFilterState,
  } = useFilterAtom();

  const selectOpen = () => {
    setLocalFilterState((prev) => ({ ...prev, open: !prev.open }));
  };

  useEffect(() => {
    setLocalFilterState((prev) => ({ ...prev, open: realOpen }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        <Checkbox
          text={OPEN_FILTER_TITLE}
          checked={open}
          onClick={selectOpen}
        />
      </div>
    </div>
  );
};

export default OpenFilter;
