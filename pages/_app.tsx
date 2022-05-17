/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Navbar />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
