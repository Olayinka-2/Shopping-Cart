import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [data, setData] = useState([]);
  const [SubTotal, setSubTotal] = useState([]);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    const total = cartItem.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    setSubTotal(total);
    setTax(SubTotal * 0.04);
  }, [cartItem, SubTotal]);

  return (
    <>
    <div className="body-container">
      <Header cartItem={cartItem}/>
      <Outlet context={{cartItem, setCartItem, data, setData, SubTotal, tax}}/>
    </div>
    </>
  )
}