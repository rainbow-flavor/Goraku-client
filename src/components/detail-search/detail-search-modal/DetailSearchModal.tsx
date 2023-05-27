import { clsx } from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./DetailSearchModal.module.css";

import { useFilterAtom } from "@/atoms/filter-atom";
import { useModalAtom } from "@/atoms/modal-atom";
import CardFilter from "@/components/detail-search/detail-search-modal/filter/CardFilter";
import CityFilter from "@/components/detail-search/detail-search-modal/filter/CityFilter";
import OpenFilter from "@/components/detail-search/detail-search-modal/filter/OpenFilter";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/filter/SubmitFilterButton";
import { TabType } from "@/types/filter";

interface DetailSearchModalProps {
  tab: TabType;
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

const DetailSearchModal = ({ tab }: DetailSearchModalProps) => {
  const { closeModal } = useModalAtom();
  const {
    diffCard,
    diffCity,
    localFilterState: { open },
  } = useFilterAtom();
  const [tabs, setTabs] = useState(
    tabList.map((item) => ({ ...item, checked: item.key === tab }))
  );

  const swiperRef = useRef() as any;
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

  const onSlideChange: SwiperProps["onSlideChange"] = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setTabs((prev) =>
      prev.map((tab, index) => ({ ...tab, checked: activeIndex === index }))
    );
  };

  const checkedTab = tabs.find((tab) => tab.checked);

  useEffect(() => {
    if (swiperRef.current) {
      const activeIndex = tabs.findIndex((tab) => tab.checked);
      swiperRef.current.slideTo(activeIndex);
    }
  }, [tabs]);

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
          <Swiper
            spaceBetween={16}
            className={styles.swiper}
            onSlideChange={onSlideChange}
            initialSlide={tabList.findIndex((item) => item.key === tab) ?? 0}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {Object.entries(filterMap).map(([key, Component]) => {
              return <SwiperSlide key={key}>{Component}</SwiperSlide>;
            })}
          </Swiper>
        </div>

        <SubmitFilterButton
          name={checkedTab?.name}
          filterKey={checkedTab?.key ?? "city"}
        />
      </div>
    </div>
  );
};

export default DetailSearchModal;
