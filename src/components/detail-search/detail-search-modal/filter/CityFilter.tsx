import { useState } from "react";

import styles from "./CityFilter.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/filter/SubmitFilterButton";
import { locationMap } from "@/constants/location";
import { Si } from "@/types/filter";

const CityFilter = () => {
  const {
    filterState: { city: recoilCityState },
    setFilterState,
    diffCity,
    initialCity,
    translateKey,
  } = useFilterState();
  const [city, setCity] = useState<{
    si: Si;
    gu: string;
  }>(recoilCityState);

  const selectSi = (si: Si) => {
    setCity(() => ({ si, gu: si === "all" ? "" : "전체" }));
  };

  const selectGu = (gu: string) => {
    setCity((prev) => ({ ...prev, gu }));
  };

  const resetCity = () => {
    setCity(initialCity);
    setFilterState((prev) => ({ ...prev, city: initialCity }));
  };

  const saveFilterState = () => {
    setFilterState((prev) => ({ ...prev, city }));
  };

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

          <div className={styles.selectBox}>
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

      <SubmitFilterButton
        name="지역"
        reset={diffCity(city)}
        onReset={resetCity}
        onSubmit={saveFilterState}
      />
    </div>
  );
};

export default CityFilter;
