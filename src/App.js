import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";
import Body from "./components/Body";
import Search from "./components/Search";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Outlet />
      </>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Body />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/home/search",
            element: <Search />,
          },
          {
            path: "/home/offers",
            element: <Offers />,
          },
          {
            path: "/home/support",
            element: <Help />,
          },
          {
            path: "/home/cart",
            element: <Cart />,
          },
          {
            path: "/home/restaurant/:resId",
            element: <RestaurantMenu />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
