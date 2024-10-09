import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hallo World</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
