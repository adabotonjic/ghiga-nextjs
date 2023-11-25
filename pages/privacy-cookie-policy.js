import Head from 'next/head';
import Link from 'next/link'; 
import Layout from '../components/layout/layout';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 



const PrivacyCookiePolicy = () => {


    useEffect(() => {
        const loader = () => {
          const s = document.createElement("script");
          const tag = document.getElementsByTagName("script")[0];
          s.src = "https://cdn.iubenda.com/iubenda.js";
          tag.parentNode.insertBefore(s, tag);
        };
    
        if (window.addEventListener) {
          window.addEventListener("load", loader, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", loader);
        } else {
          window.onload = loader;
        }
      }, []);

  return (
    <Layout>
    <Head>
      <title>Privacy policy - Ghirardelli Nicola</title>
      <meta name="robots" content="noindex"></meta>
    </Head>

    <main>

      <div className='container'>
        <div className='row'>

       <Link
        href="https://www.iubenda.com/privacy-policy/18645684"
        className="iubenda-nostyle no-brand iubenda-embed iub-body-embed"
        title="Privacy Policy"
      >
        Privacy Policy
      </Link>
        </div>
      </div>


    </main>

    </Layout>
  );
};

export default PrivacyCookiePolicy;
