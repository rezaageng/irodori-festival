/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  </ParallaxProvider>
);

export default MyApp;
