import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>  </div>

    return <div>Welcome, {user.userName} </div>
}

export default Profile
