import styles from "./Search.module.css";

import SearchForm from "@/components/search/SearchForm";
import SearchList from "@/components/search/SearchList";

interface SearchProps {
  onSearch?: () => void;
}

const Search = ({ onSearch }: SearchProps) => {
  return (
    <div className={styles.container}>
      <SearchForm onSearch={onSearch} />
      <SearchList onSearch={onSearch} />
    </div>
  );
};

export default Search;
