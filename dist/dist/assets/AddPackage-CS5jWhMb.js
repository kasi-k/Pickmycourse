import{c as A,a as t,i,r as n,u as $,b as E,d as w,A as q,j as e,o as F,B as D}from"./index-cr5avmQX.js";import{F as O}from"./index-Ca1wSfG0.js";import{A as V}from"./index-Cdvyeb2W.js";const R=A().shape({stripeId:t().trim().required("stripeId  is required"),packagename:t().trim().required("Package name is required"),price:i().required("price in USD is required"),inr:i().required("price in INR required"),course:t().trim().required("courses is required"),tax:i().required("tax is required"),subtopic:t().oneOf(["5","10"],"Please select a valid number of subtopics").required("Please select the number of subtopics"),coursetype:t().oneOf(["Text & Image Course","Video & Text Course"],"Please select a valid course type").required("Please select the course type")}),z=()=>{var u,h,j,b,N,g,f,y,v;const[c,I]=n.useState(!1),[d,o]=n.useState([]),S=$();n.useEffect(()=>{P()},[]);const{register:a,handleSubmit:T,watch:p,formState:{errors:r}}=E({resolver:F(R)}),x=p("subtopic"),m=p("coursetype"),C=async s=>{I(!0);const l={...s,packagename:s.packagename.toLowerCase()};try{(await w.post(`${q}/api/subscriptionplan`,l)).status===200&&(D.success("Package created Successfully"),S("/packages"))}catch(k){console.log(k)}},P=async()=>{try{const s=await w.get(`${q}/api/gettax`);Array.isArray(s.data.tax)?o(s.data.tax):(console.error("Expected an array of tax options, but got:",s.data),o([]))}catch(s){console.error("Error fetching taxes:",s)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-extralight ",children:[e.jsx("p",{className:"mb-2 mx-2 mt-4 ",children:"Add a new package"}),e.jsx("hr",{}),e.jsxs("form",{onSubmit:T(C),className:"mx-4 my-6 ",children:[e.jsxs("div",{className:"grid gap-2.5 font-extralight ",children:[e.jsxs("label",{className:"text-lg col-span-12",children:["Package Name ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...a("packagename"),placeholder:"Enter Package name",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(u=r.packagename)==null?void 0:u.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Price In USD ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...a("price"),placeholder:"Enter Price In USD",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsxs("label",{className:"text-lg col-span-12",children:["Price In INR ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...a("inr"),placeholder:"Enter Price In INR",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(h=r.inr)==null?void 0:h.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Courses per month ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...a("course"),type:"number",placeholder:"00",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(j=r.course)==null?void 0:j.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Tax ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block col-span-2 ",children:[e.jsxs("select",{...a("tax"),defaultValue:"select",className:" w-full text-black px-2 py-1.5 outline-none rounded-md ",children:[e.jsx("option",{value:"select",disabled:!0,children:"Select Tax"}),d&&d.map((s,l)=>e.jsxs("option",{value:s.percentage,children:[s.percentage,"%"]},l))]}),e.jsx("p",{className:"text-red-700",children:(b=r.tax)==null?void 0:b.message}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(O,{className:"text-black text-2xl"})})]}),e.jsxs("label",{className:"text-lg col-span-12",children:["stripeId ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...a("stripeId"),placeholder:"Enter stripeId",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(N=r.stripeId)==null?void 0:N.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Subtopic ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...a("subtopic"),type:"radio",id:"5",value:"5",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(g=r.subtopic)==null?void 0:g.message}),e.jsxs("label",{htmlFor:"5",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${x==="5"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"05"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...a("subtopic"),type:"radio",id:"10",value:"10",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(f=r.subtopic)==null?void 0:f.message}),e.jsxs("label",{htmlFor:"10",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${x==="10"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"10"})]})]})]}),e.jsxs("p",{className:"text-lg py-2 col-span-12",children:["Course Type ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...a("coursetype"),type:"radio",id:"textcourse",value:"Text & Image Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(y=r.coursetype)==null?void 0:y.message}),e.jsxs("label",{htmlFor:"textcourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${m==="Text & Image Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Theory & Image Course"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...a("coursetype"),type:"radio",id:"videocourse",value:"Video & Text Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(v=r.coursetype)==null?void 0:v.message}),e.jsxs("label",{htmlFor:"videocourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${m==="Video & Text Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Video & Theory Course"})]})]})]})]}),e.jsx("button",{type:"submit",className:`my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 ${c?"opacity-50 cursor-not-allowed":""} `,disabled:c,children:c?e.jsxs("div",{className:"flex  text-xl gap-2",children:[e.jsx(V,{className:"h-6 w-6 animate-spin"}),e.jsx("p",{children:"Saving...."})]}):"Save"})]})]})})};export{z as default};
