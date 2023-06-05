import styles from "./NetworkCardList.module.css";

import {Category, Network, NetworkCardType} from "@/types/store";
import {clsx} from "clsx";

interface NetworkCardListProps {
  network: Network;
}

const colorMap: Record<NetworkCardType, string> = {
  k: styles.k,
  n: styles.n,
  s: styles.s,
  t: styles.t,
  a: styles.a,
};

const NetworkCardList = ({ network }: NetworkCardListProps) => {
  return (
    <div className={styles.container}>
      {Object.entries(network).map(([key, value]) => {
        return value ? (
          <span className={clsx(styles.card, colorMap[key as NetworkCardType] )} key={key}>
            {key.toUpperCase()}
          </span>
        ) : null;
      })}
    </div>
  );
};

export default NetworkCardList;
