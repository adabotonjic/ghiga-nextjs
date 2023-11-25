import ContattiHome from "../components/Home/ContattiHome";
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout/layout';

function Contatti() {
    return(
        <Layout>
            <Head>
                <title>Contatti - Ghirardelli Nicola</title>
                <link rel="canonical" href="https://www.ghirardellinicola.it/contatti/" />

            </Head>
            <main className="page-contatti">
                <ContattiHome />
            </main>
        </Layout>
    );
}
export default Contatti;