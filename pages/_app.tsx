import "@/styles/globals.css";
import { DehydratedState, QueryClient } from "@tanstack/query-core";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { RecoilRoot, useRecoilSnapshot } from "recoil";

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
  }, []);

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return <>{children}</>;
};

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>

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
