import React from 'react'
import Profile from "../../assets/profile.png"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";


const schema = yup.object().shape({
  fname: yup.string().trim().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please Enter a valid Email")
    .trim()
    .required("Email is required"),
  phone: yup.string().required("Please enter mob.no"),
  dob: yup.string().required("Please enter Date of birth"),
});
const AddUser = () => {
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    const formData = {
      ...data,
    };
    try {
      const response = await axios.post(`${API}/api/usersignup`, formData);
      const responseData = response.data;
      console.log(responseData);

      if (response.status === 200) {
        navigate('/users')
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
     <div className='font-extralight my-4'>
        <p className=' mx-2 text-lg '>Add a new user</p>
        <hr />
        <div className='mx-12 my-6 space-y-1'>
        <img src={Profile} alt=" profile image" className='size-36' />
        <button className=' bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2'>Change Image</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 '>
            <div className='grid col-span-3'>
            <label>First Name</label>
            <input  {...register("fname")} type="text" placeholder='Enter First name' className='outline-none text-black rounded-md py-1.5 px-1 my-3 '/>
            <p className="text-red-700">{errors.fname?.message}</p>
            </div>
            <div className='grid col-span-3'>
            <label >Last Name</label>
            <input  {...register("lname")} type="text" placeholder='Enter Last name'className='outline-none text-black rounded-md py-1.5 px-1 my-3' />
            <p className="text-red-700">{errors.lname?.message}</p>
            </div>
            <div className='grid col-span-3'>
            <label >Email</label>
            <input {...register("email")} type="email" placeholder='Enter Email'className='outline-none text-black rounded-md py-1.5 px-1 my-3' />
            <p className="text-red-700">{errors.email?.message}</p>
            </div>
            </div>
            <div className='grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 my-5'>
              <div className='grid col-span-3'>
                <label>Phone</label>
                <input {...register("phone")} type="text"className='outline-none text-black rounded-md py-1.5 px-1 my-3'placeholder='Enter Mobile Number' />
                <p className="text-red-700">{errors.phone?.message}</p>
                </div>
              <div className='grid col-span-3'>
                <label>Date Of Birth</label>
                <input  {...register("dob")} type="date" className='outline-none text-black rounded-md py-1.5 px-1 my-3'/>
                <p className="text-red-700">{errors.dob?.message}</p>
              </div>
             </div>
             <button type="submit" className='lg:absolute bottom-10 mx-6   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-16 py-2'>Save</button>
           </form></div>
      
    </>
  )
}

export default AddUser