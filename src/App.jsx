import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
