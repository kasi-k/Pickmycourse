import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Gallery from "../../assets/gallery.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API, formatDate2 } from "../../Host";
import { toast } from "react-toastify";

const Schema = yup.object().shape({
  desc2: yup.string().required("Please add reply"),
  status: yup.string().required("Please add status"),
  team: yup.string().required("Please add team"),
});

const ViewTicket = () => {
  const [userData, setUserData] = useState({});
  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();
  useEffect(() => {
    fetchTicket();
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const fetchTicket = async () => {
    try {
      const response = await axios.get(
        `${API}/api/getticketbyid?ticketId=${userId}`
      );
      const responseData = response.data.ticket;
      setUserData(responseData);

      setValue("desc2", responseData.desc2);
      setValue("status", responseData.status);
      setValue("team", responseData.team);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    const formData = {
      ...data,
    };
    try {
      const response = await axios.put(
        `${API}/api/ticketupdate?ticketId=${userId}`,
        formData
      );

      if (response.status === 200) {
        toast.success("Ticket Updated Successfully");
        navigate("/helpsupport");
      }
    } catch (error) {
      console.error("Error updating Ticket:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mx-4 my-2 font-extralight  ">
          <div className="flex justify-between">
            {userData && (
              <div className="space-y-1">
                <p>{userData.fname}</p>
                <p>Ticket No : {userData.ticketId}</p>
                <span className="grid py-2">
                  <p> Date : {formatDate2(userData.createdAt)} </p>
                  <p> Category : {userData.category} </p>
                  <p>Priority : {userData.priority}</p>
                </span>
                <p className="flex gap-2 items-center">
                  <p>Attachments :</p>{" "}
                  <span className="flex gap-2 ">
                    <img src={Gallery} alt="gallery image" className="size-8" />
                    <img src={Gallery} alt="gallery image" className="size-8" />
                    <img src={Gallery} alt="gallery image" className="size-8" />
                  </span>
                </p>
              </div>
            )}
            <div>
              <form className="grid mx-2 my-2 ">
                <label>
                  Team Member <span className="text-red-600">*</span>
                </label>
                <div className="relative inline-block  ">
                  <select
                    defaultValue=""
                    className="  text-black lg:w-72 md:w-72 w-64 px-2 py-1.5 outline-none rounded-md "
                    {...register("team")}
                  >
                    <option value="" disabled>
                      Select team member
                    </option>
                    <option value="john">John</option>
                    <option value="david">David</option>
                    <option value="doe">Doe</option>
                  </select>
                  <div className="absolute inset-y-0 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                    <FaCaretDown className="text-black text-2xl" />
                  </div>
                  {errors.team && (
                    <p className="text-red-700">{errors.team?.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <p>Description:</p>
          {userData && <p>{userData.desc1}</p>}
          <hr />
          <div className="mt-10">
            <form className="flex flex-col ">
              <label className="mx-6">Add Reply</label>
              <textarea
                rows={9}
                placeholder="write Reply"
                className="rounded-3xl text-center place-content-center outline-none text-black "
                {...register("desc2")}
              ></textarea>
              <p className="text-red-700">{errors.desc2?.message}</p>
              <div className="lg:flex  justify-between my-2">
                <div className="relative">
                  <label htmlFor="">
                    Attachments (you can select multiple files)
                  </label>
                  <div className="absolute inset-y-1 top-7 left-0 rounded-lg px-1 py-2  flex items-center  bg-gray-300  pointer-events-none outline-none text-black">
                    Choose Files
                  </div>
                  <input
                    type="file"
                    className="border bg-white text-black w-96 rounded-lg py-1.5 my-1 flex items-center "
                  />
                </div>
                <div className="grid mx-2">
                  <label htmlFor="">
                    Ticket staus<span className="text-red-600">*</span>
                  </label>
                  <div className="relative inline-block  ">
                    <select
                      defaultValue=""
                      className="  text-black w-72 px-2 py-1.5  outline-none rounded-md "
                      {...register("status")}
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      <option value="pending">Pending</option>
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </select>

                    <div className="absolute inset-y-0 bottom-2 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none">
                      <FaCaretDown className="text-black text-2xl" />
                    </div>
                    {errors.status && (
                      <p className="text-red-700">{errors.status?.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="mx-2 bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-10 py-2 my-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ViewTicket;
