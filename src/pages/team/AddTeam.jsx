import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
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
  designation: yup.string().required("Please select Designation"),
});
const AddTeam = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select a file!");
      return;
    }
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      alert("File size exceeds 2MB!");
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
      setPreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    setIsSaving(true)
    console.log(data);
    const formData = {
      ...data,
    };
    try {
      const response = await axios.post(`${API}/api/adminsignup`, formData);
      const resuserid = response.data.email;
      console.log(resuserid);

      if (response.status === 200 && selectedFile !== null) {
        const payload = {
          name: selectedFile.name,
          user: resuserid,
          image: base64Image,
        };

        const response = await axios.post(`${API}/api/images`, payload);
        const responseData = response.data.image;
        console.log(responseData);
        toast.success("AdminId and profile Image created Successfully");
        navigate("/team");
      } else toast.success("User created Successfully");

    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="font-extralight my-4">
        <p className=" mx-2 text-lg ">Add a new team</p>
        <hr />
        <div className="mx-12 my-6 space-y-1">
        <img
            src={preview ? preview : Profile}
            alt="Profile"
            className={`w-40 h-40 ${
              preview ? " rounded-3xl object-cover" : ""
            }`}
          />

          <div
            className={`relative text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 h-12   my-5  `}
          >
            <p className=" absolute text-lg  py-2.5 text-center right-4">
              Upload Image
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              className="opacity-0 w-full h-full"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 ">
            <div className="grid col-span-3">
              <label>First Name</label>
              <input
                {...register("fname")}
                type="text"
                placeholder="Enter First name"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3 "
              />
              <p className="text-red-700">{errors.fname?.message}</p>
            </div>
            <div className="grid col-span-3">
              <label>Last Name</label>
              <input
                {...register("lname")}
                type="text"
                placeholder="Enter Last name"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3"
              />
              <p className="text-red-700">{errors.lname?.message}</p>
            </div>
            <div className="grid col-span-3">
              <label>Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Email"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3"
              />
              <p className="text-red-700">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-10 mx-6 gap-6 my-5">
            <div className="grid col-span-3">
              <label>Phone</label>
              <input
                {...register("phone")}
                type="text"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3"
                placeholder="Enter Mobile Number"
              />
              <p className="text-red-700">{errors.phone?.message}</p>
            </div>
            <div className="grid col-span-3">
              <label>Date Of Birth</label>
              <input
                {...register("dob")}
                type="date"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3"
              />
              <p className="text-red-700">{errors.dob?.message}</p>
            </div>
            <div className="grid col-span-3">
              <label>
                Designation<span className="text-red-600 ">*</span>
              </label>
              <select
                {...register("designation")}
                defaultValue="select"
                className="outline-none text-black rounded-md py-1.5 px-1 my-3"
              >
                <option value="select" disabled>
                  Select Designation
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <p className="text-red-700">{errors.designation?.message}</p>
            </div>
          </div>
          <button
            type="submit"
            className={`lg:absolute text-lg bottom-10 mx-6   bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-16 py-2 ${
              isSaving ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <div className="flex  text-xl gap-2">
                  <span className="animate-spin border-4 border-t-4 border-white border-solid rounded-full w-8 h-8 mx-auto "></span>{" "}
                  Saving...
                </div>
              </>
            ) : (
              "Save"
            )}
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default AddTeam;
