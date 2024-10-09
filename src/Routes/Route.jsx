import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
        {
          path:"/login",
      },
    ],
  },
]);

export default router;
