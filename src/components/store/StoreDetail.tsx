import { useQuery } from "@tanstack/react-query";
import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegArrowAltCircleLeft,
  FaRegCreditCard,
  FaShareSquare,
  FaTwitter,
} from "react-icons/fa";

import styles from "./StoreDetail.module.css";

import { fetchStoreDetail } from "@/api/store";
import DummyImg from "@/assets/detail_dummy.png";
import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import StoreMachineList from "@/components/store/StoreMachineList";
import { RouteMap } from "@/constants/route";

const NoInformation = () => (
  <span className={styles.noInformation}>정보 없음</span>
);

const StoreDetail = () => {
  const { query, push } = useRouter();
  const storeId = query.storeId as string;
  const { data } = useQuery(
    ["FETCH_STORE_DETAIL", storeId],
    () => fetchStoreDetail(storeId),
    {
      enabled: !!storeId,
    }
  );

  const shareLink = async () => {
    if (navigator.share)
      await navigator.share({
        title: data?.name,
        text: data?.address,
        url: window.location.pathname,
      });
  };

  if (!data) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.headerLeft}
          onClick={() => push(RouteMap.DETAIL_SEARCH)}
        >
          <FaRegArrowAltCircleLeft size={24} /> Search
        </div>

        <div onClick={shareLink}>
          <FaShareSquare size={24} />
        </div>
      </div>

      <div className={styles.thumbnail}>
        <img src={DummyImg.src} alt="가게 이미지" />
      </div>

      <div className={styles.storeInfoField}>
        <h2 className={styles.storeTitle}>{data?.name}</h2>

        <div className={styles.storeInfoBox}>
          <div className={styles.storeInfoText}>
            <FaClock size={20} />
            {data?.uptime ?? <NoInformation />}
          </div>

          <div className={clsx(styles.storeInfoText, styles.storeInfoLink)}>
            <FaMapMarkerAlt size={20} />
            <a
              href={`https://map.kakao.com/link/to/${data?.name},${data?.latitude},${data?.longitude}`}
            >
              {data?.address ?? <NoInformation />}
            </a>
          </div>

          <div className={styles.storeInfoText}>
            <FaRegCreditCard size={20} />
            <NetworkCardList network={data?.networkType} />
          </div>

          <div className={styles.storeInfoText}>
            <FaPhoneAlt size={20} /> {data?.contact ?? <NoInformation />}
          </div>

          <div className={styles.storeInfoText}>
            <FaGlobe size={20} />
            {data?.website ? (
              <Link href={data.website} target="_blank">
                {data.website}
              </Link>
            ) : (
              <NoInformation />
            )}
          </div>

          <div className={styles.storeInfoText}>
            <FaTwitter size={20} />
            {data?.twitter ? (
              <Link
                href={`https://twitter.com/${data.twitter}`}
                target="_blank"
              >
                {data.twitter}
              </Link>
            ) : (
              <NoInformation />
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className={styles.storeTitle}>Games</h3>
        <StoreMachineList list={data?.storeMachines} />
      </div>
    </div>
  );
};

export default StoreDetail;
