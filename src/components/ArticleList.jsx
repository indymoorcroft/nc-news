import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllArticles } from "../apiCalls";
import { ArticleCard } from "./ArticleCard";
import { SortBy } from "./SortBy";
import { ErrorComponent } from "./ErrorComponent";
import { Loading } from "./Loading";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [itemCount, setItemCount] = useState([]);

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const params = {
    params: {
      topic: topicQuery,
      sort_by: sortByQuery,
      order: orderQuery,
      p: page,
    },
  };

  useEffect(() => {
    getAllArticles({ params: { limit: 9999 } }).then(({ articles }) => {
      setItemCount(articles);
    });
  }, []);

  useEffect(() => {
    getAllArticles(params)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [topicQuery, sortByQuery, orderQuery, page]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <section>
          <div className="sort-by-container">
            <SortBy
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </div>
          <ul className="container">
            {articles.map((article) => {
              return (
                <ArticleCard
                  key={article.article_id}
                  article={article}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                />
              );
            })}
          </ul>
          <div className="article-nav">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Back
            </button>
            <div>
              {itemCount.map((item, index) => {
                return index % 10 === 0 ? (
                  <button
                    className="article-nav-button"
                    key={index}
                    name={index / 10 + 1}
                    onClick={({ target: { name } }) => setPage(+name)}
                  >
                    {index / 10 + 1}
                  </button>
                ) : null;
              })}
            </div>
            <button
              onClick={() => setPage(page + 1)}
              disabled={10 * page >= itemCount.length}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
