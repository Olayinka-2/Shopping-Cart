import Header from "./Header";
import image from './background.jpg';

export default function Shop() {
   return (
      <>
         <Header />
         <main>
            <section className = "hero-section">
               <div className="product-header">
                  Our products available
               </div>
               <div className="product-container">
                  <div className="products">
                  <div className="product-card">
                     <div className="product-image">
                        <img src={image} alt="" />
                     </div>
                     <div className="product-description">
                        <p>School bag</p>
                        <p>price taeg</p>
                        <p>Dsicount available</p>
                     </div>
                  </div>
                  <div className="product-card">
                     <div className="product-image">
                        <img src={image} alt="" />
                     </div>
                     <div className="product-description">
                        <p>School bag</p>
                        <p>price taeg</p>
                        <p>Dsicount available</p>
                     </div>
                  </div>
                  <div className="product-card">
                     <div className="product-image">
                        <img src={image} alt="" />
                     </div>
                     <div className="product-description">
                        <p>School bag</p>
                        <p>price taeg</p>
                        <p>Dsicount available</p>
                     </div>
                  </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   )
}