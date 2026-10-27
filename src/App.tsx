import { Navigate, Route, Routes } from "react-router";
import SiteLayout from "./routes/SiteLayout";
import HomePage from "./routes/HomePage";
import PostsIndex from "./routes/PostsIndex";
import PostDetail from "./routes/PostDetail";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsIndex />} />
        <Route path="posts/:slug" element={<PostDetail />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="blog"
          element={<Navigate to="/posts" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}