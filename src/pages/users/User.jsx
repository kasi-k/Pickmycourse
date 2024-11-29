import React, { useEffect, useState } from "react";
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Edit from "../../assets/pencil.png";
import DeleteModal from "../../components/DeleteModal";
import Delete from "../../assets/delete.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Host";
import { formatDate2 } from "../../Host";
import * as XLSX from "xlsx";  // For Excel export
import { CSVLink } from "react-csv";  // For CSV export
import { jsPDF } from "jspdf";
import "jspdf-autotable"; 

const User = () => {
  const [user, setUser] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewUser();
  }, [isDeleteModal]);

  const fetchNewUser = async () => {
    try {
      const response = await axios.get(`${API}/api/getusers`);
      const responsedata = response.data.user;
      setUser(responsedata);
      if (response === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteModal = (dataId) => {
    setOnDelete(`${API}/api/deleteuser/${dataId}`);
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };

  const handleAddUserModal = () => {
    navigate("/adduser");
  };
    // Prepare table data for export (exclude unnecessary fields like IDs)
    const getExportData = () => {
      return user.map((data) => ({
        "User Id": data._id,
        "First Name": data.fname,
        "Last Name": data.lname,
        "Email": data.email,
        "Phone": data.phone,
        "DOB": formatDate2(data.dob),
        "Plan": "Basic", // Or any other plan logic
        "Courses": 2, // Or any dynamic value you want to show
        "Subscription Date": "22-05-1990", // Adjust based on your needs
      }));
    };

  
// Export to Excel
const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(getExportData());
   // Format the columns to ensure they have proper width
   const wscols = [
    { wpx: 100 },
    { wpx: 100 }, // Column 1: First Name width
    { wpx: 100 }, // Column 2: Last Name width
    { wpx: 180 }, // Column 3: Email width
    { wpx: 100 }, // Column 4: Phone width
    { wpx: 80 }, // Column 5: DOB width
    { wpx: 80 },  // Column 6: Plan width
    { wpx: 80 },  // Column 7: Courses width
    { wpx: 100 }, // Column 8: Subscription Date width
  ];

  ws["!cols"] = wscols;  // Set the column widths
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Users");
  XLSX.writeFile(wb, "users.xlsx");
};

  // Export to PDF with Table Format
  const exportToPDF = () => {
    const doc = new jsPDF();
    const columns = [
      "User Id",
      "First Name", 
      "Last Name", 
      "Email", 
      "Phone", 
      "DOB", 
      "Plan", 
      "Courses", 
      "Subscription Date"
    ];

    // Prepare the rows data for the table
    const rows = getExportData().map((userData) => [
      userData["User Id"],
      userData["First Name"],
      userData["Last Name"],
      userData["Email"],
      userData["Phone"],
      userData["DOB"],
      userData["Plan"],
      userData["Courses"],
      userData["Subscription Date"]
    ]);

    // Add the table to the PDF
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20, // Start position for the table
      theme: "grid", // Optional: to add grid lines
      headStyles: {
        fillColor: [97, 144, 213], // Header background color
        textColor: [255, 255, 255], // Header text color
        fontStyle: "bold",
        halign: "center" ,

      },
      bodyStyles: {
        textColor: [0, 0, 0], // Body text color
        halign: "center"  
      }
    });

    doc.save("users.pdf");
  };
  return (
    <>
      <div className="font-extralight">
        <div className="flex justify-between items-center my-2 ">
          <p className=" mx-2 mt-6">User</p>
          <div className="flex items-center gap-3 mt-4">
            <button onClick={exportToPDF}>
              <img className=" size-8" src={Pdf} alt="Pdf image" />
            </button>
            <CSVLink
              data={getExportData()} 
              filename={"users.csv"}
              className="cursor-pointer"
              target="_blank"
            >
              <img className="size-8" src={Csv} alt="csv image" />
            </CSVLink>
            <button onClick={exportToExcel}>
              <img className=" size-8" src={Excel} alt="excel image" />
            </button>
            <div className=" flex mx-3 space-x-6">
              <button className="bg-white text-nowrap text-black py-1 lg:px-4 md:px-4 px-1">
                Bulk Upload
              </button>
              <button
                onClick={handleAddUserModal}
                className="bg-gradient-to-r from-[#3D03FA] to-[#A71CD2]  text-nowrap py-1 lg:px-4 md:px-4 px-1  "
              >
                Add user
              </button>
            </div>
          </div>
        </div>
        <div className="mx-1 overflow-auto no-scrollbar ">
          <table className="   w-full">
            <thead className=" text-nowrap text-slate-300">
              <tr>
                <th className="p-2 font-extralight border border-slate-400">
                  User Id
                </th>
                <th className="font-extralight border border-slate-400 text-nowrap">
                  First Name
                </th>
                <th className="font-extralight border border-slate-400 text-nowrap">
                  Last Name
                </th>
                <th className="font-extralight border border-slate-400">
                  Email
                </th>
                <th className="font-extralight border border-slate-400">
                  Phone
                </th>
                <th className="font-extralight border border-slate-400">DOB</th>
                <th className="font-extralight border border-slate-400">
                  Plan
                </th>
                <th className="font-extralight border border-slate-400">
                  Courses
                </th>
                <th className="font-extralight border border-slate-400">
                  Subscription Date
                </th>
                <th className="font-extralight border border-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400  ">
              {user &&
                user.map((data, index) => (
                  <tr className=" text-nowrap text-center" key={index}>
                    <td className="border border-slate-400  ">{data._id}</td>
                    <td className="border border-slate-400 ">{data.fname}</td>
                    <td className="border border-slate-400 ">{data.lname}</td>
                    <td className="border border-slate-400">{data.email}</td>
                    <td className="border border-slate-400">{data.phone}</td>
                    <td className="border border-slate-400">{formatDate2(data.dob)}</td>
                    <td className="border border-slate-400 "> Basic</td>
                    <td className="border border-slate-400 ">2</td>
                    <td className="border border-slate-400  ">22-05-1990</td>
                    <td className=" border-b border-r border-slate-400 flex justify-around items-center  ">
                      <p
                         onClick={() =>
                          navigate(`/edituser`, {
                            state: {
                               userId:data._id
                            },
                          })
                        }
                        className=" cursor-pointer mx-1 p-1 text-green-600 "
                      >
                        <img className="size-6" src={Edit} alt="edit image" />
                      </p>
                      <p
                        onClick={() => {
                          handleDeleteModal(data._id);
                        }}
                        className="cursor-pointer "
                      >
                        <img
                          className="size-6 my-1"
                          src={Delete}
                          alt="delete image"
                        />
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isDeleteModal && (
        <DeleteModal
          onClose={handleCloseModal}
          title="user"
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default User;
