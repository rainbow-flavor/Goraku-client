import { useRouter } from "next/router";

import styles from "./Home.module.css";

import Header from "@/layout/header/header";

const Home = () => {
  const { push } = useRouter();

  const moveToSearch = () => {
    push("/home-search");
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Goraku</h1>

        <div className={styles.searchInputBox}>
          <input
            onFocus={moveToSearch}
            className={styles.searchInput}
            placeholder="원하는 게임이 있는 오락실을 검색하세요"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
