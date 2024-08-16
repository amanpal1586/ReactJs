import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <div className='text-3xl p-4 m-1 bg-slate-400'>User:{id}</div>
    )
}

export default User
