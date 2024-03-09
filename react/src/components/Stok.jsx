import React, { useEffect, useState } from 'react'
import axiosClient from '../axios'
import { useStateContext } from '../contexts/Context'
import { Link } from 'react-router-dom';


export default function Stok() {
    const { stoks, currentUser , setStoks, showToast} = useStateContext();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axiosClient.get('/v1/stok').then(({data}) => {
            setStoks(data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const onDelete = (id) => {
   
        axiosClient.delete(`/v1/stok/${id}`).then(({data})=>{
            const newStok = stoks.filter(item => item.IDproduk !== id );
            setStoks(newStok)
            showToast(data.message)
        }).catch((err) => {
            console.log(err.response.data.message);
        })
    }




  return (
    <>
    <div className="content flex flex-col gap-2">

        <h1 className='text-4xl  font-semibold'>Stok</h1>
        <div className="div flex justify-end">
        <button className='px-4 bg-emerald-500 rounded-md text-white font-semibold   py-2'>
            <Link to='/dashboard/stok/add'> Add Data +</Link>
        </button>

        </div>
        <table className='text-sm'>
            <thead>
                <tr className='bg-gray-300 border-b-2  border-black '>
                    <th  className='px-6 py-2'>
                        ID produk
                    </th>
                    <th  className='px-6 py-2'>
                        Nama barang
                    </th>
                    <th  className='px-6 py-2'>
                        Harga jual
                    </th>
                    <th  className='px-6 py-2'>
                        Harga  beli
                    </th>
                    <th  className='px-6 py-2'>
                        stok
                    </th>
                    <th  className='px-6 py-2'>
                        kategori
                    </th>
                    <th  className='px-6 py-2'>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className='font-normal'>
                {!loading && stoks.length > 0 && (
                    stoks.map(stok => (
                    <tr key={stok.IDproduk}  className=' border-b-2  border-black '>
                        <th className='py-2'>{stok.IDproduk}</th>
                        <th className='py-2'>{stok.nama}</th>
                        <th className='py-2'>{stok.hargajual}</th>
                        <th className='py-2'>{stok.hargabeli}</th>
                        <th className='py-2'>{stok.stok}</th>
                        <th className='py-2'>{stok.kategori}</th>
                        <th className='py-2 flex gap-2'>
                            <button className='py-2 px-4 bg-blue-400 rounded-md'>
                                <Link to={`/dashboard/stok/detail/${stok.IDproduk}`} >Detail</Link>
                            </button>
                            {currentUser.role == 'admin' && (
                                <button className='py-2 px-4 bg-orange-400 rounded-md'> 
                                    <Link to={`/dashboard/stok/edit/${stok.IDproduk}`}> Update </Link>
                                </button>
                            )}
                            {currentUser.role == 'admin' && (
                                <button onClick={e => onDelete(stok.IDproduk)} className='py-2 px-4 bg-rose-500 rounded-md' > 
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
    </>
  )
}
