(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6477:function(e,i){"use strict";self.Headers,self.Request,self.Response,self.fetch},5557:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2308)}])},4514:function(e,i,t){"use strict";t.d(i,{Z:function(){return Home_ContattiHome}});var n=t(5893),a=t(7294);t(6477);var useFormspark=function(e){var i=(0,a.useState)(!1),t=i[0],n=i[1];return[function(i){return new Promise(function(t,a){var s="https://submit-form.com/"+e.formId,r=JSON.stringify(i);n(!0),fetch(s,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:r}).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){a(e)}).finally(function(){n(!1)})})},t]},Home_ContactForm=function(){let[e,i]=useFormspark({formId:"2IYJPIRfA"}),[t,s]=(0,a.useState)(""),[r,l]=(0,a.useState)(""),[o,c]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[h,u]=(0,a.useState)(!1),[x,g]=(0,a.useState)(!1),onSubmit=async i=>{i.preventDefault(),await e({name:t,email:r,oggetto:o,message:d}),s(""),l(""),c(""),m(""),u(!h),alert("Form submitted")};return(0,a.useEffect)(()=>{let loader=()=>{let e=document.createElement("script"),i=document.getElementsByTagName("script")[0];e.src="https://cdn.iubenda.com/iubenda.js",i.parentNode.insertBefore(e,i)};window.addEventListener?window.addEventListener("load",loader,!1):window.attachEvent?window.attachEvent("onload",loader):window.onload=loader},[]),(0,n.jsxs)("form",{onSubmit:onSubmit,children:[(0,n.jsxs)("div",{className:"twoFlex d-flex justify-content-between",children:[(0,n.jsxs)("div",{className:"inputHolder",children:[(0,n.jsx)("label",{htmlFor:"Name",children:"Nome e cognome *"}),(0,n.jsx)("input",{id:"Name",name:"Nome e Cognome",placeholder:"Mario Rossi",value:t,onChange:e=>s(e.target.value),required:!0,minLength:3,maxLength:40})]}),(0,n.jsxs)("div",{className:"inputHolder",children:[(0,n.jsx)("label",{htmlFor:"Email",children:"Email *"}),(0,n.jsx)("input",{id:"Email",name:"E-mail",placeholder:"mario.rossi@email.ext",value:r,onChange:e=>l(e.target.value),required:!0,pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+\\.[a-zA-Z0-9-.]{2,61}$",maxLength:40})]})]}),(0,n.jsxs)("div",{className:"inputHolder",children:[(0,n.jsx)("label",{htmlFor:"Oggetto",children:"Oggetto"}),(0,n.jsx)("input",{id:"Oggetto",name:"Oggetto",value:o,onChange:e=>c(e.target.value),minLength:4,maxLength:40})]}),(0,n.jsxs)("div",{className:"inputHolder",children:[(0,n.jsx)("label",{htmlFor:"Message",children:"Messaggio *"}),(0,n.jsx)("textarea",{id:"Message",name:"FreeText",value:d,onChange:e=>m(e.target.value),minLength:2,maxLength:300})]}),(0,n.jsxs)("div",{className:"privacyHolder",children:[(0,n.jsx)("input",{id:"myCheckbox",type:"checkbox",required:!0,value:h,checked:x,onChange:e=>{g(e.target.checked)}}),(0,n.jsxs)("label",{htmlFor:"myCheckbox",children:["Acconsento al trattamento dei miei dati in accordo alla vostra ",(0,n.jsx)("a",{href:"https://www.iubenda.com/privacy-policy/18645684",className:"iubenda-nostyle no-brand iubenda-embed",title:"Privacy Policy ",children:"informativa privacy"})]})]}),(0,n.jsx)("div",{className:"submitHolder",children:(0,n.jsx)("button",{type:"submit",disabled:!x||i,children:"Invia"})})]})},Home_ContattiHome=function(){let[e,i]=(0,a.useState)(!1),t=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&!e&&i(!0)})},{threshold:.1});return t.current&&n.observe(t.current),()=>{t.current&&n.unobserve(t.current)}},[e]),(0,n.jsx)("div",{className:"contatti-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5",id:"contatti",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsxs)("div",{className:"col-lg-6",children:[(0,n.jsx)("h2",{className:"mb-5 mb-lg-3",children:"Contatti"}),(0,n.jsxs)("div",{className:"ghiga-info",children:[(0,n.jsxs)("div",{className:"ghiga-wa mb-4",children:[(0,n.jsx)("h3",{children:"WhatsApp"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://wa.me/+393486723145",target:"_blank",rel:"noreferrer",children:"+39 348 672 3145"})})]}),(0,n.jsxs)("div",{className:"ghiga-cell mb-4",children:[(0,n.jsx)("h3",{children:"Telefono"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"tel:+393486723145",target:"_blank",rel:"noreferrer",children:"+39 348 672 3145"})})]}),(0,n.jsxs)("div",{className:"ghiga-mail mb-4",children:[(0,n.jsx)("h3",{children:"Indirizzo e-mail"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"mailto:info@ghirardellinicola.it",target:"_blank",rel:"noreferrer",children:"info@ghirardellinicola.it"})})]}),(0,n.jsxs)("div",{className:"ghiga-map",children:[(0,n.jsx)("h3",{children:"Area servita"}),(0,n.jsx)("p",{style:{marginLeft:"50px",textAlign:"left",fontSize:"18px",fontWeight:"600",color:"#fdb614"},children:"Vicenza e provincia"})]})]})]}),(0,n.jsx)("div",{ref:t,className:"col-lg-6 ps-lg-5",children:e&&(0,n.jsx)("iframe",{title:"provincia-map",loading:"lazy",style:{border:"0"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357096.3182922142!2d11.20515927307625!3d45.634452902968285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778cad6a732b9e9%3A0x307098715907ee0!2sProvince+of+Vicenza!5e0!3m2!1sen!2sit!4v1521383198123",width:"100%",height:"450"})})]}),(0,n.jsx)("div",{className:"row align-items-center mt-3",children:(0,n.jsxs)("div",{className:"col-12",id:"chiedi-preventivo",children:[(0,n.jsx)("h2",{className:"my-5",children:"Chiedi preventivo"}),(0,n.jsx)(Home_ContactForm,{})]})})]})})}},2308:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return pages}});var n=t(5893);t(7294);var a=t(9008),s=t.n(a);t(4298),t(188);var r=t(7530);t(1664);var Home_ServiziHome=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"servizi-section  mt-4 pt-3 mt-xl-3 pt-md-3 pt-xl-5",style:{borderBottom:"1px solid",borderBottomColor:"rgba(0,0,0,.1)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("h2",{className:"home-title text-center mb-5 mb-lg-3",id:"entry-title",children:"Servizi"})}),(0,n.jsx)("div",{className:"row align-items-center",children:[{src:"../images/conversioni.webp",alt:"Conversioni serrature porte blindate",width:"400",height:"400",url:"servizi/conversioni-serrature-porte-blindate"},{src:"./images/zanzariera.webp",alt:"Fornitura e installazioni zanzariere",width:"400",height:"400",url:"servizi/fornitura-e-installazione-zanzariere"},{src:"./images/riparazioni.webp",alt:"Riparazioni, sostituzioni basculanti e sezionali",width:"400",height:"400",url:"servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali"},{src:"./images/lucchetto.webp",alt:"Sostituzione serrature di tutti i tipi",width:"400",height:"400",url:"servizi/sostituzioni-serrature-di-tutti-i-tipi"}].map(e=>(0,n.jsxs)("div",{className:"col-sm-6 col-xl-3 text-center p-lg-4 mb-3",children:[(0,n.jsx)("a",{href:"./".concat(e.url),children:(0,n.jsx)("figure",{className:"service-item  mb-3 mb-xl-4  figure",children:(0,n.jsx)("img",{className:"mx-auto w-100 mb-0",width:e.width,height:e.height,alt:e.alt,src:e.src,loading:"lazy"})})}),(0,n.jsx)("h3",{className:"text-uppercase px-md-5 px-xl-0 mb-xl-4 fw-bold",children:e.alt}),(0,n.jsx)("a",{className:"text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-3 mb-5 mx-auto",href:"./".concat(e.url),children:"Scopri di pi\xf9"})]},e.alt))})]})})})},Home_ChisonoHome=function(){return(0,n.jsx)("div",{className:"chisiamo-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5",id:"chi-sono",style:{borderBottom:"1px solid",borderBottomColor:"rgba(0,0,0,.1)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsxs)("div",{className:"col-lg-6 ps-lg-5",children:[(0,n.jsx)("h2",{className:"mb-3",children:"Chi sono"}),(0,n.jsxs)("p",{children:["Con un'esperienza consolidata in 25 anni di attivit\xe0 concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a:  ",(0,n.jsx)("strong",{children:"porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione."})]}),(0,n.jsx)("p",{children:"Competenza, professionalit\xe0 e rapidit\xe0 di intervento sono i miei punti di forza unite a disponibilit\xe0 nei confronti dei clienti che necessitano di sbloccare e sostituire serrature o di interventi di manutenzione ordinaria."}),(0,n.jsx)("p",{children:"Eseguo anche sopralluoghi e consulenze per la sicurezza della vostra casa."}),(0,n.jsxs)("p",{children:["E per le urgenze, offro servizio di ",(0,n.jsx)("strong",{children:"Pronto Intervento"}),"."]})]}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("figure",{className:"mb-3 mb-xl-4  figure",children:(0,n.jsx)("img",{width:"100%",height:"100%",alt:"Chi sono",src:"../images/chi-sono.webp",loading:"lazy",className:"mx-auto w-100 mb-0 figure-img img-fluid"})})})]})})})},l=t(4514),pages=()=>(0,n.jsxs)(r.Z,{home:!0,children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:r.y})}),(0,n.jsx)("main",{children:(0,n.jsxs)("div",{className:"home-page",children:[(0,n.jsx)("div",{className:"container-fluid home-hero text-center",children:(0,n.jsx)("figure",{className:"furgone mb-0 figure",children:(0,n.jsx)("img",{className:"mx-auto w-100 mb-0",width:697,height:500,alt:"Ghirardelli furgone",src:"./images/Furgone.webp"})})}),(0,n.jsx)(Home_ServiziHome,{}),(0,n.jsx)(Home_ChisonoHome,{}),(0,n.jsx)(l.Z,{})]})}),(0,n.jsx)("footer",{})]})}},function(e){e.O(0,[267,906,664,530,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);