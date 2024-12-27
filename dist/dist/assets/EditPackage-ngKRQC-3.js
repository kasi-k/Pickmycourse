import{c as D,a as o,i as q,r as n,k as V,u as O,b as L,d,A as p,j as e,o as U,B}from"./index-DTIph_Wm.js";import{F as M}from"./index-Cj8Z1iuT.js";import{A as R}from"./index-kLSoZVNm.js";const z=D().shape({packagename:o().trim().required("Package name is required"),price:q().required("price is required"),course:o().trim().required("courses is required"),tax:q().required("tax is required"),subtopic:o().oneOf(["5","10"],"Please select a valid number of subtopics").required("Please select the number of subtopics"),coursetype:o().oneOf(["Text & Image Course","Video & Text Course"],"Please select a valid course type").required("Please select the course type")}),X=()=>{var N,y,f,k,v,w,C,P,T;const[G,S]=n.useState([]),[i,H]=n.useState(!1),[x,m]=n.useState([]),u=(N=V().state)==null?void 0:N.userId,h=O();n.useEffect(()=>{F()},[]);const{register:r,handleSubmit:$,setValue:c,watch:g,formState:{errors:t}}=L({resolver:U(z)}),b=g("subtopic"),j=g("coursetype");n.useEffect(()=>{A()},[]);const A=async()=>{try{const s=await d.get(`${p}/api/getsubscriptionplanbyid/${u}`),l=s.data.plan;S(l);const a=s.data.plan;c("packagename",a.packagename),c("price",a.price),c("course",a.course),c("tax",a.tax),c("subtopic",a.subtopic),c("coursetype",a.coursetype)}catch(s){console.log(s)}},E=async s=>{const l={...s,packagename:s.packagename.toLowerCase()};try{(await d.put(`${p}/api/subscriptionplan/${u}`,l)).status===200&&(B.success("Package Updated Successfully"),h("/packages"))}catch(a){console.error("Error updating package:",a)}},F=async()=>{try{const s=await d.get(`${p}/api/gettax`);Array.isArray(s.data.tax)?m(s.data.tax):(console.error("Expected an array of tax options, but got:",s.data),m([]))}catch(s){console.error("Error fetching taxes:",s)}},I=()=>{h("/packages")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-extralight ",children:[e.jsx("p",{className:"mb-2 mx-2 mt-4 ",children:"Add a new package"}),e.jsx("hr",{}),e.jsxs("form",{onSubmit:$(E),className:"mx-4 my-6 ",children:[e.jsxs("div",{className:"grid gap-2.5 font-extralight ",children:[e.jsxs("label",{className:"text-lg col-span-12",children:["Package Name ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("packagename"),placeholder:"Enter Package name",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(y=t.packagename)==null?void 0:y.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Price ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("price"),placeholder:"Enter Price",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(f=t.price)==null?void 0:f.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Courses per month ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...r("course"),type:"number",placeholder:"00",className:"col-span-2 text-black rounded-md py-1.5 px-2",required:!0}),e.jsx("p",{className:"text-red-700",children:(k=t.courses)==null?void 0:k.message}),e.jsxs("label",{className:"text-lg col-span-12",children:["Tax ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block col-span-2 ",children:[e.jsxs("select",{...r("tax"),defaultValue:"select",className:" w-full text-black px-2 py-1.5 outline-none rounded-md ",children:[e.jsx("option",{value:"select",disabled:!0,children:"Select Tax"}),x&&x.map((s,l)=>e.jsxs("option",{value:s.percentage,children:[s.percentage,"%"]},l))]}),e.jsx("p",{className:"text-red-700",children:(v=t.tax)==null?void 0:v.message}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(M,{className:"text-black text-2xl"})})]}),e.jsxs("label",{className:"text-lg col-span-12",children:["No of Subtopic ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("subtopic"),type:"radio",id:"5",value:"5",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(w=t.subtopic)==null?void 0:w.message}),e.jsxs("label",{htmlFor:"5",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${b==="5"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"05"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("subtopic"),type:"radio",id:"10",value:"10",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(C=t.subtopic)==null?void 0:C.message}),e.jsxs("label",{htmlFor:"10",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${b==="10"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"10"})]})]})]}),e.jsxs("p",{className:"text-lg py-2 col-span-12",children:["Course Type ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("coursetype"),type:"radio",id:"textcourse",value:"Text & Image Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(P=t.coursetype)==null?void 0:P.message}),e.jsxs("label",{htmlFor:"textcourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${j==="Text & Image Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Theory & Image Course"})]})]}),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx("input",{...r("coursetype"),type:"radio",id:"videocourse",value:"Video & Text Course",className:"hidden peer"}),e.jsx("p",{className:"text-red-700",children:(T=t.coursetype)==null?void 0:T.message}),e.jsxs("label",{htmlFor:"videocourse",className:"flex items-center cursor-pointer",children:[e.jsx("span",{className:"w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500",children:e.jsx("span",{className:`w-3 h-3  ${j==="Video & Text Course"?"bg-white":"hidden"}`})}),e.jsx("span",{className:"ml-2",children:"Video & Theory Course"})]})]})]})]}),e.jsx("button",{type:"submit",className:`my-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2 ${i?"opacity-50 cursor-not-allowed":""} `,disabled:i,children:i?e.jsxs("div",{className:"flex  text-xl gap-2",children:[e.jsx(R,{className:"h-6 w-6 animate-spin"}),e.jsx("p",{children:"Updating...."})]}):"Update"}),e.jsx("button",{onClick:I,className:"my-6 mx-6 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-12 py-2",children:"Cancel"})]})]})})};export{X as default};