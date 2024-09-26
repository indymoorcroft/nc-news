export const SortBy = ({ searchParams, setSearchParams }) => {
  const handleChange = ({ target: { value } }) => {
    const sortParams = value.split(" ");

    if (sortParams.length === 2) {
      searchParams.set("sort_by", sortParams[0]);
      searchParams.set("order", sortParams[1]);
      setSearchParams(searchParams);
    } else {
      searchParams.set("sort_by", sortParams[0]);
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <label htmlFor="sortby">
        <select id="sortby" onChange={handleChange}>
          <option value="created_at desc">date (new-old)</option>
          <option value="created_at asc">date (old-new)</option>
          <option value="comment_count asc">comment count (high-low)</option>
          <option value="comment_count desc">comment count (low-high)</option>
          <option value="votes asc">votes (high-low)</option>
          <option value="votes desc">votes (low-high)</option>
        </select>
      </label>
    </>
  );
};
