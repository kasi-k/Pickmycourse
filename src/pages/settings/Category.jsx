import React, { useEffect, useState } from "react";
import EditImage from "../../assets/edit.png";
import BinImage from "../../assets/bin.png";
import axios from "axios";
import { API } from "../../Host";
import DeleteModal from "../../components/DeleteModal";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const [onEdit, setOnEdit] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    fetchCategory();
  }, [isDeleteModal]);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API}/api/getcategory`);

      const responseData = response.data.cate;
      setCategory(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateCategory = async () => {
    try {
      const response = await axios.put(`${API}/api/category/${onEdit}`, {
        category: editValue,
      });

      if (response.status === 200) {
        fetchCategory();
        setOnEdit(null); 
        setEditValue(""); 
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleDeleteModal = (dataId) => {
    setOnDelete(`${API}/api/category/${dataId}`);
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };
  const handleEditModal = (categoryId, categoryName) => {
    setOnEdit(categoryId);
    setEditValue(categoryName);
  };
  return (
    <>
      {category &&
        category.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between mx-4 py-2 h-full">
              <p>{data.category}</p>
              <div className="flex mr-6 size-4 gap-2">
                <img
                  onClick={() => handleEditModal(data._id, data.category)}
                  src={EditImage}
                  alt="Edit image"
                />
                <img
                  onClick={() => {
                    handleDeleteModal(data._id);
                  }}
                  src={BinImage}
                  alt="Delete image"
                />
              </div>
            </div>{" "}
            <hr />
          </div>
        ))}

      {isDeleteModal && (
        <DeleteModal
          onClose={handleCloseModal}
          title="category"
          onDelete={onDelete}
        />
      )}
      {onEdit && (
        <div className=" font-extralight my-12 mx-4 space-y-6">
          <p>Edit Category</p>
          <input
            type="text"
            value={editValue}
            placeholder=" Enter Category Name"
            className="rounded-md w-4/5 py-1.5 px-1 text-black"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            onClick={handleUpdateCategory}
            className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5 mx-2"
          >
            Update
          </button>
          <button
            onClick={() => setOnEdit(null)}
            className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-36 py-1.5"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Category;
