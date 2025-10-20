import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayouts></Homelayouts>,
    hydrateFallbackElement: <div>loading...</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch(`/news.json`),
      },
    ],
  },
  {
    path: "/auth",
    element: <div>auth is building</div>,
  },
  {
    path: "/news",
    element: <div>news is inculding</div>,
  },
  {
    path: "/*",
    element: <div>Error-404</div>,
  },
]);

export default router;
