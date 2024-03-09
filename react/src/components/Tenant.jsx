import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/Context'
import { Link } from 'react-router-dom';
import axiosClient from '../axios';

export default function Tenant() {
    const {tenants, setTenants, showToast, currentUser} = useStateContext();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axiosClient.get('/v1/tenant').then(({data}) => {
            setTenants(data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    },[])

    const onDelete = (id) => {
        axiosClient.delete(`/v1/tenant/${id}`).then(({data})=>{
            const newTenant = tenants.filter(item => item.IDtenant !== id);
            setTenants(newTenant)
            showToast(data.message)
        }).catch((err) => {
            showToast(err.response.data.message, 'red');
        })
    }

  return (
    <div className="content flex flex-col gap-2">

        <h1 className='text-4xl  font-semibold'>tenant</h1>
        <div className="div flex justify-end">
        <button className='px-4 bg-emerald-500 rounded-md text-white font-semibold   py-2'>
            <Link to='/dashboard/tenant/add'> Add Data +</Link>
        </button>

        </div>
        <table className='text-sm'>
            <thead>
                <tr className='bg-gray-300 border-b-2  border-black '>
                    <th  className='px-6 py-2'>
                        ID Tenant
                    </th>
                    <th  className='px-6 py-2'>
                        Nama Tenant
                    </th>
                    <th  className='px-6 py-2'>
                        Detail
                    </th>
                    <th  className='px-6 py-2'>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className='font-normal'>
                {!loading && tenants.length > 0 && (
                    tenants.map(tenant => (
                    <tr key={tenant.IDtenant}  className=' border-b-2  border-black '>
                        <th className='py-2'>{tenant.IDtenant}</th>
                        <th className='py-2'>{tenant.namaTenant}</th>
                        <th className='py-2'>{tenant.detail}</th>
                        <th className='py-2 flex  gap-2'>
                            <button className='py-2 px-4 bg-blue-400 rounded-md'>
                                <Link to={`/dashboard/tenant/detail/${tenant.IDtenant}`} >Detail</Link>
                            </button>
                            {currentUser.role == 'admin' && (
                                <button className='py-2 px-4 bg-orange-400 rounded-md'> 
                                    <Link to={`/dashboard/tenant/edit/${tenant.IDtenant}`}> Update </Link>
                                </button>
                            )}
                            {currentUser.role == 'admin' && (
                                <button onClick={e => onDelete(tenant.IDtenant)} className='py-2 px-4 bg-rose-500 rounded-md' > 
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
