import React from 'react'
import { useStateContext } from '../contexts/Context'
import { Navigate } from 'react-router-dom';

export default function Home() {
    const {userToken} = useStateContext();

    if(!userToken) {
        return <Navigate to='/login'/>
    }

  return (
    <>
        <h1>HOME</h1>
    
    
    
    </>
  )
}
