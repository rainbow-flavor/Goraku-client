import React from "react";

import NextSeo from "@/components/common/next-seo/NextSeo";
import Home from "@/components/home/Home";

const HomePage = () => {
  return (
    <>
      <NextSeo
        robots="index,follow"
        title="Goraku :: 한국 오락실 리스트"
        description="Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
        keywords="Goraku,오락실,동네 오락실,오락실 찾기,오락실 위치,오락실 주소,오락실 영업시간"
        og_url="https://goraku.iro.ooo/"
      />

      <Home />
    </>
  );
};

export default HomePage;
