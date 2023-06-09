import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Top of apps</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" />
    </Head>
    <Component {...pageProps} />
  </>;
}
