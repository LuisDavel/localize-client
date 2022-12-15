import Head from 'next/head';
import Image from 'next/image';
import './styles/globals.css';

const foo = 'aa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Localize Pet</title>
      </Head>
      <section>
        <p>Hellow World</p>
        <Image src={'../../public/output-onlinegiftools.gif'} />
      </section>
    </>
  );
}
