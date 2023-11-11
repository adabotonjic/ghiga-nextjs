import Head from 'next/head';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Script from 'next/script';

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
          content="https://ghirarfellinicola.it/images/furgone.webp"
        />
        <meta property="og:locale" content="it_IT" />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Con un'esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a: porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione." />
        <meta property="og:url" content="https://www.ghirardellinicola.it/" />
        <meta property="og:site_name" content="Ghirardelli Nicola" />
        <meta property="og:image" content="https://www.ghirardellinicola.it/wp-content/uploads/2022/01/Furgone.jpg" />
    <meta property="og:image:width" content="697" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Con un'esperienza consolidata in 25 anni di attività concentrata in servizi efficaci e tempestivi, fornisco interventi qualificati relativi a: porte, cancelli, serrande basculanti, serrature di vecchia e nuova generazione." />
        <meta name="twitter:title" content={siteTitle} />

        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin />
        
      </Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-NK9CVTXJ');
        `,
        }}
      />

      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK9CVTXJ"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
    <Header />
      <main>{children}</main>
    <Footer />
    </div>
  );
}