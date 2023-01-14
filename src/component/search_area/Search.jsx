import React, { useRef } from 'react'
import css from './Search.module.css'
// serac---bar
 const Search_bar=()=>{

    const icone=useRef();
    const to=useRef();
    const from=useRef();
  const move=()=>{
     
     if(to.current.value!=""&&from.current.value!="")
     {  
        icone.current.classList.add("move");
        setTimeout(()=>{
          icone.current.classList.remove("move"); 
        },500)
        // --------------
        const frome=to.current.value;
        to.current.value=from.current.value;
        from.current.value=frome;
     }

  }
    return(
        <>
          <div className={css.Search_bar}>
            <div className={css.Search_menu}>
             <section>
                <nav  className={css.first_box} >
                    <p>SOURCE</p>
                    <div className={css.input}>
                    <i style={{fontSize:"18px"}} className="fa-solid fa-location-dot"></i>
                    <input ref={to} type="text" placeholder='To'/>
                    </div>
                </nav>
                <i ref={icone} onClick={move} className="fa-solid fa-arrows-rotate" ></i>
             </section>
             {/* 2 */}
             <section>
               <nav style={{width:"90%"}}  className={css.first_box} >
                    <p>DESTINATION</p>
                    <div className={css.input}>
                    <i style={{fontSize:"18px"}} className="fa-solid fa-location-dot"></i>
                    <input ref={from} type="text" placeholder='From'/>
                    </div>
                </nav>
             </section>
             {/* 3 */}
             <section>

             <nav style={{width:"90%"}}  className={css.first_box} >
                    <p>DATE</p>
                    <div className={css.input}>
                    <input type="date"/>
                    </div>
                </nav>
             </section>
             {/* 4 */}
             <section>
             <nav style={{width:"90%"}}  className={css.first_box} >
                    <p>RETURN DATE</p>
                    <div className={css.input}>
                    <input type="date" />
                    </div>
                </nav>
             </section>
             <section>
                <h1>SEARCH</h1>
             </section>

            </div>
         </div>

        </>
    )
 }
// first block
const Search = () => {
    


  

  return ( 
    <>
     <div className={css.main}>

        <div className={css.image}>
            <h1>Take a bus to anywhere in the world</h1>
            
            </div>

        <div className={css.cads}>

            <div className={css.cards1}>
                <img src="https://st.redbus.in/Images/rdc/adv1.svg" alt="poster"/>
                <div className={css.text}>
                 <h1>Worldwide coverage</h1>
                 <p>Find affordable travel tickets across the world, all at one place</p>
                </div>
            </div>
            
            <div className={css.cards1}>
                <img src="https://st.redbus.in/Images/rdc/Anxiety-free%20travel.svg" alt="poster"/>
                <div className={css.text}>
                 <h1>Anxiety-free travel</h1>
                 <p className={css.test1}>We ensure your information is safe and your travel is hassle free, wherever you go</p>
                </div>
            </div>
            
            <div className={css.cards1}>
                <img src="https://st.redbus.in/Images/rdc/No%20hidden%20charges@3x%201.svg" alt="poster"/>
                <div className={css.text}>
                 <h1>No hidden charges</h1>
                 <p>Find the best deals online and guess what, refunds are simple!</p>
                </div>
            </div>
            

        </div>

         <Search_bar/>

     </div>
    </>
  )
}

export default Search
export {Search_bar};