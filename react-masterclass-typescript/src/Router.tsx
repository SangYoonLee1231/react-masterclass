import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import User from "./screens/users/User";
import Root from "./Root";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "users/:userId",
        element: <User />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
