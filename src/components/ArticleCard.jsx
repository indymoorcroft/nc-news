import { Link } from "react-router-dom";
import { secondsToString } from "../functions";

export const ArticleCard = ({ article, searchParams, setSearchParams }) => {
  const handleClick = ({ target: { innerText } }) => {
    setSearchParams({ ...searchParams, topic: innerText });
  };

  const getSeconds = Math.floor(Date.parse(article.created_at) / 1000);
  const currSeconds = Math.floor(+new Date() / 1000);
  const seconds = currSeconds - getSeconds;
  const timeSincePost = secondsToString(seconds);

  return (
    <li className="articleCard">
      <h3>{article.title}</h3>
      <button className="topic" onClick={handleClick} name={article.topic}>
        <b>{article.topic}</b>
      </button>
      <img className="article-card-img" src={article.article_img_url} />
      <div className="article-card-info">
        <p>
          👤 <b>{article.author}</b>
        </p>

        <em>
          {timeSincePost ? (
            <p>posted {timeSincePost} ago</p>
          ) : (
            <p>posted just now</p>
          )}
        </em>
      </div>
      <div className="article-card-extra">
        <div className="votes-comment-count">
          <p className="article-vote">votes: {article.votes}</p>
          <p className="article-comment">
            comment count: {article.comment_count}
          </p>
        </div>
        <Link
          to={`/articles/${article.article_id}`}
          className="article-read-more"
        >
          <b>Read article</b>
        </Link>
      </div>
    </li>
  );
};
