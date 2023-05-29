import React from "react";

import NextSeo from "@/components/common/next-seo/NextSeo";
import CustomerService from "@/components/cs/CustomerService";
import PageLayout from "@/layouts/PageLayout";

const CustomerServicePage = () => {
  return (
    <>
      <NextSeo
        robots="noindex,nofollow"
        title="문의 | Goraku"
        description="Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
        keywords="Goraku,오락실,동네 오락실,오락실 찾기,오락실 위치,오락실 주소,오락실 영업시간"
        og_url="https://goraku.iro.ooo/"
      />

      <PageLayout type="cs">
        <CustomerService />
      </PageLayout>
    </>
  );
};

export default CustomerServicePage;
