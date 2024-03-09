import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../contexts/Context'
import { useState } from 'react';
import axiosClient from '../axios';


export default function AddStok() {
  const { showToast } = useStateContext();
  const [nama, setNama] = useState();
  const [hargajual, setHargajual] = useState();
  const [hargabeli, setHargabeli] = useState();
  const [stok, setStok ] = useState();
  const [kategori, setKategori] = useState();
  const {id} = useParams();

  useEffect(() => {
    if(id){
      axiosClient.get(`/v1/stok/${id}`).then(({data}) => {
        setHargabeli(data.hargabeli)
        setNama(data.nama);
        setHargajual(data.hargajual);
        setStok(data.stok);
        setKategori(data.kategori);
      }).catch((err) => {
        console.log(err)
      })
    }
  },[id])
  const onSubmit = (e) => {
    if(id){
      e.preventDefault()
      axiosClient.post(`/v1/stok/$id`,{
        nama,
        hargabeli,
        hargajual,
        stok,
        kategori
      }).then(({data}) => {
        showToast(data.message)

      }).catch((err) => {
        showToast(err.response.data.message, 'red')
      })
    }
    else{
      e.preventDefault();
      axiosClient.post('/v1/stok/',{
        nama,
        hargabeli,
        hargajual,
        stok,
        kategori
      }).then(({data}) => {
        showToast(data.message)

      }).catch((err) => {
        showToast(err.response.data.message, 'red')
      })
    }

  }

  return (
    <>
      <form onSubmit={onSubmit} className='grid grid-cols-2 gap-4 p-12' method='post'>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">Nama Barang</label>
            <input value={nama} onInput={e => setNama(e.target.value)} type="text" className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Harga Jual</label>
            <input value={hargajual} onInput={e => setHargajual(e.target.value)} type='number' className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Harga Beli</label>
            <input value={hargabeli} onInput={e => setHargabeli(e.target.value)} type="number" className='border-2 border-stone-400 p-1'/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Stok</label>
            <input value={stok} onInput={e => setStok(e.target.value)}type="number" className='border-2 border-stone-400 p-1'/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama"> Kategori  </label>
            <input type="text" value={kategori} onInput={e => setKategori(e.target.value)}  className='border-2 border-stone-400 p-1 '/>
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
