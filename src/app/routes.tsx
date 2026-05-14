import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/Checkout";
import { SearchResults } from "./pages/SearchResults";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/categoria/:categoryName",
    Component: Category,
  },
  {
    path: "/producto/:productId",
    Component: Product,
  },
  {
    path: "/carrito",
    Component: Cart,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/busqueda",
    Component: SearchResults,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);