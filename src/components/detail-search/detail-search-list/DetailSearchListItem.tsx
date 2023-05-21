import { useRouter } from "next/router";

import styles from "./DetailSearchListItem.module.css";

import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import { RouteMap } from "@/constants/route";
import { Store } from "@/types/store";
import { ERROR_TEXT } from "@/constants/message";

const DetailSearchListItem = ({
  address,
  name,
  networkType,
  thumbnail,
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
        <div className={styles.thumbnail}>
          {thumbnail ? (
            <img src={thumbnail} alt="가게 이미지" />
          ) : (
            ERROR_TEXT.NO_IMAGE
          )}
        </div>
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
