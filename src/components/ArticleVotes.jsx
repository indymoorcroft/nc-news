import { useState, useEffect } from "react";
import { patchVote } from "../apiCalls";

export const ArticleVotes = ({ votes, article_id }) => {
  const [articleVotes, setArticleVotes] = useState(votes);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(null);

  const handleLike = () => {
    clicked
      ? setArticleVotes((currVotes) => currVotes - 1)
      : setArticleVotes((currVotes) => currVotes + 1);
    setError(null);

    patchVote(article_id, clicked)
      .then(() => {
        setClicked(!clicked);
      })
      .catch((err) => {
        setArticleVotes((currVotes) => currVotes - 1);
        setError("Your vote was not successful. Please try again!");
      });
  };

  return (
    <section className="vote">
      <p className="voteTag">
        votes: <b>{articleVotes}</b>
      </p>
      {clicked ? (
        <button className="buttonClicked" onClick={handleLike}>
          👍
        </button>
      ) : (
        <button onClick={handleLike}>👍</button>
      )}
      {error ? <p>{error}</p> : null}
    </section>
  );
};
