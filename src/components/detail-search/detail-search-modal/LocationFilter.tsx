import { useState } from "react";

import styles from "./LocationFilter.module.css";

import SubmitFilterButton from "@/components/detail-search/detail-search-modal/SubmitFilterButton";

const locationMap = {
  seoul: [
    "전체",
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ],
  gyeonggi: [
    "전체",
    "수원시",
    "성남시",
    "고양시",
    "용인시",
    "부천시",
    "안산시",
    "안양시",
    "남양주시",
    "화성시",
    "평택시",
    "의정부시",
    "시흥시",
    "파주시",
    "광명시",
    "김포시",
    "군포시",
    "광주시",
    "이천시",
    "양주시",
    "오산시",
    "구리시",
    "안성시",
    "포천시",
    "의왕시",
    "하남시",
    "여주시",
    "여주군",
    "양평군",
    "동두천시",
    "과천시",
    "가평군",
    "연천군",
  ],
};

type Si = keyof typeof locationMap | "all";

const LocationFilter = () => {
  const [city, setCity] = useState<{
    si: Si;
    gu: string;
  }>({
    si: "seoul",
    gu: "노원구",
  });

  const translateKey = (key: string) => {
    switch (key) {
      case "seoul":
        return "서울";
      case "gyeonggi":
        return "경기남부";
      default:
        return "전국";
    }
  };

  const selectSi = (si: Si) => {
    setCity((prev) => ({ si, gu: "전체" }));
  };

  const selectGu = (gu: string) => {
    setCity((prev) => ({ ...prev, gu }));
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

      <SubmitFilterButton name="지역" />
    </div>
  );
};

export default LocationFilter;
