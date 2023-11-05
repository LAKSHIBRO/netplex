import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./data/redux/store.js";
import Home from "./pages/Home.jsx";
import Report from "./pages/Report.jsx";
import Series from "./pages/Series.jsx";
import Movies from "./pages/Movies.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import P404 from "./pages/P404.jsx";
import Description from "./pages/Description.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
  },
  {
    path: "/:type/:tmdbId",
    element: <Description />,
  },
  {
    path: "*",
    element: <P404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  //   </React.StrictMode>,
);


