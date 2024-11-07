import React, { Suspense } from "react";
import Headers from "./Headers";
import profile from "../../assets/profile.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Loading from "../../Loading";
import dashboard from "../../assets/dashboard.png";
import Package from "../../assets/money.png";
import course from "../../assets/course.png";
import gc from "../../assets/book.png";
import subscripe from "../../assets/subscription.png"
import user from "../../assets/user.png"
import team from "../../assets/team.png"
import help from "../../assets/services.png"
import report from "../../assets/report.png"
import setting from "../../assets/settings.png"
const Layout = () => {
  const location = useLocation();
  const Menus = [
    { title: "Dashboard", icon: dashboard, to: "/dashboard" },
     { title: "Packages", icon: Package, to: "/packages"},
     { title: "Courses", icon:course, to: "#" },
     { title: "Generate course", icon:gc, to: "#" },
     { title: "Subscriptions", icon:subscripe, to: "#" }, 
     { title: "Users", icon:user, to: "#" },
     { title: "Team", icon:team, to: "#" },
     { title: "Help & Support", icon:help, to: "#" },
     { title: "Reports", icon:report, to: "#" },
     { title: "Settings", icon:setting, to: "#" },
     
  ];

  return (
    <div className="">
      <Headers Menus={Menus} />
      <div className="flex w-full  h-screen pt-14 font-poppins ">
        <div className="w-2/12  bg-[#200098] text-white lg:block md:hidden hidden overflow-auto no-scrollbar">
          <div className="flex gap-2 items-center pt-3 flex-wrap justify-center ">
            <img src={profile} alt="User" className="w-14 h-14 " />
            <div>
              <p className="text-xl font-extralight">Hello ! John Doe</p>
              <p className="text-xs font-extralight pt-1">
                Subscription : Gold
              </p>
              <p className="text-xs font-extralight whitespace-nowrap py-1">
                Subscription Expiry : 12/12/26
              </p>
            </div>
          </div>

          <div className="my-1 ">
            <ul className="pt-2">
              {Menus.map((menu, index) => (
                <React.Fragment key={index}>
                  <NavLink to={menu.to}>
                    <li
                      className={` cursor-pointer text-md flex items-center gap-x-3 p-1.5 mt-1 pl-3 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                        location.pathname === menu.to
                          ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                          : " "
                      }`}
                    >
                      <div className="flex items-center gap-x-2 ">
                        <img src={menu.icon} alt="icons" className="w-6 h-6" />
                        <span
                          className={`font-poppins text-lg flex-1 duration-300 `}
                        >
                          {menu.title}
                        </span>
                      </div>
                    </li>
                  </NavLink>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-10/12 md:w-full w-full bg-gradient-to-b from-[#110038] via-[#150243] to-[#300080] text-white">
        <p className=" absolute bottom-2 right-4 text-sm text-white font-extralight">&#169; PickMyCourse Developed with <span className="text-red-500">&#x2764;</span> by SeenIT Pty Ltd</p>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
