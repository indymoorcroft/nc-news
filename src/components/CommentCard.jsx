import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../apiCalls";

export const CommentCard = ({ comment, setArticleComments }) => {
  const {
    loggedInUser: { username },
  } = useContext(UserContext);

  const handleClick = ({ target: { name } }) => {
    deleteComment(name).then(() => {
      setArticleComments((currComments) => {
        return currComments.filter((comment) => {
          return comment.comment_id !== +name;
        });
      });
    });
  };

  const date = comment.created_at.slice(0, 10);

  return (
    <li className="flexbox-item">
      <div className="comment-body">
        <p>{comment.body}</p>
        {username === comment.author ? (
          <button
            className="comment-button"
            name={comment.comment_id}
            onClick={handleClick}
          >
            X
          </button>
        ) : null}
      </div>
      <div className="commentDetails">
        <p>{comment.author}</p>
        <p>
          date posted: <b>{date}</b>
        </p>
      </div>
    </li>
  );
};
