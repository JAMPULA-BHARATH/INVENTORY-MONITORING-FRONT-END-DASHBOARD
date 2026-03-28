function Filters({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default Filters;