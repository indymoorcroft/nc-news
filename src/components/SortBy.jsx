export const SortBy = ({ searchParams, setSearchParams }) => {
  const handleChange = ({ target: { value } }) => {
    const sortParams = value.split(" ");

    if (sortParams.length === 2) {
      setSearchParams({
        ...searchParams,
        sort_by: sortParams[0],
        order: sortParams[1],
      });
    } else {
      setSearchParams({ ...searchParams, sort_by: value });
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
