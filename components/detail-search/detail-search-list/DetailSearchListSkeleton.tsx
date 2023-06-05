import { clsx } from "clsx";

import styles from "./DetailSearchListSkeleton.module.css";

const SkeletonItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailBox}>
        <div className={clsx(styles.thumbnail, styles.skeleton)} />
      </div>

      <div className={styles.infoBox}>
        <p className={clsx(styles.title, styles.skeleton)} />

        <p className={clsx(styles.infoText, styles.skeleton)} />

        <p className={clsx(styles.infoText, styles.skeleton)} />

        <div className={styles.networkCardBox}>
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
          <div className={clsx(styles.networkCircle, styles.skeleton)} />
        </div>
      </div>
    </div>
  );
};

const DetailSearchListSkeleton = () => {
  return (
    <>
      {Array(20)
        .fill(null)
        .map((_, index) => {
          return <SkeletonItem key={index} />;
        })}
    </>
  );
};

export default DetailSearchListSkeleton;
