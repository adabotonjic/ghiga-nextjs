import React from 'react';

function Footer() {
  return (
    <footer className='mb-5 mb-lg-0'>
      <div className="container">
        <div className="row py-5" style={{borderBottom:'1px solid rgba(255,255,255, 0.7)' }}>
          <div className="col-lg-5">
          <figure className='mb-3 figure'>
              <img
              className='mx-auto w-100 mb-0'
                  width='100%'
                  height='100%'
                  alt='Footer logo'
                  src='/images/footer-logo.png'
                  loading="lazy"
              />
              </figure>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-sm-6">
                <p id="ghiga-nome" className='fw-bold'>Ghirardelli Nicola Fabbro</p>
                <p >Via Nicolò Vicentino, 48<br></br>
                36100 Vicenza<br></br>
                P.IVA: 02455470241<br></br>
                CF: GHRNCL70L07L840C</p>
              </div>
              <div className="col-sm-6">
              Cellulare: <a href="tel:+393486723145" className="text-undeline">+39 348 672 3145</a><br></br>
              E-mail: <a href="mailto:info@ghirardellinicola.it" className='text-undeline pb-3'>info@ghirardellinicola.it</a><br></br>
              WhatsApp: <a title="Scrivimi via WhatsApp" href="https://wa.me/+393486723145" target="_blank" rel="noreferrer">+39 348 672 3145</a><br></br>
              <br></br>
              <a href="/privacy-cookie-policy" title="Privacy e Cookie Policy">Privacy - Cookie Policy</a><br></br>
              <button href="#"  className="iubenda-cs-preferences-link p-0">Preferenze cookie</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='container'>
        <div className='row py-3'>
          <div className='col-md-6'>
            <p id="copy">© 2015 - 2023 Tutti i diritti riservati</p>
          </div>
          <div className='col-md-6 text-md-end credits'>
              <p><a href="https://www.linkedin.com/in/adila-botonjic/" target="_blank" rel="noreferrer">Credits</a></p>
          </div>
        </div>
      </div>
  </footer>
  );
}

export default Footer;
