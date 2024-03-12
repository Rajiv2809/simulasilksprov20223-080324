import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../axios'


export default function DetailPenjualan() {
    const [penjualan, setPenjualan] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axiosClient.get(`/v1/penjualan/${id}`).then(({data}) => {
            setPenjualan(data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
  return (
     
    <div className="container flex flex-col justify-center">
    <h1 className='text-4xl uppercase '>Detail Penjualan Barang </h1>
    <div className="div px-28 mt-12  flex flex-col justify-center">

      <table >
        <tbody className='border-2'>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>IDTrans</th>
            <th className='py-2 px-4'>{penjualan.IDTrans}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>ID Produk</th>
            <th className='py-2 px-4'>{penjualan.IDproduk}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Harga jual</th>
            <th className='py-2 px-4'>{penjualan.hargajual}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Qty</th>
            <th className='py-2 px-4'>{penjualan.qty}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Total</th>
            <th className='py-2 px-4'>{penjualan.total}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Dibayar</th>
            <th className='py-2 px-4'>{penjualan.dibayar}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Kembali</th>
            <th className='py-2 px-4'>{penjualan.kembali}</th>
          </tr>
          <tr className='border-t-2 ' >
            <th className='py-2 px-4'>Tanggal</th>
            <th className='py-2 px-4'>{penjualan.tanggal}</th>
          </tr>

        </tbody>

      </table>
    </div>
    <div>
      <button className='px-4 py-2 bg-rose-500 text-white font-semibold rounded-md'>
        <Link to='/dashboard/Penjualan'>
          Back
        </Link>
      </button>
    </div>

    




  </div>
  )
}
