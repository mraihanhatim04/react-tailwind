import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/404.jsx";

import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductsPage from "./pages/products.jsx";
import HomePage from "./pages/home.jsx";
import CartPage from "./pages/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
