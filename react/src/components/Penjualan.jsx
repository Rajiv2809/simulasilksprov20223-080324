import React, { useEffect } from "react";
import { useStateContext } from "../contexts/Context";
import axiosClient from "../axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Penjualan() {
  const {penjualans, setPenjualans, currentUser, showToast} = useStateContext()

  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    axiosClient.get('/v1/penjualan').then(({data}) => {
      setPenjualans(data)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  },[])

  const onDelete = (id) => {
    axiosClient.delete(`/v1/penjualan/${id}`).then(({data})=>{
      const newPenjualan = penjualans.filter(item => item.IDTrans !== id)
      setPenjualans(newPenjualan)
      showToast(data.message) 
    }).catch((err) => {
      showToast(err.response.data.message)
    })
    
  }


  return (
    <>
      <div className="content flex flex-col gap-2">
        <h1 className="text-4xl  font-semibold">Penjualan</h1>
        <div className="div flex justify-end">
          <button className="px-4 bg-emerald-500 rounded-md text-white font-semibold   py-2">
            <Link to="/dashboard/penjualan/add"> Add Data +</Link>
          </button>
        </div>
        <table className="text-sm">
          <thead>
            <tr className="bg-gray-300 border-b-2  border-black ">
              <th className="px-6 py-2">ID Trans</th>
              <th className="px-6 py-2">ID Produk</th>
              <th className="px-6 py-2">Harga jual</th>
              <th className="px-6 py-2">Qty</th>
              <th className="px-6 py-2">Total</th>
              <th className="px-6 py-2">Dibayar</th>
              <th className="px-6 py-2">Kembali</th>
              <th className="px-6 py-2">Tanggal</th>
              <th className="px-6 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {!loading &&
              penjualans.length > 0 &&
              penjualans.map((penjualan) => (
                <tr key={penjualan.IDTrans} className=" border-b-2  border-black ">
                  <th className="py-2">{penjualan.IDTrans}</th>
                  <th className="py-2">{penjualan.IDproduk}</th>
                  <th className="py-2">{penjualan.hargajual}</th>
                  <th className="py-2">{penjualan.qty}</th>
                  <th className="py-2">{penjualan.total}</th>
                  <th className="py-2">{penjualan.dibayar}</th>
                  <th className="py-2">{penjualan.kembali}</th>
                  <th className="py-2">{penjualan.tanggal}</th>
                  <th className="py-2 flex gap-2">
                    <button className="py-2 px-4 bg-blue-400 rounded-md">
                      <Link to={`/dashboard/penjualan/detail/${penjualan.IDTrans}`}>
                        Detail
                      </Link>
                    </button>
                    {currentUser.role == "admin" && (
                      <button className="py-2 px-4 bg-orange-400 rounded-md">
                        <Link to={`/dashboard/penjualan/edit/${penjualan.IDTrans}`}>  
                          Update{" "}
                        </Link>
                      </button>
                    )}
                    {currentUser.role == "admin" && (
                      <button
                        onClick={(e) => onDelete(penjualan.IDTrans)}
                        className="py-2 px-4 bg-rose-500 rounded-md"
                      >
                        Remove
                      </button>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
