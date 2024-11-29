import React, { useEffect, useState } from "react";
import Pdf from "../../assets/pdf.png";
import Csv from "../../assets/csv.png";
import Excel from "../../assets/excel.png";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/pencil.png";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../Host";
import { formatDate2 } from "../../Host";

const Tickets = () => {
  const [ticket, setTicket] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [onDelete, setOnDelete] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchNewTicket();
  }, [isDeleteModal]);

  const fetchNewTicket = async () => {
    try {
      const response = await axios.get(`${API}/api/getticket`);
      const responsedata = response.data.ticket;
      setTicket(responsedata);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteModal = (ticketId) => {
    setOnDelete(`${API}/api/deleteticket?ticketId=${ticketId}`); 
    setIsDeleteModal(true);
  };
  const handleCloseModal = () => {
    setIsDeleteModal(false);
  };
 
  
  return (
    <>
      <div className=" font-extralight">
        <div className="flex justify-between items-center my-2">
          <p className=" mx-2 mt-6">Help and Support </p>
          <div className=" mx-2 flex gap-6 mt-4">
            <button>
              <img className="size-8" src={Pdf} alt="Pdf image" />
            </button>
            <button>
              {" "}
              <img className="size-8" src={Csv} alt="csv image" />
            </button>
            <button>
              <img className="size-8 " src={Excel} alt="excel image" />
            </button>
          </div>
        </div>
        <div className="mx-1 overflow-auto no-scrollbar  ">
          <table className=" w-full">
            <thead className="text-slate-300">
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
                <th className="font-extralight border border-slate-400">
                  Ticket#
                </th>
                <th className="font-extralight border border-slate-400">
                  Category
                </th>
                <th className="font-extralight border border-slate-400">
                  Status
                </th>
                <th className="font-extralight border border-slate-400">
                  Date
                </th>
                <th className="font-extralight border border-slate-400">
                  Team Member
                </th>
                <th className="font-extralight border border-slate-400">
                  Priority
                </th>
                <th className="font-extralight border border-slate-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-400 ">
              {ticket &&
                ticket.map((data, index) => (
                  <tr className=" text-nowrap text-center " key={index}>
                    <td className="border border-slate-400 p-2">{data._id}</td>
                    <td className="border border-slate-400 ">{data.fname}</td>
                    <td className="border border-slate-400 ">{data.lname}</td>
                    <td className="border border-slate-400">{data.email}</td>
                    <td className="border border-slate-400">{data.phone}</td>
                    <td className="border border-slate-400">{data.ticketId}</td>
                    <td className="border border-slate-400">{data.category}</td>
                    <td className="border border-slate-400">{data.status} </td>
                    <td className="border border-slate-400 text-slate-500 ">{formatDate2(data.createdAt)}</td>
                    <td className="border border-slate-400">{data.team}</td>
                    <td className="border border-slate-400">{data.priority} </td>
                    <td className="flex items-center justify-evenly border-b border-r border-slate-400 ">
                      <p
                        onClick={() =>
                          navigate(`/viewticket`, {
                            state: {
                               userId:data.ticketId
                            },
                          })
                        }
                        className=" cursor-pointer p-2 text-green-600 "
                      >
                        <img
                          className="size-6 "
                          src={Edit}
                          alt="edit image"
                        />
                      </p>
                      <p
                          onClick={() => {
                          handleDeleteModal(data.ticketId);
                        }}
                        className="cursor-pointer "
                      >
                        <img className="size-6" src={Delete} alt="delete image" />
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isDeleteModal && (
        <DeleteModal onClose={handleCloseModal} title="ticket" onDelete={onDelete} />
      )}
    </>
  );
};

export default Tickets;
