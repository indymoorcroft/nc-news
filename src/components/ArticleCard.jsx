import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  const date = article.created_at.slice(0, 10);
  return (
    <li className="articleCard">
      <h3>{article.title}</h3>
      <button className="topic">{article.topic}</button>
      <img src={article.article_img_url} />
      <p>
        posted by: <b>{article.author}</b>
      </p>
      <p>date posted: {date}</p>
      <Link to={`/articles/${article.article_id}`}>Learn more</Link>
    </li>
  );
};
