import { clsx } from "clsx";
import { ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

import styles from "./DetailSearchModal.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import CardFilter from "@/components/detail-search/detail-search-modal/filter/CardFilter";
import CityFilter from "@/components/detail-search/detail-search-modal/filter/CityFilter";
import OpenFilter from "@/components/detail-search/detail-search-modal/filter/OpenFilter";
import useModalState from "@/hooks/use-modal-state";
import { TabType } from "@/types/filter";

interface DetailSearchModalProps {
  tab?: TabType;
}

const tabList: {
  checked: boolean;
  key: TabType;
  name: string;
}[] = [
  {
    checked: false,
    key: "city",
    name: "지역",
  },
  {
    checked: false,
    key: "card",
    name: "카드사",
  },
  {
    checked: false,
    key: "open",
    name: "폐업 여부",
  },
];

const DetailSearchModal = ({ tab = "city" }: DetailSearchModalProps) => {
  const { closeModal } = useModalState();
  const {
    diffCard,
    diffCity,
    filterState: { open, city, card },
  } = useFilterState();
  const [tabs, setTabs] = useState(
    tabList.map((item) => ({ ...item, checked: item.key === tab }))
  );

  const selectTab = (index: number) => {
    setTabs((prev) => {
      return prev.map((tab, i) => ({ ...tab, checked: index === i }));
    });
  };

  const filterMap: Record<TabType, ReactNode> = {
    city: <CityFilter />,
    card: <CardFilter />,
    open: <OpenFilter />,
  };

  const checkedMap: Record<TabType, () => boolean> = {
    city: diffCity,
    card: diffCard,
    open: () => open,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.closeBox} onClick={closeModal}>
          <MdClose color="#7F7F7F" size={20} />
        </div>

        <div className={styles.tabBox}>
          {tabs.map(({ name, key, checked }, index) => {
            return (
              <div
                key={name}
                className={clsx(
                  checked ? styles.activeTab : "",
                  checkedMap[key]?.() ? styles.hasCheckedTab : " "
                )}
                onClick={() => selectTab(index)}
              >
                {name}
              </div>
            );
          })}
        </div>

        <div className={styles.filterBox}>
          {filterMap[tabs.find((tab) => tab.checked)?.key ?? "city"]}
        </div>
      </div>
    </div>
  );
};

export default DetailSearchModal;
