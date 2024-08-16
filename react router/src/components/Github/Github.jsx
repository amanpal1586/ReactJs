import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/amanpal1586")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)

        })



    },[])
    return (
        <>
        <div className='text-3xl p-4 m-1 bg-slate-400'>Github Follower:{data.followers}</div>
        <img src={data.avatar_url} alt='git picture' width='300'
        className='text-center' ></img>
        </>
    )
}

export default Github

// export const GithubInfoLoder = async () => {
//   const response =  await fetch("https://api.github.com/users/amanpal1586")
//   return response.json()

// }
