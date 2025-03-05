import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "./shopPage/ShopPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "shopping",
      element: <Shop />
   }
]);

export default router;

