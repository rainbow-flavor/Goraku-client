import { dehydrate, QueryClient } from "@tanstack/query-core";
import { GetServerSidePropsContext } from "next";

import { fetchStoreDetail } from "@/api/store";
import StoreDetail from "@/components/store/StoreDetail";
import PageLayout from "@/layouts/PageLayout";

const StoreDetailPage = () => {
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

  try {
    const data = await queryClient.fetchQuery(
      ["FETCH_STORE_DETAIL", storeId],
      () => fetchStoreDetail(storeId)
    );

    if (data) {
      const imageUrl = data.thumbnail
        ? data.thumbnail
        : `https://goraku.iro.ooo/img/default-open-graph.png`;

      return {
        props: {
          seoProps: {
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
