import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllArticles } from "../apiCalls";
import { ArticleCard } from "./ArticleCard";
import { SortBy } from "./SortBy";
import { Expandable } from "./Expandable";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const params = {
    params: { topic: topicQuery, sort_by: sortByQuery, order: orderQuery },
  };

  useEffect(() => {
    getAllArticles(params)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Articles not found</p>;
  }

  const handleClick = () => {
    setSearchParams();
  };

  return (
    <section>
      <Expandable>
        <SortBy searchParams={searchParams} setSearchParams={setSearchParams} />
      </Expandable>
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
      {searchParams ? (
        <button onClick={handleClick}>view all articles</button>
      ) : null}
    </section>
  );
};
