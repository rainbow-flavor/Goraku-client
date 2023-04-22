import React from "react";
import { useRouter } from "next/router";

const DetailSearchPage = () => {
  const { query } = useRouter();
  console.log(query);

  return <div>DetailSearchPage</div>;
};

export default DetailSearchPage;
