import{k as $,r as N,u as U,j as o,A as p,d as x,B as w}from"./index-cr5avmQX.js";import{A as E}from"./index-Cdvyeb2W.js";const k=()=>{const{state:v}=$(),[A,h]=N.useState(!1),{jsonData:c,mainTopic:n,type:u}=v||{},y=U();N.useEffect(()=>{c||y("/create")},[]);const L=()=>{y("/create")};function C(){const t=c[n][0].subtopics[0];if(u==="video & text course"){const s=`${t.title} ${n} in english`;I(s,t.title),h(!0)}else{const s=`Explain me about this subtopic of ${n} with examples :- ${t.title}. Please Strictly Don't Give Additional Resources And Images.`,a=`Example of ${t.title} in ${n}`;h(!0),S(s,a)}}async function S(e,t){const s={prompt:e};try{const a=p+"/api/generate",d=(await x.post(a,s)).data.text;try{j(d,t)}catch{S(e,t)}}catch{S(e,t)}}async function j(e,t){const s={prompt:t};try{const a=p+"/api/image",r=await x.post(a,s);try{const i=r.data.url;T(i,e),h(!1)}catch{j(e,t)}}catch{j(e,t)}}async function T(e,t){c[n][0].subtopics[0].theory=t,c[n][0].subtopics[0].image=e;const s=localStorage.getItem("user"),a=localStorage.getItem("fname"),r=localStorage.getItem("email"),i=localStorage.getItem("phone"),d=localStorage.getItem("lname"),m=JSON.stringify(c),f=p+"/api/course",l=await x.post(f,{user:s,fname:a,lname:d,email:r,phone:i,content:m,type:u,mainTopic:n});l.data.success?(w.success(l.data.message),localStorage.setItem("courseId",l.data.courseId),localStorage.setItem("first",l.data.completed),localStorage.setItem("jsonData",JSON.stringify(c)),y("/content",{state:{jsonData:c,mainTopic:n.toUpperCase(),type:u.toLowerCase(),courseId:l.data.courseId,end:""}})):T(e,t)}async function b(e,t){c[n][0].subtopics[0].theory=t,c[n][0].subtopics[0].youtube=e;const s=localStorage.getItem("user"),a=localStorage.getItem("fname"),r=localStorage.getItem("email"),i=localStorage.getItem("phone"),d=localStorage.getItem("lname"),m=JSON.stringify(c),f=p+"/api/course",l=await x.post(f,{user:s,fname:a,lname:d,email:r,phone:i,content:m,type:u,mainTopic:n});l.data.success?(w.success(l.data.message),localStorage.setItem("courseId",l.data.courseId),localStorage.setItem("first",l.data.completed),localStorage.setItem("jsonData",JSON.stringify(c)),y("/content",{state:{jsonData:c,mainTopic:n.toUpperCase(),type:u.toLowerCase(),courseId:l.data.courseId,end:""}})):b(e,t)}async function I(e,t){const s={prompt:e};try{const a=p+"/api/yt",r=await x.post(a,s);try{const i=r.data.url;D(i,t)}catch{I(e,t)}}catch{I(e,t)}}async function D(e,t){const s={prompt:e};try{const a=p+"/api/transcript",r=await x.post(a,s);try{const f=`Summarize this theory in a teaching way and :- ${r.data.url.map(l=>l.text).join(" ")}.`;g(f,e)}catch{const d=`Explain me about this subtopic of ${n} with examples :- ${t}. Please Strictly Don't Give Additional Resources And Images.`;g(d,e)}}catch{const r=`Explain me about this subtopic of ${n} with examples :- ${t}. Please Strictly Don't Give Additional Resources And Images.`;g(r,e)}}async function g(e,t){const s={prompt:e};try{const a=p+"/api/generate",d=(await x.post(a,s)).data.text;try{const m=d;h(!1),b(t,m)}catch{g(e,t)}}catch{g(e,t)}}const R=e=>{try{return o.jsx("div",{children:e&&e.map(t=>o.jsxs("div",{children:[o.jsx("h3",{className:"font-poppins text-lg font-medium my-1.5",children:t.title}),o.jsx("div",{children:t.subtopics.map(s=>o.jsx("p",{className:"font-poppins text-sm font-extralight my-0.1 mx-1",children:s.title},s.title))})]},t.title))})}catch{return o.jsx("div",{children:e.map(s=>o.jsxs("div",{children:[o.jsx("h3",{className:"font-poppins text-lg font-medium my-1.5",children:s.title}),o.jsx("div",{children:s.subtopics.map(a=>o.jsx("p",{className:"font-poppins text-sm font-extralight my-0.1 mx-1",children:a.title},a.title))})]},s.title))})}};return o.jsxs("div",{className:" text-lg font-poppins font-extralight mx-12 my-5",children:[o.jsx("p",{className:"text-xl font-medium my-1 mt-6",children:n.toUpperCase()}),o.jsx("p",{className:"text-normal my-2",children:"List of Topics & subtopics this course will cover"}),c&&n in c?R(c[n]):o.jsx("p",{className:"text-red-500",children:"No topics available for the selected main topic."}),o.jsxs("div",{className:" flex flex-col gap-3 mt-5",children:[o.jsx("button",{className:" text-base bg-white text-black w-48 py-2  font-normal ",onClick:L,children:"Go Back"}),o.jsx("button",{className:" text-base bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] w-48 py-2  font-normal ",onClick:C,children:A?o.jsxs("span",{className:"flex justify-center gap-3",children:[" ",o.jsx(E,{className:"h-6 w-6 animate-spin"})," ",o.jsx("p",{children:"Generating ...."})]}):"Generate Course"})]})]})};export{k as default};
