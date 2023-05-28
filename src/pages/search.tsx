import { NextSeo } from "next-seo";

import Search from "@/components/search/Search";

const SearchPage = () => {
  return (
    <>
      <NextSeo noindex={true} />
      <Search />
    </>
  );
};

export default SearchPage;
