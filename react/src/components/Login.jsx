import React, { useState } from 'react'
import { useStateContext } from '../contexts/Context'
import axiosClient from '../axios'
import { Navigate } from 'react-router-dom'

export default function Login() {
    const {setToken, userToken, showToast} = useStateContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSumbit = (e) => {
        e.preventDefault()
        axiosClient.post('/v1/auth/login', {
            username, 
            password
        }).then(({data}) => {
            setToken(data.token)
            showToast(data.message)
        }).catch((err) => {
           showToast(err.response.data.message, 'red')
        })
    }

    if(userToken) {
        return <Navigate to={'/home'}/>
    }

  return (
    <>
        <form onSubmit={onSumbit} method="post" className='grid w-[400px] h-[400px] gap-3 border-2 border-stone-300 px-12 py-12  font-semibold grid-col '>
            <h1 className='text-2xl place-self-center'>Login</h1>
            <div className="flex gap-2 flex-col">
                <label>Username</label>
                <input value={username} onInput={e => setUsername(e.target.value)} type="text" className='border-b-2 p-1 border-black'/>
            </div>
            <div className="flex gap-2 flex-col">
                <label>Password</label>
                <input value={password} onInput={e => setPassword(e.target.value)} type="text" className='border-b-2 p-1 border-black'/>
            </div>
            <button type='submit' className='bg-sky-400 p-1 rounded-md text-white' >  Submit  </button>
        </form>
    </>
  )
}
