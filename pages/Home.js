import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import ServiziHome from '../components/Home/ServiziHome';
import ChisonoHome from '../components/Home/ChisonoHome';
import ContattiHome from '../components/Home/ContattiHome';

const Home = () => {
    return (
     <main>
        <div className='home-page'>
          <Container fluid className='home-hero text-center'>
            <Figure className='furgone mb-0'>
            <Figure.Image
            className='mx-auto w-100 mb-0'
                width={697}
                height={500}
                alt="Ghirardelli furgone"
                src='../images/Furgone.webp'
            />

            </Figure>
        </Container>
        <ServiziHome />
        <ChisonoHome />
        <ContattiHome />
        </div>
        </main>
      );
};

export default Home;
