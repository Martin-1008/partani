import { useRoutes } from "react-router-dom";
import Home from "../Views/Home/Home";
import Register from "../Views/Register/Register";

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
};

export default MainRoute;
