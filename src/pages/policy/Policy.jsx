import React, { useEffect, useState } from "react";
import StyledText from "../../components/StyledText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";

const schema = yup.object().shape({
  terms: yup.string(),
  refund: yup.string(),
  billing: yup.string(),
  cancel: yup.string(),
  privacy: yup.string(),
});

const Policy = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [policy, setPolicy] = useState({});
  console.log(policy);
  
  const [Refresh, setRefresh] = useState(false)
  
  
  useEffect(()=>{
    fetchPolicy();
  },[Refresh])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const formData = {
      ...data,
    };
 console.log(formData);
 
    try {
      const response = await axios.post(`${API}/api/policies`, formData);
      if (response.status === 200) {
        setRefresh(!Refresh);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPolicy =async ()=>{
    try {
        const response = await axios.get(`${API}/api/policies`);
        const responseData = response.data.data;
        console.log(responseData);
        
        setPolicy(responseData);
        if (response.status === 200) {
        }
      } catch (error) {
        console.log(error);
      }

  }
  return (
    <>
      <div className=" h-screen  overflow-auto">
        <div className="flex  border-r-[1px] ">
          <div className="flex w-full my-3 space-y-2 ">
            <p
              className={` cursor-pointer text-base  w-full  px-1 py-2 transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                activeTab === "tab1"
                  ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                  : " "
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Terms & Conditions
            </p>

            <p
              className={` cursor-pointer text-md w-full pl-1  transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                activeTab === "tab2"
                  ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                  : " "
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Privacy Policy
            </p>

            <p
              className={` cursor-pointer text-md w-full pl-1  transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                activeTab === "tab3"
                  ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                  : " "
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Billing Policy
            </p>
            <p
              className={` cursor-pointer text-md w-full pl-1  transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                activeTab === "tab4"
                  ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                  : " "
              }`}
              onClick={() => setActiveTab("tab4")}
            >
              Refund Policy
            </p>
            <p
              className={` cursor-pointer text-md w-full pl-1  transition-all duration-700 hover:bg-gradient-to-r from-[#110038] to-[#08006B] font-extralight   ${
                activeTab === "tab5"
                  ? "bg-gradient-to-r from-[#110038] to-[#08006B]  transition-all duration-500"
                  : " "
              }`}
              onClick={() => setActiveTab("tab5")}
            >
              Cancellation Policy
            </p>
          </div>
        </div>
        <div className=" lg:col-span-9 md:col-span-8 col-span-8 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeTab === "tab1" && (
              <div>
                <input
                {...register("terms")}
                  type="text"
                  placeholder="Enter Terms & Conditions"
                  className="rounded-md w-1/3 my-8 mx-4 py-1.5 px-2 text-black"
                />
                <button  className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ">
                  Submit
                </button>
                <StyledText text={policy.terms} />
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <input
                {...register("privacy")}
                  type="text"
                  placeholder="Enter Privacy Policy"
                  className="rounded-md w-1/3 my-8 mx-4 py-1.5 px-2 text-black"
                />
                <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ">
                  Submit
                </button>
                <StyledText text={policy.privacy} />
              </div>
            )}
            {activeTab === "tab3" && (
              <div>
                <input
                {...register("billing")}
                  type="text"
                  placeholder="Enter Billing Policy"
                  className="rounded-md w-1/3 my-8 mx-4 py-1.5 px-2 text-black"
                />
                <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ">
                  Submit
                </button>
                <StyledText text={policy.billing} />
              </div>
            )}
            {activeTab === "tab4" && (
              <div>
                <input
                {...register("refund")}
                  type="text"
                  placeholder="Enter Refund policy"
                  className="rounded-md w-1/3 my-8 mx-4 py-1.5 px-2 text-black"
                />
                <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ">
                  Submit
                </button>
                <StyledText text={policy.refund} />
              </div>
            )}
            {activeTab === "tab5" && (
              <div>
                <input
                {...register("cancel")}
                  type="text"
                  placeholder="Enter Cancellation policy"
                  className="rounded-md w-1/3 my-8 mx-4 py-1.5 px-2 text-black"
                />
                <button className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 ">
                  Submit
                </button>
                <StyledText text={policy.cancel} />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Policy;
