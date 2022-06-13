import type { NextPage } from 'next';
import Head from 'next/head';
import Kasen from '../components/Kasen';
import KasenProlog from '../components/KasenProlog';
import ParallaxComponent from '../components/ParallaxComponent';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home / Irodori Festival</title>
    </Head>
    <ParallaxComponent />
    <KasenProlog />
    <Kasen img="/assets/kasen/venti.jpg" reverse>
      One year, the poet Suikou made his way to Tenshukaku, and presented the
      Kasen&apos;s work for the Shogun&apos;s perusal, but a page from the works
      of Aoi no Okina had been torn out, and Suikou was questioned regarding the
      matter, suikou pleaded guilty, he admitted to drinking at the tavern the
      night before, and vaguely recalled a mysterious figure approaching while
      he was intoxicated
    </Kasen>
    <Kasen img="/assets/kasen/xq.jpg">
      That figure was none other than Aoi no Okina himself, this turn of events
      had begun with an unnamed individual, under whose coercion Aoi no Okina
      was forced to take drastic measures to retrieve a page of poetry, he knew
      nothing of this individual&apos;s true intentions, all he knew was that
      the poem had to do with an old acquaintance, Akahito.
    </Kasen>
    <Kasen img="/assets/kasen/kazuha.jpg" reverse>
      Akahito had once belonged to the Five Kasen, each poem he composed, he
      marked with a scarlet red seal, hence the &quot;Aka&quot; in his name,
      such a distinguished writer was he, and yet one of the poems he had
      submitted the previous year, was found to be plagiarized, Akahito was
      exiled for his crimes, and only four of the Five Kasen remained.
    </Kasen>
    <Kasen img="/assets/kasen/ayaka.jpg">
      Sumizome went over Akahito&apos;s poems, and noticed that the plagiarized
      poem lacked his seal, she immersed his poetry in a stream nearby, and only
      on the plagiarized poem, did the ink run, aoi no Okina passed by, and
      witnessed Sumizome&apos;s doing, which he then recorded in a poem.
    </Kasen>
    <Kasen img="/assets/kasen/scara.jpg" reverse>
      Thus, transpired the events of Suikou&apos;s poetry submission, and this
      is where the story comes to an end
    </Kasen>
  </>
);

export default Home;
