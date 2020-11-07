import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
