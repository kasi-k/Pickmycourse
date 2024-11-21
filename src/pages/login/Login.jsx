import React from "react";
import PMCLogo from "../../assets/PMC_logo.png";
import frame from "../../assets/backframe.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .trim()
      .email("Please enter a valid Email ")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum")
      .matches(passwordRules, {
        message:
          " min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",
      }),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
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
      const response = await axios.post(
        `${API}/api/adminsignin`,
        formData
      );
     
      const responseData = response.data;
      console.log(responseData.adminData);
      console.log(responseData.adminData.email);

      

      if (response.status === 200) {
        // toast.success("Logged in Successfully");
        localStorage.setItem("email", responseData.adminData.email);
        localStorage.setItem("password", responseData.adminData.password);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const redirectForgotPassword = () => {
    navigate("/forgot_password");
  };
  return (
    <>
      <div className=" font-poppins flex justify-center h-screen items-center bg-[#300080] ">
        <div className=" relative w-96 mx-1  bg-[#200098]  shadow-lg border-x-2 border-violet-950  ">
          <img src={frame} alt="Image" className="absolute opacity-20 z-0" />
          <img src={PMCLogo} alt="Image" className=" mx-2 my-2 " />
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-center text-white">Login</p>
            <div className="grid gap-3 mx-4 my-6 ">
              <label htmlFor="email" className="text-white">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Email"
                required
                className="py-1.5 z-10  rounded-md text-center text-black"
              />
              <p className="text-red-700">{errors.email?.message}</p>
              <label htmlFor="password" className="text-white">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                {...register("password")}
                // type="password"
                placeholder="Enter Password"
                className="py-1.5  z-10 rounded-md text-center text-black"
              />
              <p className="text-red-700">{errors.password?.message}</p>
              <div className="text-end cursor-pointer">
                <span
                  onClick={redirectForgotPassword}
                  className="relative  text-white"
                >
                  forgot Password?
                </span>
              </div>
              <div className="flex justify-center  my-24">
                <button
                  type="submit"
                  className=" text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2 "
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="text-sm mt-10 text-center text-white font-extralight">
            &#169; PickMyCourse Developed with{" "}
            <span className="text-red-500">&#x2764;</span> by SeenIT Pty Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
