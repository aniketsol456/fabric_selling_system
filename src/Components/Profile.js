import React from 'react';
import User from '../assets/Images/user.jpg';

const Profile = () => {
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <img src= {User} style={{width : "200px",marginTop: 20}} alt=''/>
                <h1>User Email : Aniket@gmail.com</h1>
            </div>
        </>
    )
}

export default Profile
