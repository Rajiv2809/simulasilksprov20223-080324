import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Toast from './Toast';

export default function Dashboard() {
  return (
    <div className='flex flex-row'>
        <div className="side w-[250px] h-screen flex flex-col bg-gray-300">
            <Link to='/dashboard/stok' className=' justify-center flex py-2 m-2  font-semibold bg-stone-400 ' >Stok</Link>
            <Link to='/dashboard/penjualan' className=' justify-center flex py-2 m-2  font-semibold bg-stone-400 ' >Penjualan</Link>
            <Link to='/dashboard/tenant' className=' justify-center flex py-2 m-2  font-semibold bg-stone-400 ' >Tenant</Link>
            <Link to='/dashboard/pendapatan' className=' justify-center flex py-2 m-2  font-semibold bg-stone-400 ' >Pendapatan</Link>


        </div>
    <div className="div p-40 w-screen">
        <Outlet/>
        <Toast/>
    </div>
    </div>
  )
}
