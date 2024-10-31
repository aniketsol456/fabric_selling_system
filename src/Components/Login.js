import React, { useState } from 'react'
import './Login_Register.css';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [passShow,setpassShow] = useState(false);
  const [inpval, setinpval] = useState({
    email: "",
    password: ""
  })

  const setval = (e) => {
    const { name, value } = e.target;
    setinpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })
  }

  const loginUser =(e)=>{
    e.preventDefault();

    const {email, password} = inpval;

    if(email ===""){
      alert("Please Enter Your Email");
    }
    else if(!email.includes("@")){
      alert("Enter a valid Email");
    }
    else if(password === ""){
      alert("Enter a Password");
    }
    else if(password.length<6){
      alert("Password must be 6 char")
    }
    else{
      console.log("User Login sucessfully");
    }

  }


  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Welcome Back,Log In</h1>
            <p>Hi,we are you glad you are back. Please Login.</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type='email' onChange={setval} value={inpval.email} name='email' id='email' placeholder='Enter your email address' />
            </div>
            <div className='form_input'>
              <label htmlFor='password'>Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} onChange={setval} value={inpval.password} name='password' id='password' placeholder='Enter your password' />
                <div className='showpass' onClick={()=>setpassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={loginUser}>Login</button>
            <p>you don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login

