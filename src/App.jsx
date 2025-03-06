import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [data, setData] = useState([]);

  return (
    <>
      <Header cartItem={cartItem}/>
      <Outlet context={{cartItem, setCartItem, data, setData}}/>
    </>
  )
}