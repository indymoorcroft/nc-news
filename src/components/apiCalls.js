import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-im.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data;
  });
};
