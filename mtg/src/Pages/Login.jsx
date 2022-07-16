
import   "../Style/userlogin.css"
import {Link} from "react-router-dom"
import React, { useState } from "react";



// function MyControlledInput() {
//   const [value, setValue] = useState("");

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <>
//       <div>Input value: {value}</div>
//       <input placeholder="Type a value" value={value} onChange={onChange} />
//     </>
//   );
// }


  

function Login (){
  
  const [userData, setUserData] = useState({
    email: '',
    psw: '',
    'psw-repeat':'',
})

async function  handleClick (event){
  event.preventDefault ()
  console.log(userData)
  const response= await fetch ('/users/signup', { 
    method: 'POST',
    mode: 'cors', // no-cors,cors, same-origin
    cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include,same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, follow, error
    referrerPolicy: 'no-referrer', // no-referrer,no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-
    body: JSON.stringify(userData) 
  } 


  )
}

function handleInput(event) {
    setUserData(Object.assign({}, userData, {[event.target.name]: event.target.value}))
}
  
  
  return (

    
    
    
    <form style= {{"border": "1px solid #ccc"}}>
    <div className="container">
        {/* <link rel="stylesheet" href="Style/userlogin.css"/> */}
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr/>
  
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required onChange={handleInput}/>
  
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required onChange={handleInput}/>
  
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={handleInput}/>
  
      
        <p>By creating an account you agree to our 
        <span style= {{"color" : "dodgerblue"}}>Terms & Privacy. </span></p>
  
      <div className="clearfix">
        {/* <button type="button"  className="cancelbtn"  href={Link} >Cancel</button> */}
        <button type="submit" className="signupbtn" onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  </form>  
  


  )

}
 
export default Login;