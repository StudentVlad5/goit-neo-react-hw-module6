import css from './SearchBox.module.css';
const SearchBox = ({ search, setSearch }) => {
  return (
    <div className={css.searchContaner}>
      <label htmlFor="search">Find contacts by name</label>
      <div className={css.searchBox}>
        <input
          id="search"
          className={css.searchInput}
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search.length > 0 && (
          <button
            className={css.closeBtn}
            onClick={() => setSearch('')}
            type="button"
          >
            <span className={css.closeIcon}>✕</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
