import React, { useState } from 'react';
import css from './navbar.module.css';
import bus from './bus2.png';
import india from './india.png'
const Navbar = () => {
  const [show,set_show]=useState(false);
  const [show1,set_show1]=useState(false);
  const [show2,set_show2]=useState(false);
  const curancy=["USD", "EUR", "VND", "BGN", "MYR", "INR", "PEN", "COP", "GBP", "SGD", "THB",  "AUD", "BRL", "IDR", "CLP"]

  return (
    <div className={css.main}>

      <div className={css.icone}>
        <img src={bus} alt="" />
      </div>

      <div className={css.list}>
          <ul>
            <li>Help</li>
            <li onClick={()=>{
              set_show((p)=>!p)
              if(show1)
            {
              set_show1((p)=>!p) 
              
              
            }
            if(show2)
            {
              set_show2((p)=>!p) 
            }
            }
          }
             >INDIA { !show?<i className="fa-solid fa-caret-down"></i> :<i className="fa-solid fa-caret-up"></i>}
               {
               show?<nav className={css.country}>

                 <div><i className="fa-solid fa-check"></i><p>Hindi</p> <img src={india} alt="" /> </div>
                 <div><i className="fa-solid fa-check"></i><p>English</p> <img src="https://www.redbus.com/images/US.webp" alt="" /></div>

                </nav>:null

                }
            </li>





            <li onClick={()=>{
              set_show2((p)=>!p)
              if(show1)
              {
                set_show1((p)=>!p) 
               
                
              }
              if(show)
            {
              set_show((p)=>!p) 
            }
             
            }
          }
          

          >INR { !show2?<i className="fa-solid fa-caret-down"></i> :<i className="fa-solid fa-caret-up"></i>}
            {
               show2?<nav className={css.country3}>

                 {
                  curancy.map((e,i)=>{
                    return(
                      <div><p>{e}</p></div>
                    )
                  })
                 }
                 
                </nav>:null

                }
            
            </li>




            <li onClick={()=>{
              set_show1((p)=>!p)

            if(show)
            {
              set_show((p)=>!p) 
              
              
            }
            if(show2)
            {
              set_show2((p)=>!p) 
            }
              }} 

             
               >Manage Booking {!show1?<i className="fa-solid fa-caret-down"></i> :<i className="fa-solid fa-caret-up"></i>}
                { show1?
                  <nav className={css.country1}>

                 <div><p>Cancle</p></div>
                 <div><p>Show my ticket</p></div>
                 <div><p>Email</p></div>

                </nav>:null
                }
            </li>
            <li>Login</li>
          </ul>
      </div>

    </div>
  )
}

export default Navbar