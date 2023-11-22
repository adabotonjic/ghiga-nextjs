import Layout, { siteTitle }  from "../components/layout/layout";
import ContattiHome from "../components/Home/ContattiHome";
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

function Contatti() {
    return(
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <link rel="canonical" href="https://www.ghirardellinicola.it/contatti/" />

            </Head>
            <main className="page-contatti">
                <ContattiHome />
            </main>
        </Layout>
    );
}
export default Contatti;