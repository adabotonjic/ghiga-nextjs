import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import {useEffect} from "react";
import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import ServiziHome from '../components/Home/ServiziHome';
import ChisonoHome from '../components/Home/ChisonoHome';
import ContattiHome from '../components/Home/ContattiHome';

const Home = () => {

    return (
      <Layout home>
      <Head>
        <link rel="canonical" href="https://www.ghirardellinicola.it/" />
      </Head>
  

     <main>
        <div className='home-page'>
          <div className='container-fluid home-hero text-center'>
            <figure className="furgone mb-0 figure">
              <img 
                className='mx-auto w-100 mb-0'
                width={697}
                height={500}
                alt="Ghirardelli furgone"
                src='./images/Furgone.webp'/>

              </figure>
        </div>
        <ServiziHome />
        <ChisonoHome />
        <ContattiHome />
        </div>
        </main>
        <footer></footer>
 
        </Layout>
      );
};

export default Home;
