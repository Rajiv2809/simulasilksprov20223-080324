import React, { useEffect, useState } from 'react'
import Tenant from '../components/Tenant'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axios';
import { useStateContext } from '../contexts/Context';

export default function AddPendapatan() {
    const {showToast} = useStateContext()
    const [ loading , setLoading, ] = useState();
    const [tenants, setTenants ] = useState([]);
    const [IDtenant , setIDtenant] = useState('')
    const [totalPendapatan, setTotalPendapatans] = useState();
    const [tanggal , setTanggal] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(id){
            axiosClient.get(`/v1/pendapatan/${id}`).then(({data}) => {
                setIDtenant(data.IDtenant);
                setTanggal(data.tanggal)
                setTotalPendapatans(data.totalPendapatan)
            }).catch((err) => {
                console.log(err);
            })
        }
        axiosClient.get(`/v1/tenant`).then(({data}) => {
            setTenants(data)
        }).catch((err) => {
            console.log(err)
        })
        }, [id])
        
        const onSubmit =  (e) =>{
            if(id){
                e.preventDefault()
                axiosClient.post(`/v1/pendapatan/${id}`, {
                    IDtenant,
                    totalPendapatan,
                    tanggal
                }).then(({data}) => {
                    showToast(data.message)
                    navigate('/dashboard/pendapatan')
                }).catch((err) => {
                    showToast(err.response.data.message, 'red')
                })
            }
            else{
                e.preventDefault()
                axiosClient.post(`/v1/pendapatan`, {
                    IDtenant,
                    totalPendapatan,
                    tanggal
                }).then(({data}) => {
                    showToast(data.message)
                    navigate('/dashboard/pendapatan')
                }).catch((err) => {
                    showToast(err.response.data.message, 'red')
                })
            }
            }
        

  return (
   <>
     <form onSubmit={onSubmit} className='grid grid-cols-2 gap-4 p-12' method='post'>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">ID Tenant</label>
          
            <select className='border-2 border-stone-400 p-1 ' value={IDtenant} onInput={e => setIDtenant(e.target.value)}  name="nama" id="">
              <option value="">Select Tenant </option>
              {!loading && tenants.length > 0 && tenants.map(Tenant => (
                <option  key={Tenant.IDtenant} value={Tenant.IDtenant} >{Tenant.IDtenant} </option>
              ))

              }
            </select>
        </div>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama"> Tanggal  </label>
            <input value={tanggal} onInput={e => setTanggal(e.target.value)} type="date" className='border-2 border-stone-400 p-1 '/>
        </div>
        <div className="div flex flex-col col-span-2">
          <label htmlFor="nama">Total Pendapatan</label>
            <input type='number' value={totalPendapatan} onInput={e => setTotalPendapatans(e.target.value)} className='border-2 border-stone-400 p-1 '/>
        </div>
      
        <div className="dasda flex gap-4">
          <button className='px-4 py-2 rounded-md bg-emerald-500 text-white font-bold' type='submit' > Tambah </button>
          <button className='px-4 py-2 rounded-md bg-rose-500 text-white font-bold'>
            <Link to='/dashboard/pendapatan'>Kembali</Link>
          </button>
        </div>

      </form>
   </>
  )
}
