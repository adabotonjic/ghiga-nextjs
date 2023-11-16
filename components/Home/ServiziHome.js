import React from 'react'; 
import Link from 'next/link'; 


function ServiziHome() {
  const subPageList = [
    { src: '../images/conversioni.webp', alt: 'Conversioni serrature porte blindate', width: '400', height:'400', url:'servizi/conversioni-serrature-porte-blindate' },
    { src: './images/zanzariera.webp', alt: 'Fornitura e installazioni zanzariere', width: '400', height:'400', url:'servizi/fornitura-e-installazione-zanzariere' },
    { src: './images/riparazioni.webp', alt: 'Riparazioni, sostituzioni basculanti e sezionali', width: '400', height:'400', url:'servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali' },
    { src: './images/lucchetto.webp', alt: 'Sostituzione serrature di tutti i tipi', width: '400', height:'400', url:'servizi/sostituzioni-serrature-di-tutti-i-tipi' },
  ];

  return (
    <>

        <div 
        className="servizi-section  mt-4 pt-3 mt-xl-3 pt-md-3 pt-xl-5" 
        style={{borderBottom:'1px solid', borderBottomColor: 'rgba(0,0,0,.1)'}}>
          <div className="container">

            <div className="row">
              <h2 className="home-title text-center mb-5 mb-lg-3" id="entry-title">
                Servizi
              </h2>
            </div>

            <div className="row align-items-center">
            {subPageList.map((subPageId) => (
                <div className="col-sm-6 col-xl-3 text-center p-lg-4 mb-3" key={subPageId.alt}>
                <a href={`./${subPageId.url}`}>
                    <figure className="service-item  mb-3 mb-xl-4  figure">
                      <img className='mx-auto w-100 mb-0'
                        width={subPageId.width}
                        height={subPageId.height}
                        alt={subPageId.alt}
                        src={subPageId.src}
                        loading="lazy" />
                      </figure>
                </a>
                <h3 className="text-uppercase px-md-5 px-xl-0 mb-xl-4 fw-bold">{subPageId.alt}</h3>
                <a className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-3 mb-5 mx-auto" href={`./${subPageId.url}`}>
                  Scopri di più
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
};
export default ServiziHome;