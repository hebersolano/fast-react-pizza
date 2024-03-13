import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import CreateOrder, { orderAction } from "./features/order/CreateOrder";
import Order, { orderLoader } from "./features/order/Order";
import Error from "./ui/Error";
import CreateUser from "./features/users/CreateUser";
import { UpdateOrderAction } from "./features/order/UpdateOrder";
import { fetchMenu } from "./features/menu/menuSlice";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/user", element: <CreateUser /> },
      { path: "/order/new", element: <CreateOrder />, action: orderAction },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(fetchMenu());
  }, []); // fetch menu only the first time the app load

  return <RouterProvider router={router} />;
}

export default App;
