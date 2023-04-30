import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

import styles from "./Home.module.css";

import Input from "@/components/common/input/Input";
import Logo from "@/components/common/logo/Logo";

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

      <Logo type="home" />

      <div className={styles.searchInputBox} onClick={moveToSearch}>
        <Input placeholder="원하는 오락실 게임을 검색하세요" disabled />
        <p>
          <small style={{}}>여러분의 제보를 원합니다! link</small>
        </p>
      </div>
    </div>
  );
};

export default Home;
