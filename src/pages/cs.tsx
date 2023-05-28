import Head from "next/head";

import CustomerService from "@/components/cs/CustomerService";
import PageLayout from "@/layouts/PageLayout";

const CustomerServicePage = () => {
  return (
    <>
      <Head>
        <title>문의 | Goraku</title>
        <meta name="robots" content="noindex,nofollow" key="robots" />
      </Head>

      <PageLayout type="cs">
        <CustomerService />
      </PageLayout>
    </>
  );
};

export default CustomerServicePage;
