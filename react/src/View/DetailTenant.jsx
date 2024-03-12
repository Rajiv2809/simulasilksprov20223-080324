import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../axios';

export default function DetailTenant() {
    const [tenant, setTenant] = useState({});
    const {id} = useParams()

    useEffect(() => {
        axiosClient.get(`/v1/tenant/${id}`).then(({data})=> {
            setTenant(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <div className="container flex flex-col justify-center">
    <h1 className='text-4xl uppercase '>Detail Tenant  </h1>
    <div className="div px-28 mt-12  flex flex-col justify-center">

      <table >
        <tbody className='border-2'>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>ID tenant</th>
            <th className='py-2 px-4'>{tenant.IDtenant}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Nama tenant</th>
            <th className='py-2 px-4'>{tenant.namaTenant}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Detail</th>
            <th className='py-2 px-4'>{tenant.detail}</th>
          </tr>
     
          

        </tbody>

      </table>
    </div>
    <div>
      <button className='px-4 py-2 bg-rose-500 text-white font-semibold rounded-md'>
        <Link to='/dashboard/tenant'>
          Back
        </Link>
      </button>
    </div>

    




  </div>
  )
}
