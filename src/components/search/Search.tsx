import styles from "./Search.module.css";
import SearchList from "@/components/search/SearchList";
import SearchForm from "@/components/search/SearchForm";

const Search = () => {
  return (
    <div className={styles.container}>
      <SearchForm />
      <SearchList />
    </div>
  );
};

export default Search;
