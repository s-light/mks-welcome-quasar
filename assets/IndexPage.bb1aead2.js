import{c as g,e as o,f as a,a as i,h as p,j as h,D as d,g as f,I as m,J as y,K as x,R as v}from"./index.5615d646.js";import{h as C}from"./render.766263e5.js";var _=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:r}){const{proxy:{$q:t}}=f(),e=o(h,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(o(d,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const c=i(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof s.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return s.styleFn(n,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":t.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":t.screen.height-n+"px"}}),l=i(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:l.value,style:c.value},C(r.default))}}),P="/assets/quasar-logo-vertical.55e9c854.svg";const q=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(s){return(r,t)=>(m(),y(_,{class:"flex flex-center"},{default:x(()=>t[0]||(t[0]=[v("img",{alt:"Quasar logo",src:P,style:{width:"200px",height:"200px"}},null,-1)])),_:1}))}});export{q as default};
