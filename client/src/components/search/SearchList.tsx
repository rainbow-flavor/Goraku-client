import { FaSearch } from "react-icons/fa";

const SearchListItem = ({ text }: { text: string }) => {
  return (
    <div>
      <FaSearch />
      {text}
    </div>
  );
};

const SearchList = () => {
  return <div></div>;
};

export default SearchList;
