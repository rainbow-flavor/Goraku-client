import { dehydrate, QueryClient } from "@tanstack/query-core";
import axios from "axios";
import { GetServerSidePropsContext, NextPage } from "next";

import StoreDetail from "@/components/store/StoreDetail";
import PageLayout from "@/layouts/PageLayout";
import { Response } from "@/types/api";
import { Store } from "@/types/store";

const StoreDetailPage: NextPage = () => {
  return (
    <PageLayout>
      <StoreDetail />
    </PageLayout>
  );
};

export default StoreDetailPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
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
      const imageUrl = data.thumbnail
        ? data.thumbnail
        : `https://goraku.iro.ooo/img/default-open-graph.png`;

      return {
        props: {
          seoProps: {
            title: data.name,
            titleTemplate: `${data.name} | Goraku`,
            openGraph: {
              type: "website",
              title: data.name,
              titleTemplate: `${data.name} | Goraku`,
              description: data.address,
              images: [{ url: imageUrl, alt: "가게 이미지" }],
            },
          },
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
    console.error(err);
    return {
      props: {},
    };
  }
};
