import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-im.onrender.com/api",
});

export const getAllArticles = (query) => {
  return newsApi.get("/articles", query).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const getAllTopics = () => {
  return newsApi.get(`/topics`).then(({ data }) => {
    return data;
  });
};

export const patchVote = (article_id, clicked) => {
  const patchBody = {
    inc_votes: 1,
  };

  if (clicked) {
    patchBody.inc_votes = -1;
  }

  return newsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ article }) => {
      return article;
    });
};

export const postComment = (postBody, article_id) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
