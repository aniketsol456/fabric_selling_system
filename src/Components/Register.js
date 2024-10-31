import React, { useState } from 'react';
import './Login_Register.css';
import { NavLink } from 'react-router-dom';

const Register = () => {

  const [passShow, setpassShow] = useState(false);
  const [cpassShow, setcpassShow] = useState(false);

  const [inpval, setinpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: ""
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

  const addUserdata = (e) => {
    e.preventDefault();

    const {fname, email, password, cpassword} = inpval;
    if(fname === ""){
      alert("Please Enter Your Name");
    }
    else if(email ===""){
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
    else if(cpassword === ""){
      alert("Enter a Confirm password");
    }
    else if(cpassword.length<6){
      alert("Confirm Password must be 6 char")
    }
    else if(password!==cpassword){
      alert("Password and Confirm Password must be same")
    }
    else{
      console.log("User registration sucessfully");
    }
  }

  return (
    <>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>We are glad that you will be using Fabrico Mart to manage<br /> your tasks! We hope that you will get like it.</p>
          </div>
          <form>
            <div className='form_input'>
              <label htmlFor='fname'>Name</label>
              <input type='text' onChange={setval} value={inpval.fname} name='fname' id='fname' placeholder='Enter your Name' />
            </div>
            <div className='form_input'>
              <label htmlFor='email'>Email</label>
              <input type='email' onChange={setval} value={inpval.email} name='email' id='email' placeholder='Enter your email address' />
            </div>
            <div className='form_input'>
              <label htmlFor='password'>Password</label>
              <div className='two'>
                <input type={!passShow ? "password" : "text"} onChange={setval} value={inpval.password} name='password' id='password' placeholder='Enter your password' />
                <div className='showpass' onClick={() => setpassShow(!passShow)}>
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className='form_input'>
              <label htmlFor='password'>Confirm Password</label>
              <div className='two'>
                <input type={!cpassShow ? "password" : "text"} onChange={setval} value={inpval.cpassword} name='cpassword' id='cpassword' placeholder='Enter your confirm password' />
                <div className='showpass' onClick={() => setcpassShow(!cpassShow)}>
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={addUserdata}>Sign Up</button>
            <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register
