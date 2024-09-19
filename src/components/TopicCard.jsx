import { Link } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  return (
    <li>
      <Link to={`/?topic=${topic.slug}`}>{topic.slug}</Link>
      <p>{topic.description}</p>
    </li>
  );
};
