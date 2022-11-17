import { useRoutes } from "react-router-dom";
import Home from "../Views/Home/Home";
import Login from "../Views/Login/Login";
import ProductDetail from "../Views/ProductDetail/ProductDetail";
import Register from "../Views/Register/Register";
import User from "../Views/User/User";
import Products from "../Views/Product/Products";

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
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
      path: "/user",
      element: <User />,
    },
    {
      path: "/productDetail",
      element: <ProductDetail />,
    },
    {
      path: "/product/search/:filter",
      element: <Products />,
    },
  ]);
};

export default MainRoute;
