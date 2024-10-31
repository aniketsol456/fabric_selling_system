import React,{useState} from 'react';
import './Login_Register.css';
import { NavLink } from 'react-router-dom';

const Register = () => {
  
    const [passShow,setpassShow] = useState(false);
    const [cpassShow,setcpassShow] = useState(false);

    return (
      <>
        <section>
          <div className='form_data'>
            <div className='form_heading'>
              <h1>Sign Up</h1>
              <p style={{textAlign : "center"}}>We are glad that you will be using Fabrico Mart to manage<br/> your tasks! We hope that you will get like it.</p>
            </div>
            <form>
            <div className='form_input'>
                <label htmlFor='fname'>Name</label>
                <input type='text' name='fname' id='fname' placeholder='Enter your Name' />
              </div>  
              <div className='form_input'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' placeholder='Enter your email address' />
              </div>
              <div className='form_input'>
                <label htmlFor='password'>Password</label>
                <div className='two'>
                  <input type={!passShow ? "password" : "text"} name='password' id='password' placeholder='Enter your password' />
                  <div className='showpass' onClick={()=>setpassShow(!passShow)}>
                    {!passShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <div className='form_input'>
                <label htmlFor='password'>Confirm Password</label>
                <div className='two'>
                  <input type={!cpassShow ? "password" : "text"} name='cpassword' id='cpassword' placeholder='Enter your confirm password' />
                  <div className='showpass' onClick={()=>setcpassShow(!cpassShow)}>
                    {!cpassShow ? "Show" : "Hide"}
                  </div>
                </div>
              </div>
              <button className='btn'>Sign Up</button>
              <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
            </form>
          </div>
        </section>
      </>
    )
}

export default Register
