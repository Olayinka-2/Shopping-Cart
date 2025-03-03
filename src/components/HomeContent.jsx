import style from './homeStyles.module.css';

export default function MainContent() {
   return (
      <>
         <main className={style["main"]}>
            <div className={style["hero-container"]}>
               <div className={style["hero-section"]}>
                  <p className={style['hero-firstPara']}>Shoe fashion</p>
                  <p className={style['hero-secondPara']}>New Collection</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur fugit dolor quaerat odio hic.</p>
                  <div className={style["hero-link"]}>
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