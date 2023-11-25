import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google'

export const siteTitle = 'Ghirardelli Nicola - Porte blindate, Serrature, Basculanti';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Con un'esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a: porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione."
        />
        <meta
          property="og:image"
          content="/images/Furgone.jpg"
        />
        <meta property="og:locale" content="it_IT" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Con un'esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a: porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione." />
        <meta property="og:url" content="https://www.ghirardellinicola.it/" />
        <meta property="og:site_name" content="Ghirardelli Nicola" />
        <meta property="og:image" content="/images/Furgone.jpg" />
        <meta property="og:image:alt" content="Furgone fabro Ghirardelli Nicola" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="697" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Con un'esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a: porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione." />
        <meta name="twitter:title" content={siteTitle} />

        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin />
        
      </Head>

      <GoogleTagManager gtmId="GTM-NK9CVTXJ" />
 
    <Header />
      <main>{children}</main>
    <Footer />
    </div>
  );
}