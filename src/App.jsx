import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import NotFound from "./404";
import Login from './pages/Login/Login'
import ForgotPassword from './pages/login/ForgotPassword';
import Package from './pages/Packages/Package';
import Dashboard from './pages/dashboard/Dashboard';
import AddPackage from './pages/Packages/AddPackage';
import AdduserPackage from './pages/Packages/AdduserPackage';
import Courses from './pages/courses/Courses';
import GenerateCourse from './pages/generate courses/GenerateCourse';
import Subscription from './pages/subscription/Subscription';
import User from './pages/users/User';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
         {/* <Route path='' element={<Login/>}/>
         <Route path='/forgot_password' element={<ForgotPassword/>}/>  */}
         <Route path="/" element={<Layout />}>
        <Route path='/dashboard'element={<Dashboard/>}/>
        <Route path='/packages'element={<Package/>}/> 
        <Route path='/add_package'element={<AddPackage/>}/>
        <Route path='/add_userPackage'element={<AdduserPackage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/generate course' element={<GenerateCourse/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/users' element={<User/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App