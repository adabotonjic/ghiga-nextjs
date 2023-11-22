
const URL = "https://www.ghirardellinicola.it";

let date = new Date();
const lastModified = date.toJSON();
const parentPages = [
  { name: 'servizi'},
  { name: 'contatti'},
];

const childrenServizi = [
  { slug: 'conversioni-serrature-porte-blindate'},
  { slug: 'fornitura-e-installazione-zanzariere'},
  { slug: 'riparazioni-e-sostituzioni-basculanti-e-sezionali'},
  { slug: 'sostituzioni-serrature-di-tutti-i-tipi' },
];

export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>${URL}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[0].name}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[0].name}/${childrenServizi[0].slug}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[0].name}/${childrenServizi[1].slug}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[0].name}/${childrenServizi[2].slug}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[0].name}/${childrenServizi[3].slug}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
      <url>
        <loc>${URL}/${parentPages[1].name}/</loc>
        <lastmod>${lastModified}</lastmod>
      </url>
  
      </urlset>`
  
    res.end(xml)
  }