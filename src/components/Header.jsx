import { Link, useLocation } from "react-router-dom"

export default function Header() {
   const location = useLocation();

   const homeIsActive = location.pathname === '/' ? 'active' : '';
   const shopIsActive = location.pathname === '/shopping' ? 'active' : '';
   const cartIsActive = location.pathname === '/cart' ? 'active' : '';

   return (
         <header>
            <nav>
               <h2>
                  Light Shop
               </h2>
               <div className="middle-navLink">
                  <Link to="/" className={`navLink ${homeIsActive}`}
                  >Home</Link>
                  <Link to="/shop" className ={`navLink ${shopIsActive}`}>Shop</Link>
               </div>
               <div className="right-navLink">
                  <Link to="/cart">
                     <button  className ={`${cartIsActive}`}>Cart</button>
                  </Link>
               </div>
            </nav>
         </header>
   )
}