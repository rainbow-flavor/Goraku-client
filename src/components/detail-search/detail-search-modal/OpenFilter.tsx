import styles from "./OpenFilter.module.css";

import Checkbox from "@/components/common/checkbox/Checkbox";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/SubmitFilterButton";
import useToggle from "@/hooks/use-toggle";

const OPEN_FILTER_TITLE = "폐업 여부";

const OpenFilter = () => {
  const { toggle, onToggle } = useToggle();

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        <Checkbox
          text={OPEN_FILTER_TITLE}
          checked={toggle}
          onClick={onToggle}
        />
      </div>

      <SubmitFilterButton name={OPEN_FILTER_TITLE} />
    </div>
  );
};

export default OpenFilter;
