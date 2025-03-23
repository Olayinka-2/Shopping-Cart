import { Link, useLocation } from "react-router-dom"

export default function Header() {
   const location = useLocation();

   const homeIsActive = location.pathname === '/' ? 'active' : '';
   const shopIsActive = location.pathname === '/shop' ? 'active' : '';
   const cartIsActive = location.pathname === '/cart' ? 'active' : '';

   return (
         <header>
            <nav>
               
                  <Link to="/" className="Link">
                  <h2>
                  Light Shop
                  </h2>
                  </Link>
               
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