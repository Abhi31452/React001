import React, { useContext } from 'react'
import { userData } from './UserContext';

const UserProfile = () => {
  
    const {username} = useContext(userData);

    return (
    <div>
        <h1> Name : {username}</h1>      
    </div>
  )
}

export default UserProfile
