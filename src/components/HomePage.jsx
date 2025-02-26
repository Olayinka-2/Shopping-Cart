import Header from "./Header";

function HomePage() {
   return (
      <div className="body-container">
         <Header />
         <main>
            <div className="hero-container">
               <div className="hero-section">
                  <p className="hero-firstPara">Shoe fashion</p>
                  <p className="hero-secondPara">New Collection</p>
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
      </ div>
   )
}

export default HomePage;