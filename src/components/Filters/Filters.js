import SortFilter from "./components/SortFilter/SortFilter";

const Filters = ({ searchValue, setSearchValue, onSort }) => {
  return (
    <div className="m-3">
      <input className="me-1"
        placeholder="Search by username..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SortFilter className="m-3" onSort={onSort}/>
    </div>
  );
};
export default Filters;
