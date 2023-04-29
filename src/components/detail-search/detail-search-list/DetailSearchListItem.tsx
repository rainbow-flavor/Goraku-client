import styles from "./DetailSearchListItem.module.css";

import { Store } from "@/types/store";

interface DetailSearchListItemProps extends Store {}

const DetailSearchListItem = ({ address, name }: DetailSearchListItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBox}>
        <div className={styles.thumbnail}>사진을 등록해주세요</div>
      </div>

      <div className={styles.infoBox}>
        <p>{name}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default DetailSearchListItem;
