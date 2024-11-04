import React from 'react';
import User from '../assets/Images/user.jpg';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <div className='Info'>
                <img src= {User} alt=''/>
                <h1>Name : Aniket</h1><br/><br/>
                <h1>User Email :    Aniket@gmail.com</h1>
            </div>
        </>
    )
}

export default Profile
