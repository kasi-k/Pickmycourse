import React, { useEffect, useState } from 'react'
import Profile from "../../assets/profile.png"
import UpdatePhone from './UpdatePhone';
import UpdateEmail from "./UpdateEmail"
import UpdateImage from './UpdateImage';
import axios from "axios";
import { API } from "../../Host";

const EditUser = () => {
  const [isModal, setIsModal] = useState(false);
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isProfileModal, setIsProfileModal] = useState(false);
  const user = localStorage.getItem("user");

  const [userData, setUserData] = useState({});
  const [userImage, setUserImage] = useState({});

  useEffect(() => {
    fetchUser();
    fetchImage();
  }, [isProfileModal]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API}/api/getusersbyid/${user}`);
      const responseData = response.data.user;
      setUserData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(`${API}/api/getimagebyid?user=${user}`);
      const responseData = response.data.user;
      setUserImage(responseData);
    } catch (error) {
      console.log(error);
    }
  };


  const CloseProfileModal = () => {
    setIsProfileModal(!isProfileModal);
  };


  const CloseEmailModal = () =>{
      setIsModal(!isModal)
  }

  const ClosePhoneModal =() =>{
    setIsPhoneModal(!isPhoneModal)
  }
  return (
    <>
    <div className='font-extralight my-4'>
        <p className=' mx-2 text-lg '>Edit User</p>
        <hr />
        <div className='mx-12 my-6 space-y-1'>
        <img
            src={userImage?.image ? userImage.image : Profile}
            alt="Profile"
            className={`w-40 h-40 ${userImage?.image ? ' rounded-3xl object-cover' : ''}`}
          />
          <button
            className={` text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 md:w-40 w-40 py-2.5 my-5 `}
            onClick={() => setIsProfileModal(true)}
          >
            Change Image
          </button>
        </div>
        <div className='mx-2 '>
          <p className='my-2'>Personal Information</p>
          <hr />
          <div className='grid grid-cols-12 my-6 mx-4 text-slate-400'>
            <div className='col-span-4  '>
                <div className='flex flex-col'>
            < label className='mb-6 '>First Name</label>
            <input type="text"  className=' outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28' />
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-20'/>
            </div>
            <div className='col-span-4 '>
            <div className='flex flex-col'>
            <label className='mb-6 '>Last Name</label>
            <input type="text"  className=' outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28' />
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-20'/>
            </div>
            <div className='col-span-4'>
                <div className='flex flex-col'>
            <label className='mb-6 '>Date Of Birth</label>
            <input type="date" className='outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28'/>
            </div>
            <hr  className='lg:w-1/2 md:w-1/2 w-28'/>
            </div>
          </div>
          <p className='my-2'>Contact Information</p>
          <hr />
          <div className='grid lg:grid-cols-3 mx-2 my-8 gap-4'>
            <div>
                <div className='flex flex-col'>
                <label className='mb-6'>Email</label>
               <input type="email" className='bg-transparent outline-none lg:w-54 md:w-54 w-48'/>
               </div>
                <hr className='lg:w-54 md:w-54 w-48 mb-6' />
                <button onClick={()=>setIsModal(true)} className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2'>Update</button>
            </div>
            <div>
                <div className='flex flex-col'>
               <label className='mb-6'>Phone</label>
               <input type="tel" name="phone" id="phone" className='bg-transparent  outline-none lg:w-1/2 md:w-54 w-48' />
               </div>
                <hr className='lg:w-1/2 md:w-54 w-48 mb-6' />
                <button  onClick={()=>setIsPhoneModal(true)} className='bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 '>Update</button>
            </div>
          </div>
        </div>
    </div>
    {isProfileModal && <UpdateImage CloseProfileModal={CloseProfileModal} />}
    {isModal && <UpdateEmail CloseEmailModal={CloseEmailModal}/>}
    {isPhoneModal && <UpdatePhone ClosePhoneModal={ClosePhoneModal}/>}
    </>
  )
}

export default EditUser