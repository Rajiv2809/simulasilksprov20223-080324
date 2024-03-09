import { useState, useContext, createContext } from "react";
import Pendapatan from './../components/Pendapatan';

const StateContext = createContext({
    currentUser: {},
    userToken : null,
    toast: {
        message : '',
        color: '',
        show : false,
    },
    stoks: [],
    penjualan : [],
    tenants: [],
    Pendapatans: [],
    setStoks : () => [],
    setPenjualan : () => [],
    setPendapatans : () => [],
    setTenant : () => [],
    setCurrentUser : () => {},
    setUserToken : () => {},
    showToast: () => {},

})


export const StateProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const  [userToken, setUserToken] = useState(localStorage.getItem('accessToken'));
    const [toast, setToast] = useState({ message:'', color:'', show:false});
    const [stoks ,setStoks] = useState([]);
    const [penjualans, setPenjualans] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [pendpatans, setPendapatans] = useState([]);


    const setToken = (token) => {
        if(token) {
            localStorage.setItem( 'accessToken', token);
        } else {
            localStorage.removeItem("accessToken");
        }
        setUserToken(token);
    }
    const showToast = (message, color) => {
        setToast({
            message: message,
            color : color,
            show : true
        })
        setInterval(() => {
          setToast({
            message: '',
            color: '',
            show: false
          })
        }, 4000)
    }
    return  <StateContext.Provider value={{  
        currentUser,
        userToken,
        toast,
        stoks,
        penjualans,
        tenants,
        pendpatans,
        setStoks,
        setPenjualans,
        setPendapatans,
        setTenants,
        setUserToken,
        setToken,
        showToast,
        setCurrentUser
    }}>
        {children}
    </StateContext.Provider>

}

export const useStateContext = () => useContext(StateContext)

