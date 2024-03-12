import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../axios';

export default function DetailStok() {
  const [stok , setStok] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axiosClient.get(`/v1/stok/${id}`).then(({data}) => {
      setStok(data)
    
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <>
      
      <div className="container flex flex-col justify-center">
        <h1 className='text-4xl uppercase '>Detail Stok Barang </h1>
        <div className="div px-28 mt-12  flex flex-col justify-center">

          <table >
            <tbody className='border-2'>
              <tr className='border-t-2 ' >
                <th className='py-2 px-4'>ID produk</th>
                <th className='py-2 px-4'>{stok.IDproduk}</th>
              </tr>
              <tr className='border-t-2 ' >
                <th className='py-2 px-4'>Nama barang</th>
                <th className='py-2 px-4'>{stok.nama}</th>
              </tr>
              <tr className='border-t-2 ' >
                <th className='py-2 px-4'>Harga beli</th>
                <th className='py-2 px-4'>{stok.hargabeli}</th>
              </tr>
              <tr className='border-t-2 ' >
                <th className='py-2 px-4'>hargajual</th>
                <th className='py-2 px-4'>{stok.hargajual}</th>
              </tr>
              <tr className='border-t-2 ' >
                <th className='py-2 px-4'>kategori</th>
                <th className='py-2 px-4'>{stok.kategori}</th>
              </tr>

            </tbody>

          </table>
        </div>
        <div>
          <button className='px-4 py-2 bg-rose-500 text-white font-semibold rounded-md'>
            <Link to='/dashboard/stok'>
              Back
            </Link>
          </button>
        </div>

        




      </div>
    
    
    
    </>
  )
}
