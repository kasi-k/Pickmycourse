import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import NotFound from "./404";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import Package from "./pages/Packages/Package";
import Dashboard from "./pages/dashboard/Dashboard";
import AddPackage from "./pages/Packages/AddPackage";
import AdduserPackage from "./pages/Packages/AdduserPackage";
import Courses from "./pages/courses/Courses";
import GenerateCourse from "./pages/generate courses/GenerateCourse";
import Subscription from "./pages/subscription/Subscription";
import User from "./pages/users/User";
import EditUser from "./pages/users/EditUser";
import Team from "./pages/team/Team";
import EditTeam from "./pages/team/EditTeam";
import AddTeam from "./pages/team/AddTeam";
import Tickets from "./pages/Help and Support/Tickets";
import Report from "./pages/reports/Report";
import ViewOwnCourse from "./pages/generate courses/ViewOwnCourse";
import AddUser from "./pages/users/AddUser";
import Setting from "./pages/settings/Setting";
import ViewTicket from "./pages/Help and Support/ViewTicket";
import AddRole from "./pages/settings/AddRole";
import ResetPassword from "./pages/login/ResetPassword";
import Form from "./pages/Form";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}/>
         <Route path='/forgot_password' element={<ForgotPassword/>}/>
         <Route path='/reset_password' element={<Form/>}/>  
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/add_package" element={<AddPackage />} />
            <Route path="/add_userPackage" element={<AdduserPackage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/generate course" element={<GenerateCourse />} />
            <Route path="/view_course" element={<ViewOwnCourse/>} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/users" element={<User />} />
            <Route path="/add_user" element={<AddUser />} />
            <Route path="/edit_user" element={<EditUser />} />
            <Route path="/team" element={<Team />} />
            <Route path="/edit_team" element={<EditTeam />} />
            <Route path="/add_team" element={<AddTeam />} />
            <Route path="/help_support" element={<Tickets />} />
            <Route path="/view ticket" element={<ViewTicket />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/add_role" element={<AddRole/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
