import { useLocation } from "react-router-dom"
import Header from "./Header"

export default function Cart() {
   const location = useLocation();
   let cartItem = location.state;

   return (
      <>
         <Header />
         <main>
            <div className="cart-container">
               <table className="table">
                  <thead className="table-header">
                     <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <div className="table-desc">
                              <p className="first-para">Pi Pizza Oven</p>
                              <h3 className="second-para">Estimated Ship date: June 6th</h3>
                           </div>
                        </td>
                        <td>$469.99</td>
                        <td>
                           <div className="amount-con">
                              <button className="div1">-</button>
                              <button className="div2">0</button>
                              <button className="div3">+</button>
                           </div>
                        </td>
                        <td>$469.99</td>
                     </tr>
                     <tr>
                        <td>Solo Stove Grill Ultimate Bundle</td>
                        <td>$549.99</td>
                        <td>1</td>
                        <td>$549.99</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </main>
      </>
   )
}