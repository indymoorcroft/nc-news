import { useState, useEffect } from "react";
import { getCommentsById } from "../apiCalls";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";

export const CommentList = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCommentsById(article_id)
      .then(({ comments }) => {
        setIsLoading(false);
        setArticleComments(comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Comments not found</p>;
  }

  return (
    <section>
      <h2>Comments:</h2>
      <ul className="flexbox">
        {articleComments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setArticleComments={setArticleComments}
            />
          );
        })}
      </ul>
      <CommentForm
        comments={articleComments}
        setComments={setArticleComments}
        article_id={article_id}
      />
    </section>
  );
};
