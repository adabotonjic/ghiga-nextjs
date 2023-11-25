import Head from 'next/head';
import Layout from '../../components/layout/layout';
import Link from 'next/link'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Figure from 'react-bootstrap/Figure';



const ZanzarierePage = () => {

  return (
    <Layout >
    <Head>
      <title>Fornitura e Installazioni Zanzariere - Ghirardelli Nicola - Vicenza</title>
      <link rel="canonical" href="https://www.ghirardellinicola.it/servizi/fornitura-e-installazione-zanzariere/" />
    </Head>
    <main className="page-zanzariere">
        <div className="page-title-wrap mb-0 mb-xl-3">
        <div className="container">
          <div className="row">
            <h1 className="page-title fw-bold" id="entry-title">
              Fornitura e Installazioni Zanzariere
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container my-3 my-xl-5">
        <div className='row'>
          <div className='col-lg-6 pe-lg-5'>
            <div className="row">
              <div className='col-4 col-md-6 col-xl-4'>
                <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src='/images/zanzariera11.webp'
                      loading="lazy"
                  />
                  </Figure>
              </div>
              <div className='col-4 col-md-6 col-xl-4'>
                <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src='/images/zanzariera21.webp'
                      loading="lazy"
                  />
                  </Figure>
              </div>
              <div className='col-4 col-md-8 col-xl-4'>
              <Figure className='mb-3 mb-xl-4 '>
                  <Figure.Image
                  className='mx-auto w-100 mb-0'
                      width='100%'
                      height='100%'
                      alt='Zanzariera'
                      src='/images/zanzariera31.webp'
                      loading="lazy"
                  />
                  </Figure>
              </div>
            </div>
            
            </div>
            <div className='col-lg-6'>
            <p>Con l'installazione di <strong>zanzariere ai serramenti</strong> potrete eliminare dalla vostra abitazione la fastidiosa presenza di zanzare e altri insetti.</p>
            <p><strong>Contattami per un intervento, un sopralluogo o per un preventivo,&nbsp;sarò a vostra disposizione con cordialità e professionalità.</strong></p>

            <p><a className="text-white text-decoration-none main-btn fw-bold py-2 px-3 mt-5 mb-3" href="/#chiedi-preventivo">Chiedi preventivo</a></p>
            <br></br>
            </div>
        </div>
       
      </div>
      
    </main>
    <footer></footer>
    </Layout>
  );
};

export default ZanzarierePage;
