import Head from "next/head";

import Home from "@/components/home/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Goraku :: 한국 오락실 리스트</title>
        <meta
          name="description"
          content="Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
        />
        <meta
          name="keywords"
          content="Goraku, 오락실, 동네 오락실, 오락실 찾기, 오락실 위치, 오락실 주소, 오락실 영업시간"
        />
        <meta property="og:title" content="Goraku :: 한국 오락실 리스트" />
        <meta property="og:image" content="/img/logo_open_graph.png" />
        <meta
          property="og:description"
          content="Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
        />
        <meta name="robots" content="all" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
