export const SortBy = ({ searchParams, setSearchParams }) => {
  const handleClick = ({ target: { name } }) => {
    const sortParams = name.split(" ");

    if (sortParams.length === 2) {
      setSearchParams({
        ...searchParams,
        sort_by: sortParams[0],
        order: sortParams[1],
      });
    } else {
      setSearchParams({ ...searchParams, sort_by: name });
    }
  };

  return (
    <>
      <ul className="sort-by-box">
        <li className="sort-by-items">
          <p>Date:</p>
          <button
            className="sort-by-button"
            name="created_at"
            onClick={handleClick}
          >
            ⬆️
          </button>
          <button
            className="sort-by-button"
            name="created_at asc"
            onClick={handleClick}
          >
            ⬇️
          </button>
        </li>

        <li className="sort-by-items">
          <p>Comment Count:</p>
          <button
            className="sort-by-button"
            name="comment_count"
            onClick={handleClick}
          >
            ⬆️
          </button>
          <button
            className="sort-by-button"
            name="comment_count asc"
            onClick={handleClick}
          >
            ⬇️
          </button>
        </li>
        <li className="sort-by-items">
          <p>Votes:</p>
          <button className="sort-by-button" name="votes" onClick={handleClick}>
            ⬆️
          </button>
          <button
            className="sort-by-button"
            name="votes asc"
            onClick={handleClick}
          >
            ⬇️
          </button>
        </li>
      </ul>
    </>
  );
};
