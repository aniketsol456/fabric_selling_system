import React, { useContext, useEffect } from 'react';
import User from '../assets/Images/user.jpg';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';

const Profile = () => {

    const  {logindata,setLogindata} = useContext(LoginContext);
    // console.log(logindata.ValidUserOne.email);

    const history = useNavigate();

    const profilevalid = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await res.json();
        if (data.status == 401 || !data) {
            history("*");
        }
        else {
            console.log("user verify");
            setLogindata(data);
            history("/profile");
        }
    }

    useEffect(() => {
        profilevalid();
    }, [])

    return (
        <>
            <div className='Info'>
                <img src={User} alt='' />
                <h1>Name :  {logindata ? logindata.ValidUserOne.fname: ""}</h1><br /><br />
                <h1>User Email : {logindata ? logindata.ValidUserOne.email: ""}</h1>
            </div>
        </>
    )
}

export default Profile
