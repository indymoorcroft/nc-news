import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../apiCalls";
import { CommentList } from "./CommentList";
import { ArticleVotes } from "./ArticleVotes";
import { ErrorComponent } from "./ErrorComponent";
import { Loading } from "./Loading";
import { ArticleContent } from "./ArticleContent";

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <section>
          <ArticleContent article={article} />
          <ArticleVotes votes={article.votes} article_id={article_id} />
          <CommentList article_id={article_id} />
        </section>
      )}
    </div>
  );
};
