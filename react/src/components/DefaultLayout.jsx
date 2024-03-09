import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import Toast from './Toast';
import { useStateContext } from '../contexts/Context';
import axiosClient from '../axios';

export default function DefaultLayout() {
    const { currentUser,showToast, userToken , setCurrentUser, setToken} = useStateContext();

    useEffect(() => {
        axiosClient.get('/v1/me').then(({data}) => {
            setCurrentUser(data);
        }).catch((err) => {
            console.log(err)
        })
    },[])


    const logout = (e) => {
        e.preventDefault();
        axiosClient.get('/v1/auth/logout').then(({data}) => {
            showToast(data.message)
            setToken(null);
        }).catch((err) => {
            showToast(err.response.data.message, 'red')
        })
    }


    if (!userToken) {
        return <Navigate to='/login'/>
    }

    return (
    <>
        <nav className=' flex justify-around bg-sky-400 text-white font-semibold py-2'>
            <div className="left flex gap-4">
                <Link to='/home'>Home</Link>
                <Link to='/dashboard'>Kelola</Link>
            </div>
            <div className="right">
                <button onClick={logout}>Logout</button>
            </div>
        </nav>
        <div className="div">
            <Outlet/>
            <Toast/>

        </div>
    </>
    )
}
