import{r as o,u as O,d as N,A as i,j as e,m as w,B as x}from"./index-cr5avmQX.js";import{P as R,C as T,a as $,E as V,u as m,w as Y,b as q}from"./jspdf.plugin.autotable-D91dkI0g.js";import{E as G}from"./pencil-DAlNEmyY.js";import{D as H}from"./DeleteModal-CQhlUMzV.js";import{D as J}from"./delete-Do8KBHnN.js";import"./index-Cn956y_2.js";import"./typeof-QjJsDpFa.js";const K=`si,fname,email,lname,phone,dob,type,company
1,john,user20@gmail.com,doe,9784561230,11-25-2024,free,seenit`,ae=({permissions:s})=>{const C=s==null?void 0:s.includes("create"),y=s==null?void 0:s.includes("edit"),D=s==null?void 0:s.includes("delete");s==null||s.includes("download"),s==null||s.includes("view");const[c,k]=o.useState([]),[h,u]=o.useState(!1),[U,P]=o.useState(""),[v,p]=o.useState(null),[b,f]=o.useState("Bulk Upload"),n=o.useRef(null);localStorage.getItem("plan"),localStorage.getItem("courses");const j=O();o.useEffect(()=>{g()},[h]);const g=async()=>{try{const a=(await N.get(`${i}/api/getusers`)).data.user;k(a)}catch(t){console.log(t)}},S=t=>{P(`${i}/api/deleteuser?id=${t}`),u(!0)},E=()=>{u(!1)},F=()=>{j("/adduser")},_=t=>{p(t.target.files[0]),f("Upload")},B=()=>{b==="Bulk Upload"?n.current&&n.current.click():I(v)},I=async t=>{try{const a=new FormData;a.append("file",t),(await N.post(`${i}/api/useruploadcsv`,a,{headers:{"Content-Type":"multipart/form-data"}})).status===200?(x.success("File uploaded successfully"),f("Bulk Upload"),p(null),g(),x.success("Data Uploaded Successfully")):x.error("Data failed to Upload")}catch(a){console.log(a)}},A=t=>{const a=new Blob([t],{type:"text/csv"}),r=URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.download="bulkupload_template.csv",l.click(),URL.revokeObjectURL(r)},L=()=>{A(K)},d=()=>c.map(t=>({"User Id":t._id,"First Name":t.fname,"Last Name":t.lname,Email:t.email,Phone:t.phone,DOB:w(t.dob),Plan:"Basic",Courses:2,"Subscription Date":"22-05-1990"})),M=()=>{const t=m.json_to_sheet(d()),a=[{wpx:100},{wpx:100},{wpx:100},{wpx:180},{wpx:100},{wpx:80},{wpx:80},{wpx:80},{wpx:100}];t["!cols"]=a;const r=m.book_new();m.book_append_sheet(r,t,"Users"),Y(r,"PMC_users.xlsx")},z=()=>{const t=new q,a=["User Id","First Name","Last Name","Email","Phone","DOB","Plan","Courses","Subscription Date"],r=d().map(l=>[l["User Id"],l["First Name"],l["Last Name"],l.Email,l.Phone,l.DOB,l.Plan,l.Courses,l["Subscription Date"]]);t.autoTable({head:[a],body:r,startY:20,theme:"grid",headStyles:{fillColor:[97,144,213],textColor:[255,255,255],fontStyle:"bold",halign:"center"},bodyStyles:{textColor:[0,0,0],halign:"center"}}),t.save("PMC_users.pdf")};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"font-extralight",children:[e.jsxs("div",{className:"flex justify-between items-center my-2 ",children:[e.jsx("p",{className:"mx-2 mt-6",children:"User"}),e.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[e.jsx("button",{onClick:z,children:e.jsx("img",{className:"size-8",src:R,alt:"Pdf image"})}),e.jsx(T,{data:d(),filename:"PMC_users.csv",className:"cursor-pointer",target:"_blank",children:e.jsx("img",{className:"size-8",src:$,alt:"csv image"})}),e.jsx("button",{onClick:M,children:e.jsx("img",{className:"size-8",src:V,alt:"excel image"})}),e.jsxs("div",{className:"flex mx-3 space-x-6",children:[e.jsx("button",{onClick:L,className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-nowrap py-1 lg:px-4 md:px-4 px-1",children:"CSV Template"}),e.jsxs("button",{onClick:B,className:"bg-white text-nowrap text-black py-1 lg:px-4 md:px-4 px-1",children:[b,e.jsx("input",{type:"file",ref:n,onChange:_,className:"hidden"})]}),C&&e.jsx("button",{onClick:F,className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-nowrap py-1 lg:px-4 md:px-4 px-1",children:"Add user"})]})]})]}),e.jsx("div",{className:"mx-1 overflow-auto no-scrollbar ",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"text-nowrap text-slate-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 font-extralight border border-slate-400",children:"User Id"}),e.jsx("th",{className:"font-extralight border border-slate-400 text-nowrap",children:"First Name"}),e.jsx("th",{className:"font-extralight border border-slate-400 text-nowrap",children:"Last Name"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Email"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Phone"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"DOB"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Plan"}),e.jsx("th",{className:"font-extralight border border-slate-400",children:"Action"})]})}),e.jsx("tbody",{className:"text-slate-400 ",children:c&&c.map((t,a)=>e.jsxs("tr",{className:"text-nowrap text-center",children:[e.jsx("td",{className:"border border-slate-400",children:t._id}),e.jsx("td",{className:"border border-slate-400 capitalize",children:t.fname}),e.jsx("td",{className:"border border-slate-400 capitalize",children:t.lname}),e.jsx("td",{className:"border border-slate-400",children:t.email}),e.jsx("td",{className:"border border-slate-400",children:t.phone}),e.jsx("td",{className:"border border-slate-400",children:w(t.dob)}),e.jsx("td",{className:"border border-slate-400",children:t.type}),e.jsxs("td",{className:"border-b border-r border-slate-400 flex justify-around items-center",children:[y&&e.jsx("p",{onClick:()=>j("/edituser",{state:{userId:t._id}}),className:"cursor-pointer mx-1 p-1 text-green-600",children:e.jsx("img",{className:"size-6",src:G,alt:"edit image"})}),D&&e.jsx("p",{onClick:()=>{S(t._id)},className:"cursor-pointer",children:e.jsx("img",{className:"size-6 my-1",src:J,alt:"delete image"})})]})]},a))})]})})]}),h&&e.jsx(H,{onClose:E,title:"user",onDelete:U})]})};export{ae as default};
