(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6477:function(e,i){"use strict";self.Headers,self.Request,self.Response,self.fetch},5557:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4393)}])},4393:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return pages}});var a=t(5893),s=t(7294),n=t(9008),r=t.n(n);t(4298),t(188);var l=t(7530),o=t(1664),c=t.n(o),Home_ServiziHome=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"servizi-section  mt-4 pt-3 mt-xl-3 pt-md-3 pt-xl-5",style:{borderBottom:"1px solid",borderBottomColor:"rgba(0,0,0,.1)"},children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("h2",{className:"home-title text-center mb-5 mb-lg-3",id:"entry-title",children:"Servizi"})}),(0,a.jsx)("div",{className:"row align-items-center",children:[{src:"../images/conversioni.webp",alt:"Conversioni serrature porte blindate",width:"400",height:"400",url:"servizi/conversioni-serrature-e-porte-blindate"},{src:"./images/zanzariera.webp",alt:"Fornitura e installazioni zanzariere",width:"400",height:"400",url:"servizi/fornitura-e-installazioni-zanzariere"},{src:"./images/riparazioni.webp",alt:"Riparazioni, sostituzioni basculanti e sezionali",width:"400",height:"400",url:"servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali"},{src:"./images/lucchetto.webp",alt:"Sostituzione serrature di tutti i tipi",width:"400",height:"400",url:"servizi/sostituzione-serrature-di-tutti-i-tipi"}].map(e=>(0,a.jsxs)("div",{className:"col-sm-6 col-xl-3 text-center p-lg-4 mb-3",children:[(0,a.jsx)(c(),{href:"./".concat(e.url),children:(0,a.jsx)("figure",{className:"service-item  mb-3 mb-xl-4  figure",children:(0,a.jsx)("img",{className:"mx-auto w-100 mb-0",width:e.width,height:e.height,alt:e.alt,src:e.src,loading:"lazy"})})}),(0,a.jsx)("h3",{className:"text-uppercase px-md-5 px-xl-0 mb-xl-4 fw-bold",children:e.alt}),(0,a.jsx)(c(),{className:"text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-3 mb-5 mx-auto",href:"./".concat(e.url),children:"Scopri di pi\xf9"})]},e.alt))})]})})})},Home_ChisonoHome=function(){return(0,a.jsx)("div",{className:"chisiamo-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5",id:"chi-sono",style:{borderBottom:"1px solid",borderBottomColor:"rgba(0,0,0,.1)"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-lg-6 ps-lg-5",children:[(0,a.jsx)("h2",{className:"mb-3",children:"Chi sono"}),(0,a.jsxs)("p",{children:["Con un'esperienza consolidata in 25 anni di attivit\xe0 concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a:  ",(0,a.jsx)("strong",{children:"porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione."})]}),(0,a.jsx)("p",{children:"Competenza, professionalit\xe0 e rapidit\xe0 di intervento sono i miei punti di forza unite a disponibilit\xe0 nei confronti dei clienti che necessitano di sbloccare e sostituire serrature o di interventi di manutenzione ordinaria."}),(0,a.jsx)("p",{children:"Eseguo anche sopralluoghi e consulenze per la sicurezza della vostra casa."}),(0,a.jsxs)("p",{children:["E per le urgenze, offro servizio di ",(0,a.jsx)("strong",{children:"Pronto Intervento"}),"."]})]}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("figure",{className:"mb-3 mb-xl-4  figure",children:(0,a.jsx)("img",{width:"100%",height:"100%",alt:"Chi sono",src:"../images/chi-sono.webp",loading:"lazy",className:"mx-auto w-100 mb-0 figure-img img-fluid"})})})]})})})};t(6477);var useFormspark=function(e){var i=(0,s.useState)(!1),t=i[0],a=i[1];return[function(i){return new Promise(function(t,s){var n="https://submit-form.com/"+e.formId,r=JSON.stringify(i);a(!0),fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:r}).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){s(e)}).finally(function(){a(!1)})})},t]},Home_ContactForm=function(){let[e,i]=useFormspark({formId:"vReIQaj8"}),[t,n]=(0,s.useState)(""),[r,l]=(0,s.useState)(""),[o,c]=(0,s.useState)(""),[d,m]=(0,s.useState)(""),[h,u]=(0,s.useState)(!1),[x,g]=(0,s.useState)(!1),onSubmit=async i=>{i.preventDefault(),await e({name:t,email:r,oggetto:o,message:d}),n(""),l(""),c(""),m(""),u(!h),alert("Form submitted")};return(0,s.useEffect)(()=>{let loader=()=>{let e=document.createElement("script"),i=document.getElementsByTagName("script")[0];e.src="https://cdn.iubenda.com/iubenda.js",i.parentNode.insertBefore(e,i)};window.addEventListener?window.addEventListener("load",loader,!1):window.attachEvent?window.attachEvent("onload",loader):window.onload=loader},[]),(0,a.jsxs)("form",{onSubmit:onSubmit,children:[(0,a.jsxs)("div",{className:"twoFlex d-flex justify-content-between",children:[(0,a.jsxs)("div",{className:"inputHolder",children:[(0,a.jsx)("label",{htmlFor:"Name",children:"Nome e cognome *"}),(0,a.jsx)("input",{id:"Name",name:"Nome e Cognome",placeholder:"Mario Rossi",value:t,onChange:e=>n(e.target.value),required:!0,minLength:3,maxLength:40})]}),(0,a.jsxs)("div",{className:"inputHolder",children:[(0,a.jsx)("label",{htmlFor:"Email",children:"Email *"}),(0,a.jsx)("input",{id:"Email",name:"E-mail",placeholder:"mario.rossi@email.ext",value:r,onChange:e=>l(e.target.value),required:!0,pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_-]+\\.[a-zA-Z0-9-.]{2,61}$",maxLength:40})]})]}),(0,a.jsxs)("div",{className:"inputHolder",children:[(0,a.jsx)("label",{htmlFor:"Oggetto",children:"Oggetto"}),(0,a.jsx)("input",{id:"Oggetto",name:"Oggetto",value:o,onChange:e=>c(e.target.value),minLength:4,maxLength:40})]}),(0,a.jsxs)("div",{className:"inputHolder",children:[(0,a.jsx)("label",{htmlFor:"Message",children:"Messaggio *"}),(0,a.jsx)("textarea",{id:"Message",name:"FreeText",value:d,onChange:e=>m(e.target.value),minLength:2,maxLength:300})]}),(0,a.jsxs)("div",{className:"privacyHolder",children:[(0,a.jsx)("input",{id:"myCheckbox",type:"checkbox",required:!0,value:h,checked:x,onChange:e=>{g(e.target.checked)}}),(0,a.jsxs)("label",{htmlFor:"myCheckbox",children:["Acconsento al trattamento dei miei dati in accordo alla vostra ",(0,a.jsx)("a",{href:"https://www.iubenda.com/privacy-policy/18645684",className:"iubenda-nostyle no-brand iubenda-embed",title:"Privacy Policy ",children:"informativa privacy"})]})]}),(0,a.jsx)("div",{className:"submitHolder",children:(0,a.jsx)("button",{type:"submit",disabled:!x||i,children:"Invia"})})]})},Home_ContattiHome=function(){return(0,a.jsx)("div",{className:"contatti-section  my-4 py-3 my-xl-3 py-md-3 py-xl-5",id:"contatti",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-lg-6",children:[(0,a.jsx)("h2",{className:"mb-5 mb-lg-3",children:"Contatti"}),(0,a.jsxs)("div",{className:"ghiga-info",children:[(0,a.jsxs)("div",{className:"ghiga-wa mb-4",children:[(0,a.jsx)("h3",{children:"WhatsApp"}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://wa.me/+393486723145",target:"_blank",rel:"noreferrer",children:"+39 348 672 3145"})})]}),(0,a.jsxs)("div",{className:"ghiga-cell mb-4",children:[(0,a.jsx)("h3",{children:"Telefono"}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"tel:+393486723145",target:"_blank",rel:"noreferrer",children:"+39 348 672 3145"})})]}),(0,a.jsxs)("div",{className:"ghiga-mail mb-4",children:[(0,a.jsx)("h3",{children:"Indirizzo e-mail"}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"mailto:info@ghirardellinicola.it",target:"_blank",rel:"noreferrer",children:"info@ghirardellinicola.it"})})]}),(0,a.jsxs)("div",{className:"ghiga-map",children:[(0,a.jsx)("h3",{children:"Area servita"}),(0,a.jsx)("p",{style:{marginLeft:"50px",textAlign:"left",fontSize:"18px",fontWeight:"600",color:"#fdb614"},children:"Vicenza e provincia"})]})]})]}),(0,a.jsx)("div",{className:"col-lg-6 ps-lg-5",children:(0,a.jsx)("iframe",{title:"provincia-map",loading:"lazy",style:{border:"0"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357096.3182922142!2d11.20515927307625!3d45.634452902968285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778cad6a732b9e9%3A0x307098715907ee0!2sProvince+of+Vicenza!5e0!3m2!1sen!2sit!4v1521383198123",width:"100%",height:"450"})})]}),(0,a.jsx)("div",{className:"row align-items-center mt-3",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("h2",{className:"my-5",children:"Chiedi preventivo"}),(0,a.jsx)(Home_ContactForm,{})]})})]})})},pages=()=>(0,a.jsxs)(l.Z,{home:!0,children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:l.y})}),(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:"home-page",children:[(0,a.jsx)("div",{className:"container-fluid home-hero text-center",children:(0,a.jsx)("figure",{className:"furgone mb-0 figure",children:(0,a.jsx)("img",{className:"mx-auto w-100 mb-0",width:697,height:500,alt:"Ghirardelli furgone",src:"./images/Furgone.webp"})})}),(0,a.jsx)(Home_ServiziHome,{}),(0,a.jsx)(Home_ChisonoHome,{}),(0,a.jsx)(Home_ContattiHome,{})]})}),(0,a.jsx)("footer",{})]})}},function(e){e.O(0,[267,549,530,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);