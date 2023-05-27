import Link from "next/link";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";

import styles from "./Home.module.css";

import Input from "@/components/common/input/Input";
import Logo from "@/components/common/logo/Logo";
import { RouteMap } from "@/constants/route";
import Footer from "@/layouts/footer/Footer";

const Home = () => {
  const { push } = useRouter();

  const moveToSearch = () => {
    push(RouteMap.SEARCH);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={RouteMap.DETAIL_SEARCH}>
            오락실 둘러보기
            <FaSearch size={20} color="#fff" title="상세 검색" />
          </Link>
        </div>

        <Logo type="home" />

        <div className={styles.searchInputBox} onClick={moveToSearch}>
          <Input placeholder="원하는 오락실 게임을 검색하세요" disabled />
        </div>

        <p className={styles.paragraph}>
          <Link href={RouteMap.CUSTOMER_SERVICE}>
            여러분의 제보를 원합니다!
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
