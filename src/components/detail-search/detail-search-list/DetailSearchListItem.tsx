import { useRouter } from "next/router";

import styles from "./DetailSearchListItem.module.css";

import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import { RouteMap } from "@/constants/route";
import { Store } from "@/types/store";

const DetailSearchListItem = ({
  address,
  name,
  networkType,
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
        <div className={styles.thumbnail}>사진을 등록해주세요</div>
      </div>

      <div className={styles.infoBox}>
        <p className={styles.title}>{name}</p>
        <p className={styles.address}>{address}</p>
        <NetworkCardList network={networkType} />
      </div>
    </div>
  );
};

export default DetailSearchListItem;
