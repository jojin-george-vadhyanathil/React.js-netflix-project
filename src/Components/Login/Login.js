import React,{useState} from 'react'
import './Login.css'
function Login() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
   
    
    return (
        
        <div className="Login">
        <div className="outer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" className="image" />
            
           <div className="container">
               <h1 className="head">Signup</h1>
               <form action="" className="form">
                   <input value={email} onChange={ (e)=>setEmail(e.target.value)} type="email" className="email" placeholder="Enter your Email...." />
                   <br/>
                   <input value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" className="password" placeholder="Enter your password...." />
               </form>
               <button  className="btn">Signup</button>
            </div> 
        </div>
    </div>
    )
}

export default Login
