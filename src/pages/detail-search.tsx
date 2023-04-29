import React from "react";
import { useRouter } from "next/router";
import DetailSearch from "@/components/detail-search/DetailSearch";

const DetailSearchPage = () => {
  const { query } = useRouter();


  return <DetailSearch/>
};

export default DetailSearchPage;
