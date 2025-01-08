import{c as f,a as i,r as n,u as j,b,d as m,A as d,j as e,o as N}from"./index-cr5avmQX.js";import{F as y}from"./index-Ca1wSfG0.js";const P=f().shape({packagename:i().trim().required("Package name is required").transform(t=>t.toLowerCase()),email:i().email().required("Email is required")}),w=()=>{const[t,o]=n.useState([]),[v,p]=n.useState(null),g=j();n.useEffect(()=>{h()},[]);const{register:l,handleSubmit:u,formState:{errors:S}}=b({resolver:N(P)}),x=async a=>{const s=t.find(r=>r.packagename===a.packagename);if(s){const r={...a,course:s.course};localStorage.setItem("plan",a.packagename),localStorage.setItem("courses",s.course);try{const c=await m.post(`${d}/api/addusertoplan`,r);g("/packages")}catch(c){console.log(c)}}else console.error("Package not found.")},h=async()=>{try{const a=await m.get(`${d}/api/getsubscriptionplan`);Array.isArray(a.data.plans)?o(a.data.plans):(console.error("Expected an array of package options, but got:",a.data),o([]))}catch(a){console.error("Error fetching taxes:",a)}},k=a=>{const s=a.target.value,r=t.find(c=>c.packagename===s);p(r)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-extralight",children:[e.jsx("p",{className:"mb-2 mx-2 mt-4",children:"Add a user to package"}),e.jsx("hr",{}),e.jsxs("form",{onSubmit:u(x),className:"mx-4 my-6 ",children:[e.jsxs("div",{className:"grid gap-2.5 ",children:[e.jsxs("label",{className:"col-span-12 ",children:["Package Name ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block col-span-2 ",children:[e.jsxs("select",{...l("packagename"),defaultValue:"select",className:" w-full text-black px-2 py-1.5 outline-none rounded-md ",onChange:k,children:[e.jsx("option",{value:"select",disabled:!0,children:"Select Package"}),t&&t.map((a,s)=>e.jsx("option",{value:a.packagename,children:a.packagename},s))]}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(y,{className:"text-black text-2xl"})})]}),e.jsxs("label",{className:"col-span-12 ",children:["User ",e.jsx("span",{className:" text-red-600",children:"*"})]}),e.jsx("input",{...l("email"),type:"email",placeholder:"Enter user Email-Id",className:" col-span-2  text-black px-2 py-1 outline-none rounded-md "})]}),e.jsx("button",{type:"submit",className:"my-12 text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-14 py-2 ",children:"Save"})]})]})})};export{w as default};
