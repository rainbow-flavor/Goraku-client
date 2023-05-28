import Head from "next/head";
import React from "react";

import DetailSearch from "@/components/detail-search/DetailSearch";
import PageLayout from "@/layouts/PageLayout";

const DetailSearchPage = () => {
  return (
    <>
      <Head>
        <title>오락실 탐색 | Goraku</title>
        <meta
          name="description"
          content="Goraku, 오락실, 동네 오락실, 오락실 찾기, 오락실 위치, 오락실 주소, 오락실 영업시간"
          key="description"
        />
        <meta
          name="keywords"
          content="Goraku,오락실,동네 오락실,오락실 찾기,오락실 위치,오락실 주소,오락실 영업시간"
          key="keywords"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="오락실 탐색 | Goraku" />
        <meta property="og:image" content="/img/logo_open_graph.png" />
        <meta
          property="og:description"
          content="Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
        />
        <meta
          property="og:url"
          content={`https://goraku.iro.ooo/detail-search`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageLayout>
        <DetailSearch />
      </PageLayout>
    </>
  );
};

export default DetailSearchPage;
