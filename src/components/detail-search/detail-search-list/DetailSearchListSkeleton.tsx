import { clsx } from "clsx";

import styles from "./DetailSearchListSkeleton.module.css";

const SkeletonItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBox}>
        <div className={clsx(styles.thumbnail, styles.skeleton)} />
      </div>

      <div className={styles.infoBox}>
        <div className={styles.networkCardBox}>
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
        </div>

        <p className={clsx(styles.title, styles.skeleton)} />

        <p className={clsx(styles.infoText, styles.skeleton)} />

        <p className={clsx(styles.infoText, styles.skeleton)} />
      </div>
    </div>
  );
};

const DetailSearchListSkeleton = () => {
  return (
    <div className={styles.itemList}>
      {Array(20)
        .fill(null)
        .map((_, index) => {
          return <SkeletonItem key={index} />;
        })}
    </div>
  );
};

export default DetailSearchListSkeleton;
