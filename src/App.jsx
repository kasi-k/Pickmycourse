import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import NotFound from "./404";
import Login from './pages/Login/Login'
import ForgotPassword from './pages/login/ForgotPassword';
import Package from './pages/Packages/Package';
import Dashboard from './pages/dashboard/Dashboard';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/dashboard'element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App