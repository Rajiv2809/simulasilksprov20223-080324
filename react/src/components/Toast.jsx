import React, { useState } from 'react'
import { useStateContext } from '../contexts/Context'

export default function Toast() {
    const {toast} = useStateContext()

  return (
    <>
        {toast.show && (
            <div className={`w-[250px] bg-green-500 py-1 px-3 font-semibold ${toast.color == 'red' ? 'bg-rose-600' : 'bg-emerald-500'  } text-white rounded-md fixed top-16 right-11`}>{toast.message}</div>
        )}
    </>
  )
}
