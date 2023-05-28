import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  FaArrowAltCircleRight,
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
import DefaultImg from "@/assets/store_default.webp";
import NetworkCardList from "@/components/common/network-card-list/NetworkCardList";
import StoreMachineList from "@/components/store/StoreMachineList";
import { ERROR_TEXT } from "@/constants/message";
import { RouteMap } from "@/constants/route";

const NoInformation = () => (
  <span className={styles.noInformation}>{ERROR_TEXT.NO_INFORMATION}</span>
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
        url: window.location.pathname,
      });
  };

  const infoList = useMemo(
    () =>
      data
        ? [
            {
              icon: <FaClock size={20} />,
              text: data.uptime,
            },
            {
              icon: <FaMapMarkerAlt size={20} />,
              text: data.address ? (
                <Link
                  target="_blank"
                  href={`https://map.kakao.com/link/to/${data.name},${data.latitude},${data.longitude}`}
                >
                  {data.address}
                </Link>
              ) : null,
            },
            {
              icon: <FaRegCreditCard size={20} />,
              text: data.networkType ? (
                <NetworkCardList network={data.networkType} />
              ) : (
                <NoInformation />
              ),
            },
            {
              icon: <FaPhoneAlt size={20} />,
              text: data.contact,
            },
            {
              icon: <FaGlobe size={20} />,
              text: data.website ? (
                <Link href={data.website} target="_blank">
                  {data.website}
                </Link>
              ) : null,
            },
            {
              icon: <FaTwitter size={20} />,
              text: data.website ? (
                <Link
                  href={`https://twitter.com/${data.twitter}`}
                  target="_blank"
                >
                  {data.twitter}
                </Link>
              ) : null,
            },
          ]
        : [],
    [data]
  );

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
        <div>
          {data.thumbnail ? (
            <img src={data.thumbnail} alt="가게 이미지" />
          ) : (
            <div className={styles.noImageBox}>
              <img src={DefaultImg.src} alt="가게 이미지" />

              <div className={styles.noImageText}>
                <p>{ERROR_TEXT.NO_IMAGE_AND_CS}</p>

                <p>
                  <Link href={RouteMap.CUSTOMER_SERVICE}>
                    제보하기 <FaArrowAltCircleRight size={16} />
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.storeInfoField}>
        <h2 className={styles.storeTitle}>{data?.name}</h2>

        <div className={styles.storeInfoBox}>
          {infoList.map((info, index) => {
            return (
              <div className={styles.storeInfoText} key={index}>
                <div className={styles.storeInfoTextIcon}>{info.icon}</div>

                {info.text ?? <NoInformation />}
              </div>
            );
          })}
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
