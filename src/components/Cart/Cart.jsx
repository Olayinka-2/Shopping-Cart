import { useOutletContext } from "react-router-dom";
import style from './cart.module.css';

export default function Cart() {
   const {cartItem, setCartItem, SubTotal, tax} = useOutletContext();
   const emptyCart = cartItem.length;

   function handleAddItem(product) {
      const updatedCart = cartItem.map((item) =>
         item.product.id === product.product.id
           ? { ...item, quantity: item.quantity + 1 } // Update quantity
           : item // Return unchanged item
         );
         setCartItem(updatedCart);
   }

   console.log(SubTotal);
   function handleSubtractItem(product) {
      if(product.quantity > 1) {
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
      {
         emptyCart > 0 ?
         <main>
            <div className={style["cart-container"]}>
               <table className={style["table"]}>
                  <thead className={style["table-header"]}>
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
                           <div className={style["table-desc"]}>
                              <p className={style["first-para"]}>{product.product.title}</p>
                              <h3 className={style["second-para"]}>Estimated Ship date: June 6th</h3>
                           </div>
                        </td>
                        <td>{product.product.price}</td>
                        <td>
                           <div className={style["amount-con"]}>
                              <button className={style["div1"]}
                              onClick={() => handleSubtractItem(product)}
                              >-</button>
                              <button className={style["div2"]}>{product.quantity}</button>
                              <button className={style["div3"]}
                              onClick={() => handleAddItem(product)}
                              >+</button>
                           </div>
                        </td>
                        <td>{
                           (product.quantity * product.product.price).toFixed(2)
                           }
                           </td>
                     </tr>
                        ))
                     }
                  </tbody>
               </table>
               <section className={style["product-sumation"]}>
                  <div className="subtotal">
                     <p>Subtotal: </p>
                     <p>${SubTotal}</p>
                  </div>
                  <div className="sales-tax">
                     <p>Tax: </p>
                     <p>4%</p>
                  </div>
                  <div className="grand-total">
                     <p>Grand total: </p>
                     <p>${Math.ceil(SubTotal + tax)}</p>
                  </div>
               </section>
            </div>
         </main> :
         <div className={style["empty-cart"]}>
            No item is in the Cart
         </div>
      }
      </>
   )
}