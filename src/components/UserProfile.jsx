import React from 'react';

import './styles/app.css';
import  loguser from './img/profile.png';

const UserProfile = () => (
    <div className='UserProfile'>
        <div className='User'>
            <div className='image'>
                <img src={loguser} alt='profile'/>
            </div>
            <div className='name'>Javier <strong className='arrow'>↓</strong>
            </div>
        </div>
    </div>
)

export default UserProfile;
