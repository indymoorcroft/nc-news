import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { ArticlePage } from "./components/ArticlePage";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
