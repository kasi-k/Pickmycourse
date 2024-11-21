import React, {useEffect, useState } from 'react'
import EditImage from '../../assets/edit.png'
import BinImage from "../../assets/bin.png"
import axios from "axios";
import { API } from "../../Host";
import DeleteModal from "../../components/DeleteModal";

const Category = () => {
  const[category,setCategory]=useState([])
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");

  useEffect(() => {
    fetchCategory();

  }, [isDeleteModal]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API}/api/getcategory`);
      console.log(response);
      
      const responseData = response.data.cate;
      setCategory(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteSubscription = () => {};
  const handleDeleteModal = (dataId) => {
    setOnDelete(`${API}/api/category/${dataId}`); 
    setIsDeleteModal(true);
  };
  const handleCloseModal=()=>{
    setIsDeleteModal(false)
  }
  return (
  <>
       {category &&
          category.map((data, index) => (
            <div>
         <div className='flex justify-between mx-4 py-2 h-full'key={index}>
            <p>{data.category}</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img   onClick={() => {
                    handleDeleteModal(data._id);
                  }} src={BinImage} alt="Delete image" />
            </div>
           </div> <hr /></div>))}
            
          
            {/* <div className='flex justify-between mx-4 py-2 '>
            <p>Technical</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr />
            <div className='flex justify-between mx-4 py-2'>
            <p>General</p>
        <div className='flex mr-6 size-4 gap-2'>
               <img src={EditImage} alt="Edit image" />
               <img src={BinImage} alt="Delete image" />
            </div>
            </div>
            <hr /> */}
    {isDeleteModal && (
      <DeleteModal onClose={handleCloseModal} title="category" onDelete={onDelete} />)}

      </>
  )
}

export default Category