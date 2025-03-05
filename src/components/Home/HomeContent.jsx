import style from './homeStyles.module.css';
import { Link } from 'react-router-dom';

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
                     
                     <Link to="/shop">
                        <button>
                           Shop Now
                        </button>
                     </Link>
                     <Link>
                        <button>
                           Collection
                        </button>
                     </Link>
                     
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}