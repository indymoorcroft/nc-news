import { Link } from "react-router-dom";

export const TopicCard = ({ topic, id }) => {
  if (id % 2 === 0) {
    return (
      <li className="topic-button">
        <Link to={`/?topic=${topic.slug}`} className="topic-text">
          <b>{topic.slug}</b>
        </Link>
      </li>
    );
  }

  return (
    <li className="topic-button-odd">
      <Link to={`/?topic=${topic.slug}`} className="topic-text">
        <b>{topic.slug}</b>
      </Link>
    </li>
  );
};
