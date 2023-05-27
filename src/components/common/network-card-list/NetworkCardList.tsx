import styles from "./NetworkCardList.module.css";

import { Network } from "@/types/store";

interface NetworkCardListProps {
  network: Network;
}

const NetworkCardList = ({ network }: NetworkCardListProps) => {
  return (
    <div className={styles.container}>
            ) : null;
      {Object.entries(network).map(([key, value]) => {
        return value ? (
          <span className={styles.card} key={key}>
            {key.toUpperCase()}
          </span>
        ) : null;
      })}
    </div>
  );
};

export default NetworkCardList;
