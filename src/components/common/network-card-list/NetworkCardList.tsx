import styles from "./NetworkCardList.module.css";

import { Network } from "@/types/store";

interface NetworkCardListProps {
  network?: Network;
}

const NetworkCardList = ({ network }: NetworkCardListProps) => {
  return (
    <div className={styles.container}>
      {network
        ? Object.entries(network).map(([key, value]) => {
            return value ? (
              <span className={styles.card} key={key}>
                {key.toUpperCase()}
              </span>
            ) : null;
          })
        : "카드사 정보 없음"}
    </div>
  );
};

export default NetworkCardList;
