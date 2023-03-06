import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/Protected/Protected";
import Browse from "./pages/Browse/Browse";
import Login from "./pages/Login/Login";
import ManageProfiles from "./components/Profiles/ManageProfiles/ManageProfiles";

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
    children: [
      {
        path: "home",
        element: <div>General Content</div>,
      },
      {
        path: "movies",
        element: <div>Movies</div>,
      },
      {
        path: "series",
        element: <div>Series</div>,
      },
    ],
  },
  {
    path: "/manage-profiles",
    element: (
      <Protected>
        <ManageProfiles />
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
