/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ParallaxProvider>
      <Layout>
        <NextNProgress color="#b68f3b" options={{ showSpinner: false }} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ParallaxProvider>
  </>
);

export default MyApp;
