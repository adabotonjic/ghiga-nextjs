"use strict";(()=>{var e={};e.id=290,e.ids=[290],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},31:(e,l,a)=>{a.r(l),a.d(l,{config:()=>p,default:()=>c,routeModule:()=>$});var t={};a.r(t),a.d(t,{default:()=>handler});var s=a(1802),o=a(7153),r=a(6249);let i="https://www.ghirardellinicola.it",n=new Date,u=n.toJSON(),d=[{name:"servizi"},{name:"contatti"}],m=[{slug:"conversioni-serrature-porte-blindate"},{slug:"fornitura-e-installazione-zanzariere"},{slug:"riparazioni-e-sostituzioni-basculanti-e-sezionali"},{slug:"sostituzioni-serrature-di-tutti-i-tipi"}];function handler(e,l){l.statusCode=200,l.setHeader("Content-Type","text/xml"),l.setHeader("Cache-control","stale-while-revalidate, s-maxage=3600");let a=`<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>${i}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[0].name}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[0].name}/${m[0].slug}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[0].name}/${m[1].slug}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[0].name}/${m[2].slug}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[0].name}/${m[3].slug}/</loc>
        <lastmod>${u}</lastmod>
      </url>
      <url>
        <loc>${i}/${d[1].name}/</loc>
        <lastmod>${u}</lastmod>
      </url>
  
      </urlset>`;l.end(a)}let c=(0,r.l)(t,"default"),p=(0,r.l)(t,"config"),$=new s.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/sitemap",pathname:"/api/sitemap",bundlePath:"",filename:""},userland:t})}};var l=require("../../webpack-api-runtime.js");l.C(e);var __webpack_exec__=e=>l(l.s=e),a=l.X(0,[222],()=>__webpack_exec__(31));module.exports=a})();