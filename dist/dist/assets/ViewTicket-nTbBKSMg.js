import{c as _,a as k,r as n,k as ee,u as te,b as se,d as r,A as o,j as e,m as ae,F as O,q as ne,o as le,B as f}from"./index-C89U1syM.js";import{t as ce}from"./index-Cnhg7C0r.js";import{A as re}from"./index-DG7lZl3d.js";const oe=({isOpen:i,onClose:g,imageUrl:a})=>{if(!i)return null;const[d,j]=n.useState(!1),c=n.useRef(null),y=async()=>{j(!0),ce(c.current,{cacheBust:!1}).then(b=>{const m=document.createElement("a");m.download="Image.png",m.href=b,m.click(),f.success("Downloaded"),j(!1)}).catch(b=>{})};return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:" relative w-[550px]  h-[350px]",children:[e.jsx("p",{onClick:g,className:" text-red-500 font-extrabold text-2xl absolute right-2 ",children:"x"}),e.jsx("img",{src:a,alt:"Modal",className:"w-full h-full",ref:c}),e.jsx("div",{className:"flex justify-center my-3 ",children:e.jsx("button",{className:`text-lg bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-40 py-2.5 ${d?"opacity-15":""}`,disabled:d,onClick:y,children:d?e.jsxs("span",{className:"flex justify-center gap-3",children:[" ",e.jsx(re,{className:"h-6 w-6 animate-spin"})," ",e.jsx("p",{children:"Downloading ...."})]}):"Download"})})]})})},ie=_().shape({desc2:k().required("Please add reply"),status:k().required("Please add status"),team:k().required("Please add team")}),xe=({permissions:i})=>{var C,R,E,M;const g=i==null?void 0:i.includes("reply"),[a,d]=n.useState({}),c=(C=ee().state)==null?void 0:C.ticketId,y=te(),[b,m]=n.useState([]),[U,q]=n.useState([]),[L,V]=n.useState([]),[B,S]=n.useState(!1),[z,A]=n.useState(""),[h,G]=n.useState([]),[I,D]=n.useState([]),[F,T]=n.useState([]);n.useEffect(()=>{J(),K(),W(),X()},[]);const{register:N,handleSubmit:H,setValue:v,formState:{errors:p}}=se({resolver:le(ie)}),J=async()=>{try{const s=(await r.get(`${o}/api/getticketbyid?ticketId=${c}`)).data.ticket;d(s),v("desc2",s.desc2),v("status",s.Status),v("team",s.team)}catch(t){console.log(t)}},K=async()=>{try{const s=await(await r.get(`${o}/api/getattachments?ticketId=${c}`)).data.attachments;m(s),await Q(s)}catch(t){console.log(t)}},Q=async t=>{const s=[],x=[];for(const l of t)try{const u=await r.get(`${o}/api/file/${l.attachment}`,{responseType:"blob"}),w=new Blob([u.data],{type:u.headers["content-type"]}),P=URL.createObjectURL(w);l.createdby==="user"?s.push(P):l.createdby==="admin"&&x.push(P)}catch(u){console.log(u)}q(s),V(x)},W=async()=>{try{const t=await r.get(`${o}/api/getadmin`);Array.isArray(t.data.user)?D(t.data.user):(console.error("Expected an array of tax options, but got:",t.data),D([]))}catch(t){console.error("Error fetching Team Member:",t)}},X=async()=>{try{const t=await r.get(`${o}/api/getstatus`);Array.isArray(t.data.status)?T(t.data.status):(console.error("Expected an array of tax options, but got:",t.data),T([]))}catch(t){console.error("Error fetching Team Member:",t)}},$=t=>{A(t),S(!0)},Y=()=>{S(!1),A("")},Z=async t=>{const s={...t};try{if((await r.put(`${o}/api/ticketupdate?ticketId=${c}`,s)).status===200){if(f.success("Ticket Updated Successfully"),h.length>0){const l=new FormData;l.append("user",localStorage.getItem("user")),l.append("ticketId",c),l.append("createdby","admin"),h.forEach(w=>{l.append("files",w)}),(await r.post(`${o}/post`,l,{headers:{"Content-Type":"multipart/form-data"}})).status===200?f.success("Files uploaded successfully"):f.error("Failed to upload files")}y("/helpsupport")}}catch(x){console.error("Error updating Ticket:",x)}};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:H(Z),children:[e.jsxs("div",{className:" mx-4 my-2 font-extralight  ",children:[e.jsx("div",{className:"flex justify-between",children:a&&e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:a.fname}),e.jsxs("p",{children:["Ticket No : ",a.ticketId]}),e.jsxs("span",{className:"grid py-2",children:[e.jsxs("p",{children:[" Date : ",ae(a.createdAt)," "]}),e.jsxs("p",{children:[" Category : ",a.category," "]}),e.jsxs("p",{children:["Priority : ",a.priority]})]}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("p",{children:"Attachments :"})," ",U.map((t,s)=>e.jsx("span",{onClick:()=>$(t),children:e.jsx("img",{src:t,alt:"User  Attachment",className:"w-10 h-10 cursor-pointer rounded-md"})},s))]})]})}),e.jsx("p",{children:"Description:"}),a&&e.jsx("p",{children:a.desc1}),e.jsx("hr",{}),(a==null?void 0:a.desc2)===null?e.jsx("div",{children:g?e.jsxs("div",{children:[e.jsx("div",{className:"flex lg:justify-end md:justify-end",children:e.jsxs("div",{className:"grid mx-2 my-2 ",children:[e.jsxs("label",{children:["Team Member ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block  ",children:[e.jsxs("select",{defaultValue:"",className:"  text-black lg:w-72 md:w-72 w-64 px-2 py-1.5 outline-none rounded-md ",...N("team"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select team member"}),I&&I.map((t,s)=>e.jsx("option",{value:t.fname,children:t.fname},s))]}),e.jsx("div",{className:"absolute inset-y-0 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(O,{className:"text-black text-2xl"})}),p.team&&e.jsx("p",{className:"text-red-700",children:(R=p.team)==null?void 0:R.message})]})]})}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx("label",{className:"mx-6",children:"Add Reply"}),e.jsx("textarea",{rows:9,placeholder:"write Reply",className:"rounded-3xl text-center place-content-center outline-none text-black ",...N("desc2")}),e.jsx("p",{className:"text-red-700",children:(E=p.desc2)==null?void 0:E.message}),e.jsxs("div",{className:"lg:flex md:flex grid  justify-between my-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx("label",{htmlFor:"",children:"Attachments (you can select multiple files)"}),e.jsxs("div",{className:"border bg-white rounded-lg py-1.5 my-1 flex items-center",children:[e.jsx("div",{className:"absolute inset-y-1 top-7 left-0 rounded-lg px-2 py-2  flex items-center  bg-gray-300  pointer-events-none outline-none text-black",children:"Choose Files"}),e.jsx("input",{accept:".jpg,.jpeg,.png,.gif",type:"file",className:"opacity-0 w-28 text-black ",id:"file-input",multiple:!0,onChange:t=>G(Array.from(t.target.files))}),e.jsx("span",{className:"absolute top-12 -translate-y-1/2 lg:right-2 md:right-4 right-16 text-normal text-black",id:"file-name",children:h.length>0?`${h.length} Files Selected`:"No Files Chosen"})]})]}),e.jsxs("div",{className:"grid mx-2",children:[e.jsxs("label",{htmlFor:"",children:["Ticket status",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsxs("div",{className:"relative inline-block  ",children:[e.jsxs("select",{defaultValue:"",className:"  text-black lg:w-72 md:w-72 w-full px-2 py-1.5 outline-none rounded-md ",...N("status"),children:[e.jsx("option",{value:"",disabled:!0,children:"select Status"}),F&&F.map((t,s)=>e.jsx("option",{value:t.status,children:t.status},s))]}),e.jsx("div",{className:"absolute inset-y-0  lg:bottom-2 md:bottom-2 right-0  flex items-center pr-5 bg-gray-300 px-4 rounded-lg pointer-events-none outline-none",children:e.jsx(O,{className:"text-black text-2xl"})}),p.status&&e.jsx("p",{className:"text-red-700",children:(M=p.status)==null?void 0:M.message})]})]})]})]}),e.jsx("button",{type:"submit",className:"mx-2 bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-10 py-2 my-4",children:"Submit"})]})]}):e.jsxs("p",{className:"text-xl my-16 font-poppins text-center",children:[" ","Reply Permission Denied"]})}):e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-lg mt-3 mb-2 ",children:"Support"}),e.jsxs("p",{className:"text-normal font-normal my-4",children:["Date : ",ne(a==null?void 0:a.updatedAt)]}),e.jsxs("span",{className:"flex items-center gap-2 my-3 flex-wrap",children:[e.jsx("p",{className:"text-normal font-normal ",children:"Attachments :"}),L.map((t,s)=>e.jsx("span",{onClick:()=>$(t),children:e.jsx("img",{src:t,alt:"Admin Attachment",className:"w-10 h-10 cursor-pointer rounded-md"})},s))]}),e.jsx("p",{className:"text-normal font-normal my-2",children:"Description :"}),e.jsx("p",{className:"text-normal mb-5",children:a==null?void 0:a.desc2}),e.jsx("hr",{className:"my-3 mb-12"})]})]}),e.jsx(oe,{isOpen:B,onClose:Y,imageUrl:z})]})})};export{xe as default};
