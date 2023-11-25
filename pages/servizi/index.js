import Link from 'next/link'; 
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css'; 

import Figure from 'react-bootstrap/Figure';


function Servizi() {
  const subPageList = [
    { src: '/images/conversioni.webp', alt: 'Conversioni serrature e porte blindate', width: '400', height:'400', url:'servizi/conversioni-serrature-porte-blindate' },
    { src: '/images/zanzariera.webp', alt: 'Fornitura e installazioni zanzariere', width: '400', height:'400', url:'servizi/fornitura-e-installazione-zanzariere' },
    { src: '/images/riparazioni.webp', alt: 'Riparazioni e sostituzioni basculanti e sezionali', width: '400', height:'400', url:'servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali' },
    { src: '/images/lucchetto.webp', alt: 'Sostituzione serrature di tutti i tipi', width: '400', height:'400', url:'servizi/sostituzioni-serrature-di-tutti-i-tipi' },
  ];

  return (
    <Layout >
    <Head>
      <title>Servizi - Ghirardelli Nicola - Vicenza</title>
      <link rel="canonical" href="https://www.ghirardellinicola.it/servizi/" />
    </Head>
    <main>
        <div className="page-title-wrap">
          <div className="container">
            <div className="row">
              <h1 className="page-title fw-bold" id="entry-title">
                Servizi
              </h1>
            </div>
          </div>
        </div>
        <div className="page-content-wrap mt-5 pt-md-3 pt-xl-5">
          <div className="container">
            <div className="row align-items-center">
            {subPageList.map((subPageId) => (
                <div className="col-6 col-lg-4 text-center" key={subPageId.alt}>
                <Link href={`./${subPageId.url}`}>
                  <Figure className='service-item mb-0 mb-5'>
                    <Figure.Image
                    className='mx-auto w-100 mb-0'
                        width={subPageId.width}
                        height={subPageId.height}
                        alt={subPageId.alt}
                        src={subPageId.src}
                        loading="lazy"
                    />
                    </Figure>
                </Link>
              </div>
            ))}
              <div className="col-6 col-lg-4 text-center">
                  <div className='service-item noimg mx-auto mb-5'>
                    <h3>Manutenzioni condominiali</h3>
                  </div>
                </div>
                <div className="col-6 col-lg-4 text-center">
                <div className='service-item noimg mx-auto mb-5'>
                  <h3>Fornitura e posa in opera di cassette postali di tutti i tipi</h3>
                </div>
              </div>
          </div>
        </div>
      </div>

    </main>
    <footer></footer>
    </Layout>
  );
};
export default Servizi;