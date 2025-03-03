import { Link, useLocation } from "react-router-dom"

export default function Header() {
   const location = useLocation();

   const homeIsActive = location.pathname === '/' ? 'active' : '';
   console.log(homeIsActive);
   const shopIsActive = location.pathname === '/shopping' && 'active';

   return (
      <>
         <header>
            <nav>
               <h2>
                  Light Shop
               </h2>
               <div className="middle-navLink">
                  <Link to="/" className={`navLink ${homeIsActive}`}
                  >Home</Link>
                  <Link to="shopping" className ={`navLink ${shopIsActive}`}
                  style={{
                     
                  }}>Shop</Link>
               </div>
               <div className="right-navLink">
                  <p>Cart</p>
               </div>
            </nav>
         </header>
      </>
   )
}