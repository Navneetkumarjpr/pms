import React from 'react'
import { createContext, useState } from 'react'
export const AdminContext= createContext(null);
const getInitState = () => {

    const authAdmin = localStorage?.getItem('adminContext')
  
    return authAdmin ? JSON.parse(authAdmin) : null
  
  }
const AdminProvider = ({children}) => {
    const [adminLogged, setAdminLogged] = useState(getInitState);
    const loginCall = (authUser) => {
        setAdminLogged(authUser)
      }
  
      const logoutCall = () => {
        setAdminLogged(null)
      }

    return (
        <AdminContext.Provider value={{adminLogged, setAdminLogged,loginCall,logoutCall}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider