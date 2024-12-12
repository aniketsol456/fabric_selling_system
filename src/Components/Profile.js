import React, { useContext, useEffect } from 'react';
import User from '../assets/Images/user.jpg';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import axios from "axios";

const Profile = () => {

    const { logindata, setLogindata } = useContext(LoginContext);

    const getCookie = (name) => {
        const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1')}=([^;]*)`));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    const history = useNavigate();

    const profilevalid = async () => {
        let token = getCookie("usercookie");

        try {
            const res = await axios.get("/validuser", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                }
            });

            const data = res.data; 

            if (data.status === 401 || !data) {
                history("*");
            } else {
                console.log("User verified");
                setLogindata(data); 
                history("/profile");
            }
        } catch (error) {
            console.error("Error verifying user:", error);
            history("*"); // Redirect to login or other page in case of error
        }
    };

    useEffect(() => {
        profilevalid();
    }, []);

    return (
        <>
            <div className='Info'>
                <img src={User} alt='' />
                <h1>Name :  {logindata ? logindata.ValidUserOne.fname : ""}</h1><br /><br />
                <h1>User Email : {logindata ? logindata.ValidUserOne.email : ""}</h1>
            </div>
        </>
    );
}

export default Profile;
