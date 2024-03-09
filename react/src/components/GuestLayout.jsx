import React from 'react'
import { Outlet } from 'react-router-dom'
import Toast from './Toast'
export default function GuestLayout() {
  return (
    <div  className="flex w-screen  justify-center my-56 ">
        <Outlet/>
        <Toast/>
    </div>
  )
}
