// pages/_app.tsx
import '../../styles/globals.css';
import type { AppProps } from 'next/app'; //

export default function DojoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}