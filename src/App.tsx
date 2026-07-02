import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import SuccessStoryDetailPage from "./pages/SuccessStoryDetailPage";
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import PerspectivesPage from "./pages/PerspectivesPage";
import PerspectiveDetailPage from "./pages/PerspectiveDetailPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/success-stories/:slug" element={<SuccessStoryDetailPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/perspectives" element={<PerspectivesPage />} />
            <Route path="/perspectives/:slug" element={<PerspectiveDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
