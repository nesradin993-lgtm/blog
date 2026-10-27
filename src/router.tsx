import { createBrowserRouter, redirect } from "react-router";
import SiteLayout from "./routes/SiteLayout";
import HomePage from "./routes/HomePage";
import PostsIndex from "./routes/PostsIndex";
import PostDetail, { postLoader } from "./routes/PostDetail";
import AboutPage from "./routes/AboutPage";
import NotFound from "./routes/NotFound";
import RouteError from "./routes/RouteError";

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    ErrorBoundary: RouteError,
    children: [
      { index: true, Component: HomePage },
      { path: "posts", Component: PostsIndex },
      {
        path: "posts/:slug",
        Component: PostDetail,
        loader: postLoader,
      },
      { path: "about", Component: AboutPage },
      {
        path: "blog",
        loader: () => redirect("/posts"),
      },
      { path: "*", Component: NotFound },
    ],
  },
]);