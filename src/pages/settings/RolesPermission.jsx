import React, { useEffect, useState } from "react";
import AddRole from "./AddRole";
import SettingImage from "../../assets/setting.png";
import EditImage from "../../assets/edit.png";
import BinImage from "../../assets/bin.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Host";
import DeleteModal from "../../components/DeleteModal";
import UpdateRole from "./UpdateRole";

const RolesPermission = () => {
  const [activeTab, setActiveTab] = useState("tab0");
  const [role,setRole] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewRole();
  }, [isDeleteModal]);

  const fetchNewRole = async () => {
    try {
      const response = await axios.get(`${API}/api/getroles`);
      const responseRoles = response.data.role;
      setRole(responseRoles);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteModal = (dataId) => {
    setOnDelete(`${API}/api/roles/${dataId}`);
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };


  return (
    <>
      <div className="font-extralight grid grid-cols-9  ">
        <div className="  h-56 bg-[#000928] space-y-4 my-2 mx-4 col-span-4">
          <div className="flex justify-between ">
            <p className="mx-2 mt-4">Roles</p>
            <p onClick={() => setActiveTab("tab2")} className="mx-2 mt-4">
              Add Role
            </p>
          </div>
          {role && role.map((data,index)=>(
          <div key={index}
          onClick={() =>
            navigate(`/updaterole`, {
              state: {
                roleId: data.role_name,
              },
            })
          }
            className={` cursor-pointer flex justify-between items-center text-md  pl-1 p-2 transition-all duration-700 hover:bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] font-extralight   ${
              activeTab === "tab1"
                ? "text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  transition-all duration-500"
                : " "
            }`}
          >
          
            <p className="mx-3">{data.role_name}</p>
            <div className="flex mr-1 size-4 ">
              {/* <img src={SettingImage} alt="Settings image" />
              <img src={EditImage} alt="Edit image" /> */}
              <img  onClick={()=>handleDeleteModal(data._id)}src={BinImage} alt="Delete image" />
            </div>
          </div>
          ))}
        
        </div>
        <div className="col-span-5">{activeTab === "tab2" && <AddRole onClose={()=>setActiveTab(!activeTab)} />}
        {activeTab === "tab1" && selectedRole && (
            <AddRole
              selectedRole={selectedRole} // Pass the selected role to the AddRole component for editing
              onClose={() => setActiveTab(!activeTab)}
            />
          )}
        </div>
        <div className="col-span-5">{activeTab === "tab3" && <UpdateRole onClose={()=>setActiveTab(!activeTab)} />}</div>
      </div>

      {isDeleteModal && (
        <DeleteModal
          onClose={handleCloseModal}
          title="Roles"
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default RolesPermission;
