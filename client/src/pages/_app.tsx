import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Goraku | 오락실 찾기 서비스</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
