import Head from 'next/head';
import Image from 'next/image';

const notFound = () => (
  <>
    <Head>
      <title>Not Found / Irodori Festival</title>
    </Head>
    <div className="min-h-screen grid place-content-center text-irodori-tertiary">
      <Image
        src="/assets/icons/kazu_sleep.webp"
        alt="kazuha sleep"
        width={160}
        height={122}
      />
      <span className="text-center w">strawberries yum~</span>
    </div>
  </>
);

export default notFound;
