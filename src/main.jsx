import { createRoot } from "react-dom/client";
import ConnectConfirm from "./app/connect_confirm/Connect_confirm";
import "./index.css";
import Login from "./app/login";
import Profile from "./app/profile";
import ConnectCode from "./app/connect_code";
import Connected from "./app/connected";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/connect-code",
    element: <ConnectCode />,
  },
  {
    path: "/connected",
    element: <Connected />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
