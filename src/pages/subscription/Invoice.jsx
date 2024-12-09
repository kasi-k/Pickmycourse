import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/PMC_Logo.png";
import Modal from "../../components/Modal";
import { API, formatDate2 } from "../../Host";
import axios from "axios";
import {toPng} from 'html-to-image'
import { AiOutlineLoading } from "react-icons/ai";




const Invoice = ({onClose,invoiceData}) => {

  const [invoiceSub, setInvoiceSub] = useState([]);
  const [processing, setProcessing] = useState(false);
  const pdfRef = useRef(null);

  useEffect(() => {
    fetchInvoice();
  }, []);

  const fetchInvoice = async () => {
    try {
      const response = await axios.get(invoiceData);
      const responseData = response.data.sub;
      setInvoiceSub(responseData)
    } catch (error) {
      console.log(error);
    }
  };
  const handleDownload = async () => {
    setProcessing(true);
    try {
      // Generate the image (PNG)
      const dataUrl = await toPng(pdfRef.current, { cacheBust: false });

      // Create an anchor tag and trigger the download
      const link = document.createElement("a");
      link.download = `PMC_Invoice.png`;
      link.href = dataUrl;
      link.click();

      // Show a success message
      toast.success("Downloaded");
    } catch (error) {
      // Handle errors in case of failure
      toast.error("Failed to download invoice");
    } finally {
      setProcessing(false); // Reset the processing state after download is finished
    }
  };
  return (
    <Modal>
            
              <div className="bg-white">
              {invoiceSub && (
      <div className="max-w-xl h-auto bg-white py-1 px-2 font-poppins font-extralight"ref={pdfRef} >
        <span className="flex justify-center my-3">
          <img src={Logo} alt="Image" className="w-48 " />
        </span>
        <div className="grid grid-cols-12 gap-3 text-black mx-3 my-3">
          <div className="col-span-6 font-normal">
            <p className="font-normal">Payment Method:</p>
            <p>Plan:</p>
            <p>Subscription ID:</p>
            <p>Customer ID:</p>
            <p>Amount:</p>
          </div>
          <div className="col-span-6  ">
            <p>{invoiceSub.method}</p>
            <p>{invoiceSub.plan}</p>
            <p>{invoiceSub.subscriberId}</p>
            <p>cus_QXoP8hrt4tOqIh</p>
            <p>{parseInt((Number(invoiceSub.amount) || 0) / 100)}</p>
          </div>
        </div>
        <hr className="my-2 mx-5" />
        <div className="grid grid-cols-12 gap-3 text-black mx-3 my-3">
          <div className="col-span-6 font-normal ">
            <p>Receipt #:</p>
            <p>Date:</p>
          </div>
          <div className="col-span-6 ">
            <p>256746746444</p>
            <p>{formatDate2(invoiceSub.date)}</p>
          </div>
        </div>
        <hr className="my-2 mx-5" />
        <div className="grid grid-cols-12 gap-3 text-black mx-3">
          <div className="col-span-6 ">
            <p className="font-normal">Basic Monthly Plan:</p>
            <p>Qty 1</p>
          </div>
          <div className="col-span-6 ">
            <p>{parseInt((Number(invoiceSub.amount) || 0) / 100)}</p>
          </div>
        </div>
        <hr className="my-2 mx-5" />
        <div className="grid grid-cols-12 gap-3 text-black mx-3 my-3">
          <div className="col-span-6 ">
            <p className="font-normal">Tax:</p>
            <p>GST 18%</p>
          </div>
          <div className="col-span-6 ">
            <p>$ 0.18</p>
          </div>
        </div>
        <hr className="my-2 mx-5" />
        <div className="grid grid-cols-12 gap-3 text-black mx-3 my-3">
          <div className="col-span-6 font-normal">
            <p>Grand Total:</p>
          </div>
          <div className="col-span-6 ">
            <p>$18</p>
          </div>
        </div>
       </div>)}
        <div className="flex justify-evenly items-center my-8 ">
        <button  className={`text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-52 py-2.5 ${processing ? 'opacity-15' : ''}`}  disabled={processing} onClick={handleDownload}>
          {processing ?  <span className="flex justify-center gap-3"> <AiOutlineLoading className="h-6 w-6 animate-spin" /> <p>Downloading ....</p></span> : "Download Invoice" }
          </button>
          <p onClick={onClose} className=" cursor-pointer text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center px-10 py-2.5  ">Cancel</p>
        </div>
      
     </div>
    </Modal>
  );
};

export default Invoice;
