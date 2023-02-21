import React, { useContext } from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { AuthContext } from "../context";
import Error from "../pages/Error";
import {publicRoutes, privateRoutes} from "../router"

export default function AppRouter() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
      isAuth
      ?
      <Routes>
        
        {privateRoutes.map(route => 
          <Route 
            path={route.path} 
            element={<route.element/>} 
            key={route.path}
          />  
        )}
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<Navigate to="/error" replace />} />        
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route => 
          <Route 
            path={route.path} 
            element={<route.element/>} 
            key={route.path}
          />  
        )}  
        <Route path="/*" element={<Navigate to="/login" replace />} />     
      </Routes>
  )
}
