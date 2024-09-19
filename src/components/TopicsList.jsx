import { useState, useEffect } from "react";
import { getAllTopics } from "../apiCalls";
import { TopicCard } from "./TopicCard";
import { ErrorComponent } from "./ErrorComponent";
import { Loading } from "./Loading";

export const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllTopics()
      .then(({ topics }) => {
        setIsLoading(false);
        setTopicsList(topics);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        <section>
          <ul>
            {topicsList.map((topic, i) => {
              return <TopicCard key={i} topic={topic} />;
            })}
          </ul>
        </section>
      )}
    </div>
  );
};
