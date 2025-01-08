import{c as f,a as d,H as g,r as N,u as P,k as b,b as y,j as s,f as v,P as I,I as m,J as l,o as k,d as C,A as S}from"./index-cr5avmQX.js";const q=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,z=f().shape({newPassword:d().required("Password is required").min(6,"Password is too short - should be 6 chars minimum").matches(q,{message:" min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"}),confirmPassword:d().required("Password is required").min(6,"Password is too short - should be 6 chars minimum").oneOf([g("newPassword"),null],"NewPassword and confirmPassword must match")}).required(),A=()=>{var o,c,i;const[e,a]=N.useState(!1),x=P(),h=(o=b().state)==null?void 0:o.adminemail,{register:t,handleSubmit:w,formState:{errors:r}}=y({resolver:k(z)}),p=async u=>{const j={confirmpassword:u.confirmPassword};try{(await C.post(`${S}/api/changepassword?email=${h}`,j)).status===200&&x("/team")}catch(n){console.log(n)}};return s.jsx(s.Fragment,{children:s.jsx("div",{className:" font-poppins flex justify-center h-screen items-center bg-[#300080]   ",children:s.jsxs("div",{className:"relative w-96 mx-1 bg-[#200098]  shadow-lg border-x-2 border-violet-950",children:[s.jsx("img",{src:v,alt:"Image",className:"absolute opacity-20 z-0"}),s.jsx("img",{src:I,alt:"Image",className:"mx-2 my-2"}),s.jsx("p",{className:"text-center text-white my-10",children:"Change Password"}),s.jsx("form",{onSubmit:w(p),children:s.jsxs("div",{className:"grid gap-3 mx-10 my-6 ",children:[s.jsxs("label",{htmlFor:"",className:"text-white",children:["New Password ",s.jsx("span",{className:"text-red-600",children:"*"})]}),s.jsx("input",{...t("newPassword"),type:e?"text":"password",placeholder:"Enter new password",required:!0,className:"py-1.5 z-10  rounded-md text-center text-black "}),s.jsx("p",{className:"text-red-700",children:(c=r.newPassword)==null?void 0:c.message}),s.jsx("div",{onClick:()=>a(!e),className:"flex justify-end items-center mx-4",children:s.jsx("p",{className:"text-blackabsolute top-60 my-3 z-10 ",children:e?s.jsx(m,{}):s.jsx(l,{})})}),s.jsxs("label",{htmlFor:"",className:"text-white",children:["Confirm Password ",s.jsx("span",{className:"text-red-600",children:"*"})]}),s.jsx("input",{...t("confirmPassword"),type:e?"text":"password",placeholder:"Enter confirm password",required:!0,className:"py-1.5 z-10  rounded-md text-center text-black"}),s.jsx("p",{className:"text-red-700",children:(i=r.confirmPassword)==null?void 0:i.message}),s.jsx("div",{onClick:()=>a(!e),className:"flex justify-end items-center mx-4",children:s.jsx("p",{className:"text-black absolute bottom-80 my-4 z-10  ",children:e?s.jsx(m,{}):s.jsx(l,{})})}),s.jsx("div",{className:"flex justify-center  my-24",children:s.jsx("button",{type:"submit",className:" text-white bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-1/2 py-2 ",children:"Save"})})]})}),s.jsxs("p",{className:"text-sm mt-10 text-center text-white font-extralight",children:["© PickMyCourse Developed with"," ",s.jsx("span",{className:"text-red-500",children:"❤"})," by SeenIT Pty Ltd"]})]})})})};export{A as default};