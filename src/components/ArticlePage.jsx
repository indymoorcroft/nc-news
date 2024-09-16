import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./apiCalls";

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (article.created_at) {
    article.created_at = article.created_at.slice(0, 10);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Bad request</p>;
  }

  return (
    <article className="article">
      <h1>{article.title}</h1>
      <button className="topic">{article.topic}</button>
      <img className="articleImg" src={article.article_img_url} />
      <p>written by: {article.author}</p>
      <p className="date">date posted: {article.created_at}</p>
      <p className="articleBody">{article.body}</p>
    </article>
  );
};
