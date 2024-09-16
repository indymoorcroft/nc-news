import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-im.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
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
