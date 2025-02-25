function HomePage() {
   return (
      <>
         <header>
            <nav>
               <h2>
                  Light Shop
               </h2>
               <div className="middle-navLink">
                  <p>Home</p>
                  <p>Shop</p>
               </div>
               <div className="right-navLink">
                  <p>Cart</p>
               </div>
            </nav>
         </header>
         <main>
            <div className="hero-container">
               <div className="hero-section">
                  <p>Shoe fashion</p>
                  <p>New Collection</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur fugit dolor quaerat odio hic.</p>
                  <div className="hero-link">
                     <button>
                        Shop Now
                     </button>
                     <button>
                        Collection
                     </button>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}

export default HomePage;