import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "./shopPage/ShopPage";
import Cart from "./Cart";
import HomePage from "./Home/HomePage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "/shop",
            element: <Shop />
         },
         {
            path: "/cart",
            element: <Cart />
         }
      ]
   }
]);

export default router;

