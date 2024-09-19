import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";
import { Header } from "./components/Header";
import { NotFoundPage } from "./components/NotFoundPage";
import { TopicsList } from "./components/TopicsList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
