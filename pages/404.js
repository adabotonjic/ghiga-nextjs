import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css'; 

export default function Custom404() {
    return (
        <Layout>
            <div className='container'>
                
                <h1 className='my-5 text-center'>Ci dispiace, questa pagina non esiste.</h1>
            </div>
            
        </Layout>
    );
  }