import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../axios';



export default function DetailPendapatan() {
    const [pendapatan, setPendapatan] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axiosClient.get(`/v1/pendapatan/${id}`).then(({data}) => {
            setPendapatan(data)
        }).catch((err) => {
            console.log(err)
        })
    },[])


  return (<div className="container flex flex-col justify-center">
  <h1 className='text-4xl uppercase '>Detail pendapatan Tenant </h1>
  <div className="div px-28 mt-12  flex flex-col justify-center">

    <table >
      <tbody className='border-2'>
        <tr className='border-t-2 ' >
          <th className='py-2 px-4'>ID Pendapatan</th>
          <th className='py-2 px-4'>{pendapatan.IDpendapatan}</th>
        </tr>
        <tr className='border-t-2 ' >
          <th className='py-2 px-4'>ID Tenant</th>
          <th className='py-2 px-4'>{pendapatan.IDtenant}</th>
        </tr>
        <tr className='border-t-2 ' >
          <th className='py-2 px-4'>Total pendapatan</th>
          <th className='py-2 px-4'>{pendapatan.totalPendapatan}</th>
        </tr>
        <tr className='border-t-2 ' >
          <th className='py-2 px-4'>Setorant tenant</th>
          <th className='py-2 px-4'>{pendapatan.setoranTenant}</th>
        </tr>
        <tr className='border-t-2 ' >
          <th className='py-2 px-4'>Tanggal</th>
          <th className='py-2 px-4'>{pendapatan.tanggal}</th>
        </tr>


      </tbody>

    </table>
  </div>
  <div>
    <button className='px-4 py-2 bg-rose-500 text-white font-semibold rounded-md'>
      <Link to='/dashboard/pendapatan'>
        Back
      </Link>
    </button>
  </div>

  




</div>
  )
}
