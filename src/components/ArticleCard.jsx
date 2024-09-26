import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { secondsToString } from "../functions";
import { ArticleVotes } from "./ArticleVotes";

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
      <Link to={`/articles/${article.article_id}`}>
        <img className="article-card-img" src={article.article_img_url} />
      </Link>
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
          <ArticleVotes
            votes={article.votes}
            article_id={article.article_id}
            className="article-vote"
          />
          <p className="article-comment">
            comments:
            <HashLink to={`/articles/${article.article_id}#comments`}>
              <b className="comment-count">{article.comment_count}</b>
            </HashLink>
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
