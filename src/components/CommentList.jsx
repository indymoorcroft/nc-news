import { useState, useEffect } from "react";
import { getCommentsById } from "../../apiCalls";
import { CommentCard } from "./CommentCard";

export const CommentList = ({ article_id }) => {
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    getCommentsById(article_id).then(({ comments }) => {
      setArticleComments(comments);
    });
  }, []);

  return (
    <section>
      <h2>Comments:</h2>
      <ul className="flexbox">
        {articleComments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};
