// eslint-disable-next-line object-curly-newline
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="The Irodori Festival originated from the legend of The Five Kasen who were gifted singers and poetry writers of ancient Inazuma. The Five Kasen brought a cultural revolution to the nation. As a sign of the people's appreciation towards the works of the The Five Kasen, the Irodori Festival was developed."
      />
      <meta property="og:title" content="Home / Irodori Festival" />
      <meta
        property="og:description"
        content="The Irodori Festival originated from the legend of The Five Kasen who were gifted singers and poetry writers of ancient Inazuma. The Five Kasen brought a cultural revolution to the nation. As a sign of the people's appreciation towards the works of the The Five Kasen, the Irodori Festival was developed"
      />
      <meta property="og:image" content="/assets/background/irothumb.jpg" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
