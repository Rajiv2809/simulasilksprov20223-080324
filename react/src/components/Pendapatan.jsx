import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../contexts/Context';
import axiosClient from '../axios';

export default function Pendapatan() {
    const [loading, setLoadin]  = useState(false);
    const {pendapatans, setPendapatans, currentUser, showToast} = useStateContext();
    const {id} = useParams();
    useEffect(() => {
        axiosClient.get(`/v1/pendapatan`).then(({data}) => {
            setPendapatans(data)
            setLoadin(false);
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const onDelete = (id) => {
        axiosClient.delete(`/v1/pendapatan/${id}`).then(({data}) => {
            const newPendapatan = pendapatans.filter(item => item.IDpendapatan !== id)
            setPendapatans(newPendapatan)
            showToast(data.message)
        }).catch((err) => {
            showToast(err.response.data.message, 'red');
        })
    }

  return (
    <div className="content flex flex-col gap-2">

    <h1 className='text-4xl  font-semibold'>pendapatan</h1>
    <div className="div flex justify-end">
    <button className='px-4 bg-emerald-500 rounded-md text-white font-semibold   py-2'>
        <Link to='/dashboard/pendapatan/add'> Add Data +</Link>
    </button>

    </div>
    <table className='text-sm'>
        <thead>
            <tr className='bg-gray-300 border-b-2  border-black '>
                <th  className='px-6 py-2'>
                    ID PendapatanTenant
                </th>
                <th  className='px-6 py-2'>
                    ID tenant
                </th>
                <th  className='px-6 py-2'>
                    Total Pendapatan
                </th>
                <th  className='px-6 py-2'>
                    Tanggal
                </th>
                <th  className='px-6 py-2'>
                    Setorant Tenant
                </th>
                <th  className='px-6 py-2'>
                    Action
                </th>
            </tr>
        </thead>
        <tbody className='font-normal'>
            {!loading && pendapatans.length > 0 && (
                pendapatans.map(Pendapatan => (
                <tr key={Pendapatan.IDtenant}  className=' border-b-2  border-black '>
                    <th className='py-2'>{Pendapatan.IDpendapatan}</th>
                    <th className='py-2'>{Pendapatan.IDtenant}</th>
                    <th className='py-2'>{Pendapatan.totalPendapatan}</th>
                    <th className='py-2'>{Pendapatan.tanggal}</th>
                    <th className='py-2'>{Pendapatan.setoranTenant}</th>
                    <th className='py-2 flex  gap-2'>
                        <button className='py-2 px-4 bg-blue-400 rounded-md'>
                            <Link to={`/dashboard/Pendapatan/detail/${Pendapatan.IDpendapatan}`} >Detail</Link>
                        </button>
                        {currentUser.role == 'admin' && (
                            <button className='py-2 px-4 bg-orange-400 rounded-md'> 
                                <Link to={`/dashboard/pendapatan/edit/${Pendapatan.IDpendapatan}`}> Update </Link>
                            </button>
                        )}
                        {currentUser.role == 'admin' && (
                            <button onClick={e => onDelete(Pendapatan.IDpendapatan)} className='py-2 px-4 bg-rose-500 rounded-md' > 
                                Remove 
                            </button>
                        )}


                    </th>
                    
                </tr>
                ))
            ) }



        </tbody>
    </table>




</div>
  )
}
