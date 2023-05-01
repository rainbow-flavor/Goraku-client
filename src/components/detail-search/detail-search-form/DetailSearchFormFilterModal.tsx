import { ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

import styles from "./DetailSearchFormFilterModal.module.css";

import CardFilter from "@/components/detail-search/detail-search-form/CardFilter";
import LocationFilter from "@/components/detail-search/detail-search-form/LocationFilter";
import useModalState from "@/hooks/use-modal-state";

const DetailSearchFormFilterModal = () => {
  const { closeModal } = useModalState();
  const [tabs, setTabs] = useState<
    {
      select: boolean;
      key: "location" | "card" | "open";
      name: string;
    }[]
  >([
    {
      select: true,
      key: "location",
      name: "지역",
    },
    {
      select: false,
      key: "card",
      name: "카드사",
    },
    {
      select: false,
      key: "open",
      name: "폐업 여부",
    },
  ]);

  const selectTab = (index: number) => {
    setTabs((prev) => {
      return prev.map((tab, i) => ({ ...tab, select: index === i }));
    });
  };

  const filterMap: Record<"location" | "card" | "open", ReactNode> = {
    location: <LocationFilter />,
    card: <CardFilter />,
    open: <></>,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.closeBox} onClick={closeModal}>
          <MdClose color="#7F7F7F" size={20} />
        </div>

        <div className={styles.tabBox}>
          {tabs.map(({ name, select }, index) => {
            return (
              <div
                key={name}
                className={select ? styles.activeTab : ""}
                onClick={() => selectTab(index)}
              >
                {name}
              </div>
            );
          })}
        </div>

        <div className={styles.filterBox}>
          {filterMap[tabs.find((tab) => tab.select)?.key ?? "location"]}
        </div>
      </div>
    </div>
  );
};

export default DetailSearchFormFilterModal;
