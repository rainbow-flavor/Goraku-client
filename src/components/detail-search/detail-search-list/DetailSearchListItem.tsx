import { clsx } from "clsx";
import { useRouter } from "next/router";
import { FaClock, FaMapMarkerAlt, FaRegCreditCard } from "react-icons/fa";

import styles from "./DetailSearchListItem.module.css";

import DefaultImg from "@/assets/store_default.webp";
import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import { ERROR_TEXT } from "@/constants/message";
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
        <p className={styles.title}>{name}</p>

        <p className={clsx(styles.infoText, !address && styles.hasNotInfo)}>
          <FaMapMarkerAlt size={16} />
          <span className={clsx(!address && styles.hasNotInfo)}>
            {address ?? ERROR_TEXT.NO_INFORMATION}
          </span>
        </p>

        <p className={clsx(styles.infoText, !uptime && styles.hasNotInfo)}>
          <FaClock size={16} />
          <span className={clsx(!uptime && styles.hasNotInfo)}>
            {uptime ?? ERROR_TEXT.NO_INFORMATION}
          </span>
        </p>

        <div
          className={clsx(styles.infoText, !networkType && styles.hasNotInfo)}
        >
          <FaRegCreditCard size={16} />
          {networkType ? (
            <NetworkCardList network={networkType} />
          ) : (
            <span className={clsx(!networkType && styles.hasNotInfo)}>
              {ERROR_TEXT.NO_INFORMATION}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailSearchListItem;
