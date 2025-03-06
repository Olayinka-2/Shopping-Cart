import { useOutletContext } from "react-router-dom";

export default function Cart() {
   const {cartItem, setCartItem} = useOutletContext();

   function handleAddItem(product) {
      const updatedCart = cartItem.map((item) =>
         item.product.id === product.product.id
           ? { ...item, quantity: item.quantity + 1 } // Update quantity
           : item // Return unchanged item
         );
         setCartItem(updatedCart);
   }
   function handleSubtractItem(product) {
      if(product.quantity > 0) {
         const updatedCart = cartItem.map((item) =>
            item.product.id === product.product.id
              ? { ...item, quantity: item.quantity - 1 } // Update quantity
              : item // Return unchanged item
            );
            setCartItem(updatedCart);
      }
   }

   return (
      <>
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
                     {
                        cartItem.map((product) => (
                     <tr key={product.product.id}>
                        <td>
                           <div className="table-desc">
                              <p className="first-para">{product.product.title}</p>
                              <h3 className="second-para">Estimated Ship date: June 6th</h3>
                           </div>
                        </td>
                        <td>{product.product.price}</td>
                        <td>
                           <div className="amount-con">
                              <button className="div1"
                              onClick={() => handleSubtractItem(product)}
                              >-</button>
                              <button className="div2">{product.quantity}</button>
                              <button className="div3"
                              onClick={() => handleAddItem(product)}
                              >+</button>
                           </div>
                        </td>
                        <td>{
                           product.quantity * product.product.price
                           }
                           </td>
                     </tr>
                        ))
                     }
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