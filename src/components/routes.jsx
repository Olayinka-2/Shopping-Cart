import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "./shopPage/ShopPage";
import Cart from "./Cart";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "/shop",
      element: <Shop />
   },
   {
      path: "/cart",
      element: <Cart />
   }
]);

export default router;

