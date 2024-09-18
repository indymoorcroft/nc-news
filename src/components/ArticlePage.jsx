import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../apiCalls";
import { CommentList } from "./CommentList";
import { ArticleVotes } from "./ArticleVotes";
import { ErrorComponent } from "./ErrorComponent";

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        setError(err);
      });
  }, []);

  if (article.created_at) {
    article.created_at = article.created_at.slice(0, 10);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if (isError) {
  //   return <p>Bad request</p>;
  // }

  return (
    <div>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <section>
          <article className="article">
            <h1>{article.title}</h1>
            <p className="topic">{article.topic}</p>
            <img className="articleImg" src={article.article_img_url} />
            <div className="articleDetails">
              <p>written by: {article.author}</p>
              <p>date posted: {article.created_at}</p>
            </div>
            <p className="articleBody">{article.body}</p>
          </article>
          <ArticleVotes votes={article.votes} article_id={article_id} />
          <CommentList article_id={article_id} />
        </section>
      )}
    </div>
  );
};
