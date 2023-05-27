import { clsx } from "clsx";
import { useRouter } from "next/router";

import styles from "./DetailSearchListItem.module.css";

import DefaultImg from "@/assets/store_default.webp";
import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import { RouteMap } from "@/constants/route";
import { Store } from "@/types/store";

const DetailSearchListItem = ({
  address,
  name,
  networkType,
  thumbnail,
  uptime,
  isop,
  id,
}: Store) => {
  const { push } = useRouter();

  const movePage = () => {
    push(RouteMap.STORE + `/${id}`);
  };

  return (
    <div className={styles.container} onClick={movePage}>
      <div className={styles.thumbnailBox}>
        <div className={clsx(styles.thumbnail, !thumbnail && styles.noImage)}>
          <img src={thumbnail ?? DefaultImg.src} alt="가게 이미지" />
        </div>
      </div>

      <div className={styles.infoBox}>
        <div className={styles.networkCardBox}>
          <NetworkCardList network={networkType} />
        </div>

        <p className={styles.title}>{name}</p>

        <p className={clsx(styles.infoText, !uptime && styles.hasNotInfo)}>
          {uptime ?? "영업시간 정보 없음"}
        </p>

        <p className={clsx(styles.infoText, !address && styles.hasNotInfo)}>
          {address ?? "주소 정보 없음"}
        </p>
      </div>
    </div>
  );
};

export default DetailSearchListItem;
