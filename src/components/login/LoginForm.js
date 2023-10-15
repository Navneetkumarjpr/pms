import { useState } from "react"
import React from 'react'
import validator from 'validator'
import "./loginform.css"
import { Link } from "react-router-dom"

const loginitialstate={
  email:'',
  password:''
}
const signinitialstate={
  name:'',
  email:'',
  password:''
}
const LoginForm = () => {
    const [login, setLogin] = useState({
      email:"",
      password:""
    })
     
    const [emailerror, setEmailerror] = useState(false)
    const [emailerrorsign, setEmailerrorsign] = useState(false)
    const [nameerror, setNameerror] = useState(false)

    const [passworderror, setPassworderror] = useState("")
    const [signup, setSignup] = useState({
      name:"",
      email:"",
      password:""
    })
  
    const values=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
        // if(!login.email.includes("@") && !login.email.includes(".")){
        //       setEmailerror(false)
        // }else{
        //       setEmailerror(true);
        // }

        if(validator.isEmail(login.email)){
          setEmailerror(true)
        }else{
          setEmailerror(false)
        }
        // regular expressions to validate password
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if (!login.password.match(lowerCase)) {
          setPassworderror("Password should contains lowercase letters!");
        } else if (!login.password.match(upperCase)) {
          setPassworderror("Password should contain uppercase letters!");
        } else if (!login.password.match(numbers)) {
          setPassworderror("Password should contains numbers also!");
        } else if (login.password.length < 10) {
          setPassworderror("Password length should be more than 10.");
        } else {
          setPassworderror(""); 
        }

        console.log(login)
    }
    const signupValues=(e)=>{
      setSignup({...signup,[e.target.name]:e.target.value});
      // if(!login.email.includes("@") && !login.email.includes(".")){
      //       setEmailerror(false)
      // }else{
      //       setEmailerror(true);
      // }

      if(validator.isEmail(signup.email)){
        setEmailerrorsign(true)
      }else{
        setEmailerrorsign(false)
      }
      // regular expressions to validate password
      var lowerCase = /[a-z]/g;
      var upperCase = /[A-Z]/g;
      var numbers = /[0-9]/g;
      if (!signup.password.match(lowerCase)) {
        setPassworderror("Password should contains lowercase letters!");
      } else if (!signup.password.match(upperCase)) {
        setPassworderror("Password should contain uppercase letters!");
      } else if (!signup.password.match(numbers)) {
        setPassworderror("Password should contains numbers also!");
      } else if (signup.password.length < 10) {
        setPassworderror("Password length should be more than 10.");
      } else {
        setPassworderror(""); 
      }

      if(signup.name.length<=4){
        setNameerror(true)  
      }else{
        setNameerror(false);
      }
      console.log(signup)
  }

  const [viewlog, setViewlog] = useState(true)
  const [viewsign, setViewsign] = useState(false)

  const changeViewlog=()=>{
    console.log("click log")
    setLogin(loginitialstate)
    if(viewlog==false){
      setViewlog(true);
      setViewsign(false);
      
    }
  }
 const changeViewsign=()=>{
  setSignup(signinitialstate)
    if(viewsign==false){
      setViewlog(false);
      setViewsign(true);
    }
  }
  return (
    <div className={`loginsignupform`}>
        <div className='upperbuttonhead'>
          <button className={`upperloginbutton  ${viewlog ?"colorbutton":"disablecolorbutton"}`} onClick={changeViewlog}>Log In</button>
          <button className={`uppersignupbutton ${viewsign ?"colorbutton":"disablecolorbutton"}`} onClick={changeViewsign}>Sign Up</button>
        </div>
        <div className={`loginform ${viewlog ?"logvisible":"lognotvisible"}`}>
          <input type='email' name="email" value={login.email} onChange={(e)=>values(e)} placeholder='Enter Email' required/>
          {!emailerror && <p>Error in email</p>}
          <input type='password' name="password" value={login.password} onChange={(e)=>values(e)}  placeholder='Enter Password' required/>
          {passworderror.length>=1 && <p>{passworderror}</p>}
          {/* <button className='loginbutton'>LogIn</button> */}
          <Link to='/' className='loginbutton'>LogIn</Link>
        </div>
        <div className={`signupform  ${viewsign ?"logvisible":"lognotvisible"}`}>
          <input type='text' name="name" value={signup.name} onChange={(e)=>signupValues(e)} placeholder='Enter Name' required/>
          {nameerror && <p>Name length is smaller</p>}
          <input type='email' name="email" value={signup.email} onChange={(e)=>signupValues(e)} placeholder='Enter Email' required/>
          {!emailerrorsign && <p>Error in email</p>}
          <input type='password' name="password" value={signup.password} onChange={(e)=>signupValues(e)} placeholder='Enter Password' required/>
          {passworderror.length>=1 && <p>{passworderror}</p>}
          <button className='loginbutton'>SignUp</button>
        </div>
    </div>
  )
}

export default LoginForm