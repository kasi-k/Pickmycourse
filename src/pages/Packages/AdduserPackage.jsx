import React from "react";
import { useForm } from 'react-hook-form';
import { basicSchema } from "../../Schemas";
const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
const AdduserPackage = () => {
  const { register, handleBlur, handleChange, errors, handleSubmit, touched } =
    useForm({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    //  <>
    //  <div className='font-extralight'>
    // //     <p className='mb-2 mx-2 mt-4'>Add a user to package</p>
    // //     <hr />
    // //     <form className='mx-4 my-6 '>
    // //     <div className='grid gap-2.5 '>
    // //     <label onChange={handleChange} onBlur={handleBlur} value={values.package} className='col-span-12 '>Package Name <span className=' text-red-600'>*</span></label>
    // //     <select name="enter topic" id="topic" defaultValue="select" className='col-span-3 text-black rounded-md py-1.5 px-2 '>
    // //         <option value="select" disabled>Enter Topic</option>
    // //         <option value="first" >1</option>
    // //         <option value="2">2</option>
    // //     </select>
    // //     <label className='col-span-12 '>User <span className=' text-red-600'>*</span></label>
    // //     <select defaultValue="select" className='col-span-3 text-black rounded-md py-1.5 px-2'>
    // //         <option value="select" disabled>Type user email/phone</option>
    // //         <option value="1">1</option>
    // //         <option value="2">2</option>
    // //         </select>
    // //     </div>
    // //     <button className='my-16 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 '>Save</button>
    // //     </form>
    //  </div>
    //</>

    <>
      <form
        onSubmit={handleSubmit}
        className="grid items-center my-20 mx-6 w-20 "
      >
        <label className="text-white">Email</label>
        <input
          type="email"
          value={register.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          className={`text-black ${
            errors.email && touched.email ? "border border-red-800" : ""
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-red-400">{errors.email}</p>
        )}
        <label>Password</label>
        <input
          type="password"
          value={register.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          className={`text-black ${
            errors.password && touched.password ? "border border-red-800" : ""
          }`}
        />
        {errors.password && touched.password && (
          <p className="text-red-400">{errors.password}</p>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default AdduserPackage;
