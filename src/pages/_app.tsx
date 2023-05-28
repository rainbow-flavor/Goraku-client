import "@/styles/globals.css";
import { QueryClient } from "@tanstack/query-core";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import React, { ReactNode, useEffect } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";

import defaultSeoProps from "../../next-seo.config";

import { useGeolocationAtom } from "@/atoms/geolocation-atom";
import { useModalAtom } from "@/atoms/modal-atom";
import Modal from "@/components/common/modal/Modal";

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
  const { closeModal } = useModalAtom();
  const { pathname } = useRouter();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setGeolocationState({
          latitude,
          longitude,
        });
      });
    }

    if (process.env.NODE_ENV === "production") {
      // @ts-ignore
      window.WhatapBrowserAgent = {
        config: {
          projectAccessKey: "x4t7g204a5pdr-x1h4lom3udm8b3-xgjfa8fvjq72q",
          pcode: 29936,
          sampleRate: 100,
        },
      };
    }
  }, []);

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return <>{children}</>;
};

const App = ({ Component, pageProps }: AppProps) => {
  const { seoProps } = pageProps;

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Goraku, 오락실, 동네 오락실, 오락실 찾기, 오락실 위치, 오락실 주소, 오락실 영업시간"
        />
        <script src="https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js" />
      </Head>

      <NextSeo
        {...defaultSeoProps}
        {...seoProps}
        openGraph={{
          ...defaultSeoProps.openGraph,
          ...seoProps?.openGraph,
        }}
      />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ReactQueryDevtools />
            <DebugObserver />

            <AppContainer>
              <Component {...pageProps} />
              <Modal />
            </AppContainer>
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
