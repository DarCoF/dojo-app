// src/app/page.tsx
import Head from 'next/head';
import ThreeScene from '../components/ThreeScene'; // Adjust path as necessary

export default function Home() {
  return (
    <div>
      <Head>
        <title>Three.js with Next.js</title>
        <meta name="description" content="Three.js in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Three.js Scene</h1>
        <ThreeScene />
      </main>
    </div>
  );
}
