import { Link } from "react-router-dom";
import { ArticleVotes } from "./ArticleVotes";

export const ArticleContent = ({ article }) => {
  if (article.created_at) {
    const timeStamp = Date.parse(article.created_at);
    const date = new Date(timeStamp);
    article.created_at = date.toLocaleDateString("en-gb");
  }

  return (
    <article className="article">
      <h1>{article.title}</h1>
      <Link to={`/?topic=${article.topic}`} className="article-topic">
        <b>{article.topic}</b>
      </Link>
      <img className="article-img" src={article.article_img_url} />
      <div className="article-details">
        <p>👤 {article.author}</p>
        <p>posted: {article.created_at}</p>
      </div>
      <p className="article-body">{article.body}</p>
      <div className="vote-article">
        <ArticleVotes votes={article.votes} article_id={article.article_id} />
      </div>
    </article>
  );
};
