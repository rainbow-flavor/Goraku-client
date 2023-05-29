import Head from "next/head";
import React from "react";

interface NextSeoProps {
  robots: "index,follow" | "noindex,nofollow";
  title: string;
  og_image?: string;
}

const NextSeo = ({ robots, title, og_image }: NextSeoProps) => {
  return (
    <Head>
      <meta name="robots" content="index,follow" key="robots" />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={og_image ?? "/img/logo_open_graph.png"}
      />
    </Head>
  );
};

export default NextSeo;
