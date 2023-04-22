import { useRouter } from "next/router";

import styles from "./Home.module.css";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const { push } = useRouter();

  const moveToSearch = () => {
    push("/search");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        상세 검색
        <Link href="/detail-search">
          <FaSearch size={20} color="#fff" title="상세 검색" />
        </Link>
      </div>

      <h1 className={styles.title}>Goraku</h1>

      <div className={styles.searchInputBox} onClick={moveToSearch}>
        <input
          className={styles.searchInput}
          placeholder="원하는 게임이 있는 오락실을 검색하세요"
          disabled
        />
      </div>
    </div>
  );
};

export default Home;
