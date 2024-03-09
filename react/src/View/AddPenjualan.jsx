import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../contexts/Context'
import axiosClient from '../axios';

export default function AddPenjualan() {
  const { penjualans, setPenjualans, showToast } = useStateContext();
  const [ stoks, setStoks] = useState([]);
  const [ Penjualan , setPenjualan] = useState({})
  const [IDproduk, setIDproduk] = useState();
  const [hargajual, setHargajual] = useState('');
  const [qty, setQty] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [dibayar, setDibayar] = useState('');
  const { id } = useParams();
  const [loading , setLoadind] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      axiosClient.get(`/v1/penjualan/${id}`).then(({data}) => {
        setDibayar(data.dibayar)
        setHargajual(data.hargajual)
        setQty(data.qty)
        setTanggal(data.tanggal)
        setIDproduk(data.IDproduk)
      }).catch((err) => {
        console.log(err)
      })
    }
      
    
      axiosClient.get('/v1/stok').then(({data}) => {
        setStoks(data);
        setLoadind(false)
      }).catch((err) => {
        console.log(err)
      })

  },[id])

  const onSubmit = (e) => {
    if(id){
      e.preventDefault()
      axiosClient.post(`/v1/penjualan/${id}`,{
        IDproduk,
        hargajual,
        qty,
        tanggal,
        dibayar
      }).then(({data}) => {
        showToast(data.message)
      }).catch((err) => {
        showToast(err.response.data.message,'red')
        navigate('/dashboard/penjualan')
      })
    }else {
      e.preventDefault()
      axiosClient.post(`/v1/penjualan`,{
        IDproduk,
        hargajual,
        qty,
        tanggal,
        dibayar
      }).then(({data}) => {
        showToast(data.message)
        navigate('/dashboard/penjualan')
      }).catch((err) => {
        console.log(err)
      })
    }
  }


  return (
   <>
    <form  onSubmit={onSubmit} className='grid grid-cols-2 gap-4 p-12' method='post'>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">ID produk</label>
          
            <select className='border-2 border-stone-400 p-1 ' value={IDproduk} onInput={e => setIDproduk(e.target.value)}  name="nama" id="">
              <option value="">Select Produk </option>
              {!loading && stoks.length > 0 && stoks.map(stok => (
                <option  key={stok.IDproduk} value={stok.IDproduk} >{stok.IDproduk} </option>
              ))

              }
            </select>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Harga Jual</label>
            <input value={hargajual} onInput={e => setHargajual(e.target.value)} type='number' className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Qty</label>
            <input value={qty} onInput={e => setQty(e.target.value)} type="number" className='border-2 border-stone-400 p-1'/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama">Dibayar</label>
            <input value={dibayar} onInput={e => setDibayar(e.target.value)} type="number" className='border-2 border-stone-400 p-1'/>
        </div>
        <div className="div flex flex-col">
          <label htmlFor="nama"> Tanggal  </label>
            <input value={tanggal} onInput={e => setTanggal(e.target.value)} type="date" className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="dasda flex gap-4">
          <button className='px-4 py-2 rounded-md bg-emerald-500 text-white font-bold' type='submit' > Tambah </button>
          <button className='px-4 py-2 rounded-md bg-rose-500 text-white font-bold'>
            <Link to='/dashboard/penjualan'>Kembali</Link>
          </button>
        </div>

      </form>
   
   </>
  )
}
