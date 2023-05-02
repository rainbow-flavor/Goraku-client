import styles from "./OpenFilter.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import Checkbox from "@/components/common/checkbox/Checkbox";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/filter/SubmitFilterButton";
import useToggle from "@/hooks/use-toggle";

const OPEN_FILTER_TITLE = "폐업 여부";

const OpenFilter = () => {
  const {
    filterState: { open },
    setFilterState,
    diffOpen,
    initialOpen,
  } = useFilterState();

  const { toggle, onToggle, setToggle } = useToggle(open);

  const saveFilterState = () => {
    setFilterState((prev) => ({ ...prev, open: toggle }));
  };

  const resetOpen = () => {
    setToggle(initialOpen);
    setFilterState((prev) => ({ ...prev, open: initialOpen }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        <Checkbox
          text={OPEN_FILTER_TITLE}
          checked={toggle}
          onClick={onToggle}
        />
      </div>

      <SubmitFilterButton
        name={OPEN_FILTER_TITLE}
        reset={diffOpen(toggle)}
        onReset={resetOpen}
        onSubmit={saveFilterState}
      />
    </div>
  );
};

export default OpenFilter;
