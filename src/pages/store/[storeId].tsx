import { dehydrate, QueryClient } from "@tanstack/query-core";
import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";

import StoreDetail from "@/components/store/StoreDetail";
import PageLayout from "@/layouts/PageLayout";
import { Response } from "@/types/api";
import { Store } from "@/types/store";

const StoreDetailPage: NextPage<{ store: Store }> = ({ store }) => {
  return (
    <>
      <Head>
        <title>{store.name} | Goraku</title>
        <meta name="robots" content="all" key="robots" />
        <meta
          name="description"
          content={`${
            store.address ??
            "Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
          }`}
          key="description"
        />
        <meta
          name="keywords"
          content={`오락실, 가게, ${store.city1}, ${store.city2}`}
          key="keywords"
        />
        <meta property="og:title" content={`${store.name} | Goraku`} />
        <meta
          property="og:image"
          content={`${store.thumbnail ?? "/img/logo_open_graph.png"}`}
        />
        <meta
          property="og:description"
          content={`${
            store.address ??
            "Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다"
          }`}
        />
        <meta
          property="og:url"
          content={`https://goraku.iro.ooo/store/${store.id}`}
        />
      </Head>
      <PageLayout>
        <StoreDetail />
      </PageLayout>
    </>
  );
};

export default StoreDetailPage;

export const getServerSideProps = async function (
  ctx: GetServerSidePropsContext
) {
  const queryClient = new QueryClient();
  const storeId = ctx.params?.storeId as string;
  const fetchStoreDetailServerSide = async (storeId: string) => {
    const { data } = await axios.get<Response<Store>>(
      `${process.env.NEXT_PUBLIC_API_URL}/store/detail`,
      {
        params: {
          storeId,
        },
      }
    );

    return data.data;
  };

  try {
    const data = await queryClient.fetchQuery(
      ["FETCH_STORE_DETAIL", storeId],
      () => fetchStoreDetailServerSide(storeId)
    );

    if (data) {
      return {
        props: {
          store: data,
          dehydratedState: dehydrate(queryClient),
        },
      };
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
