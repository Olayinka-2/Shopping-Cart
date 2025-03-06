import { useEffect, useState } from "react";
import style from './shopContent.module.css';

export default function ShopContent() {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);



   function handleAddToCart(product) {
      setCartItem([
         ...cartItem,
         product
      ])
   }

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const response = await fetch('https://fakestoreapi.com/products');

            if(!response.ok) {
               throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
         } catch (error) {
            console.error('Error fetching data:', error)
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <main>
            <section className = {style["hero-section"]}>
               <div className={style['product-header']}>
                  Our products available
               </div>
               <div className={style["product-container"]}>
                  <div className={style["products"]}>
                  {
                     loading ? <div className={style["loading-state"]}>Loading...</div> :
                     data.map((product) => (
                        <div className={style["product-card"]} key={product.id}>
                     <div className={style["product-image"]}>
                        <img src={product.image} alt={product.title} />
                     </div>
                     <div className={style["product-description"]}>
                        <p><span>Category:</span> {product.category}</p>
                        <p><span>Price:</span> {product.price}</p>
                        <p><span>Descriptions:</span> {product.title}</p>
                        <button 
                        className={style["Add-to-cart-btn"]}
                        onClick={() => handleAddToCart(product)}
                        >Add to Cart</button>
                     </div>
                  </div>
                     ))
                  }
                  </div>
               </div>
            </section>
         </main>
      </>
   )
}