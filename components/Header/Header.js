import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopHeader from './TopHeader/TopHeader';

import React, { useEffect, useState } from 'react';


function Header() {

  //const location = useLocation();

  // Array dei percorsi delle voci di menu
  const menuItems = [

    { path: '/', text: 'Home' },
    { path: '/#chi-sono', text: 'Chi sono' },
    { path: '/#contatti', text: 'Contatti' },

  ];
  const menuSubItems = [
    { path: '/servizi', text: 'Tutti i servizi' },
    { path: '/servizi/conversioni-serrature-porte-blindate', text: 'Conversioni serrature porte blindate' },
    { path: '/servizi/fornitura-e-installazione-zanzariere', text: 'Fornitura e installazione zanzariere' },
    { path: '/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali', text: 'Riparazioni e sostituzioni basculanti e sezionali' },
    { path: '/servizi/sostituzioni-serrature-di-tutti-i-tipi', text: 'Sostituzione serrature di tutti i tipi' },

  ];

  const [scrollPos, setScrollPos] = useState(0);
  const isScrolled = scrollPos > 200;

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <TopHeader />
      <Navbar expand="sm" className={`${isScrolled ? 'smaller' : ''}`}>
          <div className='container'>
            <div className="d-flex justify-content-between align-items-center w-100 d-sm-none">
            <a href="/" title="Home" className='small-logo '>
            <figure className='figure mb-0'>
              <img
              className=''
                  width='50'
                  height='50'
                  alt='Footer logo'
                  src='/images/footer-logo.png'
                  loading="lazy"
              />
              </figure>
              </a>
              <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
            </div>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto mt-2 mt-sm-0">
            <Nav.Link className="" href="/">{menuItems[0].text}</Nav.Link>
                <NavDropdown title="Servizi" id="basic-nav-dropdown" >
                  {menuSubItems.map(item => (
                    <NavDropdown.Item
                      key={item.path}
                      href={item.path}
                      className="">
                      {item.text}
                    </NavDropdown.Item>
                    ))}
                    </NavDropdown>
              <Nav.Link className="" href="/#chi-sono">{menuItems[1].text}</Nav.Link>
              <Nav.Link className="nav-link" href="/#contatti">{menuItems[2].text}</Nav.Link>
            
            
          </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
    </header>
  );
}

export default Header;
