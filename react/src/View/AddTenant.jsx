import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axios';
import { useStateContext } from '../contexts/Context';

export default function AddTenant() {
    const {showToast} = useStateContext();
    const [namaTenant , setNamaTenant] = useState('');
    const [detail, setDetail] = useState('');
    const [tenant , setTenant] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()
    useEffect(() => {
        if(id){
            axiosClient.get( `/api/tenants/${id}`).then(({data}) => {
                setDetail(data.detail)
                setNamaTenant(data.namatenant)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])
const onSubmit = (e) => {
    if(id){
        e.preventDefault()
        axiosClient.post(`/v1/tenant/${id}`, {
            namaTenant,
            detail
        }).then(({data}) => {
            showToast(data.message)
            navigate('/dashboard/tenant')
        }).catch((err)=> {
            showToast(err.response.data.message, "red");
        })
    }
    else {
        e.preventDefault()
        axiosClient.post('/v1/tenant',{
            namaTenant,
            detail
        }).then(({data}) => {
            showToast(data.message)
            navigate('/dashboard/tenant')
        }).catch((err)=> {
            showToast(err.response.data.message, "red");
        })
    }

}

  return (
    <>
         <form onSubmit={onSubmit}  className='grid grid-cols-2 gap-4 p-12' method='post'>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">Nama Tenant</label>
            <input value={namaTenant} onInput={e => setNamaTenant(e.target.value)}  type="text" className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">Detail </label>
            <input value={detail} onInput={e => setDetail(e.target.value)} type='text' className='border-2 border-stone-400 p-1 '/>
        </div> 
      
        <div className="dasda flex gap-4">
          <button className='px-4 py-2 rounded-md bg-emerald-500 text-white font-bold' type='submit' > Tambah </button>
          <button className='px-4 py-2 rounded-md bg-rose-500 text-white font-bold'>
            <Link to='/dashboard/stok'>Kembali</Link>
          </button>
        </div>

      </form>
    </>
  )
}
