import styles from "./Search.module.css";

import SearchForm from "@/components/search/SearchForm";
import SearchList from "@/components/search/SearchList";

const Search = () => {
  return (
    <div className={styles.container}>
      <SearchForm />
      <SearchList />
    </div>
  );
};

export default Search;
