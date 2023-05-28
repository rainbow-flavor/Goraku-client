import Head from "next/head";

import Search from "@/components/search/Search";

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>문의 | Goraku</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Search />
    </>
  );
};

export default SearchPage;
