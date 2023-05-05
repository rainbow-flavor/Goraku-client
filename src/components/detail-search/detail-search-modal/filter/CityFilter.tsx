import { useEffect, useRef } from "react";

import styles from "./CityFilter.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import { locationMap } from "@/constants/location";
import { Si } from "@/types/filter";

const CityFilter = () => {
  const {
    filterState: { city: realCity },
    localFilterState: { city },
    setLocalFilterState,
    translateKey,
  } = useFilterState();
  const ref = useRef<HTMLDivElement>(null);

  const selectSi = (si: Si) => {
    setLocalFilterState((prev) => ({
      ...prev,
      city: { si, gu: si === "all" ? "" : "전체" },
    }));
  };

  const selectGu = (gu: string) => {
    setLocalFilterState((prev) => ({
      ...prev,
      city: { ...prev.city, gu },
    }));
  };

  useEffect(() => {
    setLocalFilterState((prev) => ({ ...prev, city: realCity }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        <div className={styles.filter}>
          <p className={styles.filterTitle}>지역</p>

          <div className={styles.selectBox}>
            {["all", "seoul", "gyeonggi"].map((si) => {
              return (
                <div
                  key={si}
                  onClick={() => selectSi(si as Si)}
                  className={city.si === si ? styles.activeSelect : ""}
                >
                  {translateKey(si)}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.filter}>
          <p className={styles.filterTitle}>상세 지역</p>

          <div className={styles.selectBox} ref={ref}>
            {city.si !== "all" ? (
              locationMap[city.si].map((gu) => {
                return (
                  <div
                    key={gu}
                    className={city.gu === gu ? styles.activeSelect : ""}
                    onClick={() => selectGu(gu)}
                  >
                    {gu}
                  </div>
                );
              })
            ) : (
              <p className={styles.filterParagraph}>
                지역을 선택하면 상세 지역을 확인할 수 있습니다.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityFilter;
