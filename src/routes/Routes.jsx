import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
