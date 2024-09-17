import { useState, useEffect } from "react";
import { getAllArticles } from "../apiCalls";
import { ArticleCard } from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const params = { params: { topic: topicQuery } };

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(params)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topicQuery]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Bad request</p>;
  }

  const handleClick = () => {
    setSearchParams();
  };

  return (
    <section>
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
