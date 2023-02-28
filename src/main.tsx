import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/Protected/Protected";
import Browse from "./pages/Browse/Browse";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browse",
    element: (
      <Protected>
        <Browse />
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
