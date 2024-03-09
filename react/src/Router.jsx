import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Login from "./components/Login";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./View/Home";
import Stok from './components/Stok'
import Dashboard from "./components/Dashboard";
import AddStok from "./View/AddStok";
import Penjualan from "./components/Penjualan";
import AddPenjualan from "./View/AddPenjualan";
import DetailStok from "./View/DetailStok";
import AddTenant from "./View/AddTenant";
import Tenant from "./components/Tenant";
import AddPendapatan from "./View/AddPendapatan";
import Pendapatan from "./components/Pendapatan";
const router = createBrowserRouter([
    {
        path:'/',
        element:<GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/home',
                element: <Home/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>,
                children: [
                    {
                        path: 'stok',
                        element: <Stok />
                    },
                    {
                        path: 'stok/add',
                        element: <AddStok/>
                    },
                    {
                        path: 'stok/edit/:id',
                        element: <AddStok/>
                    },
                    {
                        path: 'stok/detail/:id',
                        element: <DetailStok/>
                    },
                    {
                        path: 'penjualan',
                        element: <Penjualan/>
                    },
                    {
                        path: 'penjualan/add',
                        element: <AddPenjualan/>
                    },
                    {
                        path: 'penjualan/edit/:id',
                        element: <AddPenjualan/>
                    },
                    {
                        path: 'tenant',
                        element: <Tenant/>
                    },
                    {
                        path: 'tenant/add',
                        element: <AddTenant/>
                    },
                    {
                        path: 'tenant/edit/:id',
                        element: <AddTenant/>
                    },
                    {
                        path: 'pendapatan',
                        element: <Pendapatan/>
                    },
                    {
                        path: 'pendapatan/add',
                        element: <AddPendapatan/>
                    },
                    {
                        path: 'pendapatan/edit/:id',
                        element: <AddPendapatan/>
                    },
                    
                    
                ]
            }
        ]
    }
])

export default router;