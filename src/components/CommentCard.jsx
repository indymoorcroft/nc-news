export const CommentCard = ({ comment }) => {
  const date = comment.created_at.slice(0, 10);
  return (
    <li className="flexbox-item">
      <p className="commentBody">{comment.body}</p>
      <div className="commentDetails">
        <p>{comment.author}</p>
        <p>
          date posted: <b>{date}</b>
        </p>
      </div>
    </li>
  );
};
