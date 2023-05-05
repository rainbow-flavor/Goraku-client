import styles from "./DetailSearchListItem.module.css";

import { Store } from "@/types/store";

const DetailSearchListItem = ({ address, name, networkType, isop }: Store) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBox}>
        <div className={styles.thumbnail}>
          {isop ? "사진을 등록해주세요" : "가게가 폐업했습니다.."}
        </div>
      </div>

      <div className={styles.infoBox}>
        <p className={styles.title}>{name}</p>
        <p className={styles.address}>{address}</p>
        <p className={styles.card}>
          {networkType
            ? Object.entries(networkType).map(([key, value]) => {
                return value ? <span>{key}</span> : null;
              })
            : "카드사 정보 없음"}
        </p>
      </div>
    </div>
  );
};

export default DetailSearchListItem;
