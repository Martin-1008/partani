import { useRoutes } from "react-router-dom";
import Home from "../Views/Home/Home";
import Login from "../Views/Login/Login";
import Register from "../Views/Register/Register";
import User from "../Views/User/User";

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/user",
      element: <User />,
    },
  ]);
};

export default MainRoute;
