import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { postComment } from "../apiCalls";

export const CommentForm = ({ comments, setComments, article_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    loggedInUser: { username },
  } = useContext(UserContext);

  const handleChange = ({ target: { value } }) => {
    setCommentBody(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { username: username, body: commentBody };
    setIsSubmitting(true);
    setCommentBody("");

    postComment(newComment, article_id).then((comment) => {
      setComments([comment, ...comments]);
      setIsSubmitting(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {isSubmitting ? (
        <p>posting comment...</p>
      ) : (
        <textarea
          className="comment-text"
          onChange={handleChange}
          value={commentBody}
          placeholder="Leave a comment"
          required
        />
      )}
      <input type="submit" disabled={isSubmitting} className="comment-submit" />
    </form>
  );
};
