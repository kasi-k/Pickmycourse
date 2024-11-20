import React, { useState } from 'react'
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png";
import gc from "../../assets/book.png";
import subscribe from "../../assets/subscription.png"
import user from "../../assets/user.png"
import team from "../../assets/team.png"
import help from "../../assets/services.png"
import report from "../../assets/report.png"
import setting from "../../assets/settings.png"

const AddRole = () => {
    const [features, setFeatures] = useState([
     {name: "Dashboard", icon: dashboard, value: "dashboard" },
     { name: "Packages", icon: Package, value: "packages"},
     {name: "Courses", icon:course, value: "courses" },
     { name: "Generate course", icon:gc, value: "generate course" },
     { name: "Subscriptions", icon:subscribe, value: "subscription" }, 
     { name: "Users", icon:user, value: "users" },
     { name: "Team", icon:team, value: "team" },
     { name: "Help & Support", icon:help, value: "help_support" },
     { name: "Reports", icon:report, value: "report" },
     { name: "Settings", icon:setting,value: "setting" },
     
      ]);
  return (
    <div className='bg-[#000928]'>hi</div>
  )
}

export default AddRole