import{j as e,K as n,d as i,B as o}from"./index-DTIph_Wm.js";const m=({title:s,onClose:t,onDelete:c,Children:l})=>{const r=async()=>{try{const d=(await i.delete(c)).data;o.success(`${s} Deleted Successfully`),t()}catch(a){console.log(a)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-extralight fixed inset-0 flex justify-center  items-center backdrop-blur-sm ",children:e.jsxs("div",{className:"mx-2 bg-gradient-to-b from-[#110038] to-[#08006B] lg:w-2/5 md:w-2/4   h-96  ",children:[e.jsx("button",{onClick:t,className:"grid place-self-end",children:e.jsx(n,{className:"size-[24px]"})}),e.jsxs("div",{className:"grid justify-center gap-6",children:[e.jsxs("p",{className:"text-center my-6",children:["Delete ",s]}),e.jsxs("p",{className:"h-40 ",children:["Are you sure you want to delete this ",s]})]}),e.jsxs("div",{className:"flex justify-around",children:[e.jsxs("button",{className:" text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-4 py-2 ",onClick:()=>r(),children:["Delete ",s]}),e.jsx("button",{onClick:t,className:"text-black bg-white px-10 py-2",children:"Cancel"})]})]})}),l]})};export{m as D};
