import React, { useEffect, useState } from "react";
import Select from "react-select";
import EditImage from "../../assets/edit.png";
import BinImage from "../../assets/bin.png";
import axios from "axios";
import { API } from "../../Host";
import DeleteModal from "../../components/DeleteModal";

const Status = () => {
  const [status, setStatus] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const [onEdit, setOnEdit] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editColor, setEditColor] = useState("");
 

  const colorOptions = [
    { value: "green",  color: "green" },
    { value: "blue", color: "blue" },
    { value: "yellow",  color: "yellow" },
  ];
  useEffect(() => {
    fetchStatus();
  }, [isDeleteModal,status]);

  const fetchStatus = async () => {
    try {
      const response = await axios.get(`${API}/api/getstatus`); 
      const responseData = response.data.status;
      setStatus(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateStatus = async () => {
    try {
      const response = await axios.put(`${API}/api/status/${onEdit}`, {
        status: editValue,
        color: editColor,
      });

      if (response.status === 200) {
        fetchStatus();
        setOnEdit(null);
        setEditValue("");
        setEditColor("");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDeleteModal = (dataId) => {
    setOnDelete(`${API}/api/status/${dataId}`);
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };
  const handleEditModal = (StatusId, StatusName,StatusColor) => {
    setOnEdit(StatusId);
    setEditValue(StatusName);
    setEditColor(StatusColor);
  };
  return (
    <>
    {status &&
      status.map((data, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mx-4 py-2  ">
            <div className="w-1/2"><p>{data.status}</p></div>
           <div className="w-1/2"> <p
                className="flex justify-center w-14 h-4 rounded-sm"
                style={{ backgroundColor: data.color }}
              ></p></div>
            <div className="flex mr-6 size-4 gap-2 cursor-pointer">
              <img
                onClick={() => handleEditModal(data._id, data.status,data.color)}
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
          </div>
          <hr />
        </div>
      ))}
      {}
    {isDeleteModal && (
      <DeleteModal
        onClose={handleCloseModal}
        title="Status"
        onDelete={onDelete}
      />
    )}
    
    { onEdit && (
      <div className=" grid font-extralight my-24 mx-4 space-y-6">
        <p>Edit Status</p>
        <input
          type="text"
          value={editValue}
          placeholder=" Enter Status Name"
          className=" w-7/12 rounded-md py-1.5 px-1 text-black"
          onChange={(e) => setEditValue(e.target.value)}
        />
          <label>Select Color:</label>
          {/* Color Selector */}
          <Select
            value={colorOptions.find((option) => option.value === editColor)}
            onChange={(selectedOption) => setEditColor(selectedOption.value)}
            options={colorOptions}
            className="w-7/12 outline-none rounded-md"
            getOptionLabel={(e) => (
              <div
                style={{
                  backgroundColor: e.color,
                  padding: "16px",
                  width: "95%",
                }}
              >
              </div>
            )}
          />
          <div className="flex">
        <button
          onClick={handleUpdateStatus}
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
      </div>
    )}
  </>
);
};

export default Status;
