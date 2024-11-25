import React, { useEffect, useState } from 'react'
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Edit from "../../assets/pencil.png";
import DeleteModal from '../../components/DeleteModal';
import Delete from "../../assets/delete.png"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { API } from "../../Host";
import { toast } from 'react-toastify';

const User = () => {
  const[user,setUser]=useState([])
  const[isDeleteModal,setIsDeleteModal,]=useState(false)
  const [onDelete, setOnDelete] = useState("");
  const navigate=useNavigate()
 
  useEffect(() => {
    fetchNewUser();

  }, [isDeleteModal]);


  const fetchNewUser = async () => {
    try {
      const response = await axios.get(`${API}/api/getusers`);
      const responsedata = response.data.user;
      setUser(responsedata);
      if(response===200){
        localStorage.setItem("user", responsedata.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteModal=(dataId)=>{ 
  setOnDelete(`${API}/api/deleteuser/${dataId}`); 
   setIsDeleteModal(true)
 
  }
  const handleCloseModal=()=>{
    setIsDeleteModal(false)
  }
   
   const handleEditModal=()=>{
    navigate('/edit_user')
   }
   const handleAddUserModal=()=>{
    navigate('/add_user')
   }
  return (
    <>
    <div className="font-extralight">
    <div className="flex justify-between items-center my-2 ">
      <p className=" mx-2 mt-6">User</p>
      <div className="flex items-center gap-3 mt-4">
        <button>
          <img className=" size-8" src={Pdf} alt="Pdf image" />
        </button>
        <button>
          {" "}
          <img className=" size-8" src={Csv} alt="csv image" />
        </button>
        <button>
          <img className=" size-8" src={Excel} alt="excel image" />
        </button>
        <div className=' flex mx-3 space-x-6'>
        <button className='bg-white text-nowrap text-black py-1 lg:px-4 md:px-4 px-1'>Bulk Upload</button>
        <button onClick={handleAddUserModal} className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  text-nowrap py-1 lg:px-4 md:px-4 px-1  '>Add user</button>
        </div>
      </div>
    </div>
    <div className="mx-1 overflow-auto no-scrollbar ">
      <table className="   w-full">
        <thead className=" text-nowrap text-slate-300">
          <tr>
            <th className="p-2 font-extralight border border-slate-400">
              User Id
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              First Name
            </th>
            <th className="font-extralight border border-slate-400 text-nowrap">
              Last Name
            </th>
            <th className="font-extralight border border-slate-400">
              Email
            </th>
            <th className="font-extralight border border-slate-400">
              Phone
            </th>
            <th className="font-extralight border border-slate-400">
              DOB
            </th>
            <th className="font-extralight border border-slate-400">
              Plan
            </th>
            <th className="font-extralight border border-slate-400">
             Courses
            </th>
            <th className="font-extralight border border-slate-400">
              Subscription Date
            </th>
            <th className="font-extralight border border-slate-400">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-400  ">
        {user &&
          user.map((data, index) => (
          <tr className=" text-nowrap text-center"key={index}>
            <td className="border border-slate-400  ">{data._id}</td>
            <td className="border border-slate-400 ">{data.fname}</td>
            <td className="border border-slate-400 ">{data.lname}</td>
            <td className="border border-slate-400">{data.email}</td>
            <td className="border border-slate-400">{data.phone}</td>
            <td className="border border-slate-400">{data.dob}</td>
            <td className="border border-slate-400 "> Basic</td>
            <td className="border border-slate-400 ">2</td>
            <td className="border border-slate-400  ">22-05-1990</td>
            <td className=" border-b border-r border-slate-400 flex justify-around items-center  ">
              <p onClick={() => handleEditModal(data._id, data.user)} className=" cursor-pointer mx-1  text-green-600 ">
                <img   className='size-6' src={Edit} alt="edit image" />
              </p>
               <p  onClick={() => {
                    handleDeleteModal(data._id);
                  }}  className="cursor-pointer size-9">
                   <img  className="size-7 my-1" src={Delete} alt="delete image" />
                  </p>
            </td> 
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  {isDeleteModal&&<DeleteModal onClose={handleCloseModal} title="user"  onDelete={onDelete} />} 
</>
  )
}

export default User