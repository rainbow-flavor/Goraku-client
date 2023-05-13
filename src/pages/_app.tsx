import "@/styles/globals.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { ReactNode, useEffect } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";
import { useGeolocationAtom } from "@/atoms/geolocation-atom";
import Modal from "@/components/common/modal/Modal";


// @ts-ignore
import WhatapAgent from 'whatap';
WhatapAgent.NodeAgent;

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot() as any;
  useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    },
  },
});

const AppContainer = ({ children }: { children: ReactNode }) => {
  const { setGeolocationState } = useGeolocationAtom();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setGeolocationState({
          lat: latitude,
          lng: longitude,
        });
      });
    }
  }, []);

  return <>{children}</>;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Goraku | 오락실 찾기 서비스</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ReactQueryDevtools />
          <DebugObserver />

          <AppContainer>
            <Component {...pageProps} />
            <Modal />
          </AppContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
