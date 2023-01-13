import React, { useState } from 'react';
import css from './navbar.module.css';
import bus from './bus2.png';
import india from './india.png'
const Navbar = () => {
  const [show,set_show]=useState(false);
  return (
    <div className={css.main}>

      <div className={css.icone}>
        <img src={bus} alt="" />
      </div>

      <div className={css.list}>
          <ul>
            <li>Help</li>
            <li onClick={()=>set_show((p)=>!p)}>INDIA <i className="fa-solid fa-chevron-down"></i> 
               {
               show?<nav className={css.country}>

                 <div><i className="fa-solid fa-check"></i><p>Hindi</p> <img src={india} alt="" /> </div>
                 <div><i className="fa-solid fa-check"></i><p>English</p> <img src="https://www.redbus.com/images/US.webp" alt="" /></div>

                </nav>:null

                }
            </li>

            <li>INR</li>
            <li>Manage Booking <i className="fa-solid fa-chevron-down"></i></li>
            <li>Login</li>
          </ul>
      </div>

    </div>
  )
}

export default Navbar