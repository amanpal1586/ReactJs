import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Protected({children, authentication = true}) {

const navigate = useNavigate()
const [loder, setLoder] = useState(true)
const authStatus = useSelector(state => state.auth.status)

useEffect(() => {

    // todo
    if(authentication && authStatus !== authentication){
        navigate('/login')
    }else if(!authentication && authStatus !== authentication){
        navigate('/')
    }
    setLoder(false)
},[authStatus, navigate, authentication])

  return loder ? <h1>Loading...</h1> : <>{children}</>
}

