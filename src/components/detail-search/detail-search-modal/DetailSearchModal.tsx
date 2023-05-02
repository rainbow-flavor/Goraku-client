import { ReactNode, useState } from "react";
import { MdClose } from "react-icons/md";

import styles from "./DetailSearchModal.module.css";

import CardFilter from "@/components/detail-search/detail-search-modal/CardFilter";
import LocationFilter from "@/components/detail-search/detail-search-modal/LocationFilter";
import OpenFilter from "@/components/detail-search/detail-search-modal/OpenFilter";
import useModalState from "@/hooks/use-modal-state";

const DetailSearchModal = () => {
  const { closeModal } = useModalState();
  const [tabs, setTabs] = useState<
    {
      checked: boolean;
      key: "location" | "card" | "open";
      name: string;
    }[]
  >([
    {
      checked: true,
      key: "location",
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
  ]);

  const selectTab = (index: number) => {
    setTabs((prev) => {
      return prev.map((tab, i) => ({ ...tab, checked: index === i }));
    });
  };

  const filterMap: Record<"location" | "card" | "open", ReactNode> = {
    location: <LocationFilter />,
    card: <CardFilter />,
    open: <OpenFilter />,
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.closeBox} onClick={closeModal}>
          <MdClose color="#7F7F7F" size={20} />
        </div>

        <div className={styles.tabBox}>
          {tabs.map(({ name, checked }, index) => {
            return (
              <div
                key={name}
                className={checked ? styles.activeTab : ""}
                onClick={() => selectTab(index)}
              >
                {name}
              </div>
            );
          })}
        </div>

        <div className={styles.filterBox}>
          {filterMap[tabs.find((tab) => tab.checked)?.key ?? "location"]}
        </div>
      </div>
    </div>
  );
};

export default DetailSearchModal;
