import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SuccessStoryDetailPage from "./pages/SuccessStoryDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-stories/:slug" element={<SuccessStoryDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
