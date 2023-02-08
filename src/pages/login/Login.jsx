import React, { useState } from 'react'
import css from './login.module.css'
const Login = () => {
    const [change, set_change] = useState(true);
    const [ex,set_ex]=useState(true);

    

    
    

    return (
        <>

            <div className={css.main}>

          {   ex?
                <div className={css.card}>
                   
                    <h1>Log in</h1>
                    <input type={"email"} placeholder='Email'/>
                    <input  maxLength="16" onDoubleClick={() => set_change((p) => !p)} type={change ? "password" : "text"} placeholder='Password' />
                    <div><p>Log in</p></div>
                    <p onClick={()=>set_ex((p)=>!p)}>Or,Sing up</p>
                </div>:
                <div className={css.card}>
                <h1>Sing up</h1>
                <input type={"email"} placeholder='Email'/>
                <input maxLength="16" onDoubleClick={() => set_change((p) => !p)} type={change ? "password" : "text"} placeholder='Password' />
                <div><p>Sing up</p></div>
                <p onClick={()=>set_ex((p)=>!p)}>Or,Log in</p>
            </div>
        }


            </div>
        </>
    )
}

export default Login