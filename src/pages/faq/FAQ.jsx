import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Accordion from "../../components/Accordion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { API } from "../../Host";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  title: yup.string().required("Question is required"),
  content: yup.string().required("Content is required"),
});

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  const [newFaq, setNewFaq] = useState([]);
  const [addFaq, setAddFaq] = useState(null);

  useEffect(() => {
    fetchNewFaq();
  }, []);

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

    try {
      // Step 1: Authenticate the user
      const response = await axios.post(`${API}/api/faq`, formData);
      setFaq(response.data);

      if (response.status === 200) {
        setAddFaq(null);
        fetchNewFaq();
        toast.success("FAQ created  Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewFaq = async () => {
    try {
      const response = await axios.get(`${API}/api/getfaq`);
      const responseFaq = response.data.faq;
      setNewFaq(responseFaq);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFaq = () => {
    setAddFaq(!addFaq);
  };
  const Accdata = [
    ...(newFaq
      ? newFaq.map((data) => ({
          title: data.title, // Directly access the `title` property
          content: data.content, // Directly access the `content` property
        }))
      : [])

  ];

  return (
    <>
      <div className="mx-4 my-6 font-poppins">
        {addFaq !== null && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-3 grid gap-2 w-96"
          >
            <label htmlFor="">Question ?</label>
            <textarea
              {...register("title")}
              name="title"
              id="question"
              className=" bg-transparent px-2 text-white border border-white rounded-lg"
              placeholder="Enter New FAQ Question ?"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
            <label htmlFor="">Answer</label>
            <textarea
              {...register("content")}
              name="content"
              id="answer"
              className=" bg-transparent px-2 text-white border border-white rounded-lg"
              placeholder="Enter FAQ Answer"
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
            )}
            <div className="flex justify-center my-2 ">
              <button
                type="submit"
                className=" text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  py-2 px-6  "
              >
                Save
              </button>
            </div>
          </form>
        )}
        <div className="flex justify-between items-center flex-wrap gap-3 mx-2">
          <p className="text-lg font-extralight">FAQ</p>
          <div className="flex gap-2">
            <button
              onClick={handleAddFaq}
              className=" text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  py-2 px-6  "
            >
              Add FAQ
            </button>
            <div className="flex items-center gap-3 bg-white w-96 px-6 py-1.5  rounded-md mr-1">
              <FaSearch className="text-black text-xl" />
              <input
                type="text"
                placeholder="Search by topic"
                className="bg-transparent w-full outline-none text-center font-extralight text-black"
              />
            </div>
          </div>
        </div>
        <hr className="my-2 " />
        {Accdata.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </>
  );
};

export default FAQ;
