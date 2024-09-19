import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../apiCalls";
import { ErrorComponent } from "./ErrorComponent";

export const CommentCard = ({ comment, setArticleComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const {
    loggedInUser: { username },
  } = useContext(UserContext);

  const handleClick = ({ target: { name } }) => {
    setIsDeleting(true);
    deleteComment(name)
      .then(() => {
        setArticleComments((currComments) => {
          return currComments.filter((comment) => {
            return comment.comment_id !== +name;
          });
        });
        setIsDeleting(false);
      })
      .catch((err) => {
        setIsDeleting(false);
        setError(err);
      });
  };

  if (isDeleting) {
    return <p>deleting comment...</p>;
  }

  const date = comment.created_at.slice(0, 10);

  return (
    <div>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <li className="flexbox-item">
          <div className="comment-body">
            <p>{comment.body}</p>
            {username === comment.author ? (
              <button
                className="comment-button"
                name={comment.comment_id}
                onClick={handleClick}
                disabled={isDeleting}
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
      )}
    </div>
  );
};
