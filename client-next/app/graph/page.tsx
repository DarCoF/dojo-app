// src/app/page.tsx
import Head from 'next/head';
import ThreeScene from './graph_scene';

export default function Graph() {
  return (
    <div className=''>
      <Head>
        <title>Three.js with Next.js</title>
        <meta name="description" content="Three.js in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThreeScene />
      </main>
    </div>
  );
}
