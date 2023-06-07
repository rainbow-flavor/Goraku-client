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

  const onClickInput = () => {
    push(RouteMap.SEARCH);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={RouteMap.DETAIL_SEARCH}>
            <a>
              오락실 둘러보기
              <FaSearch size={20} color="#fff" title="상세 검색" />
            </a>
          </Link>
        </div>

        <Logo type="home" />

        <div className={styles.searchInputBox}>
          <Input
            onClick={onClickInput}
            placeholder="원하는 오락실 게임을 검색하세요"
            readOnly
          />
        </div>

        <div className={styles.paragraph}>
          <div className={styles.notification}>
            <p>
              현재 지역은 &nbsp;<b>서울</b>, &nbsp;<b>경기남부</b>까지만
              제공하고 있습니다.
            </p>

            <Link href={RouteMap.CUSTOMER_SERVICE}>
              <a>여러분의 제보를 원합니다!</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
