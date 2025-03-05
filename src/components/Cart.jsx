import Header from "./Header"

export default function Cart() {
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
                              <div className="div1">-</div>
                              <div className="div2">0</div>
                              <div className="div3">+</div>
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