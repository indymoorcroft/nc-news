export const ArticleContent = ({ article }) => {
  if (article.created_at) {
    const timeStamp = Date.parse(article.created_at);
    const date = new Date(timeStamp);
    article.created_at = date.toLocaleDateString("en-gb");
  }

  return (
    <article className="article">
      <h1>{article.title}</h1>
      <p className="topic">{article.topic}</p>
      <img className="articleImg" src={article.article_img_url} />
      <div className="articleDetails">
        <p>👤 {article.author}</p>
        <p>posted: {article.created_at}</p>
      </div>
      <p className="articleBody">{article.body}</p>
    </article>
  );
};
