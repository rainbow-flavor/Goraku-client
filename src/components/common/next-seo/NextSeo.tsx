import Head from "next/head";
import React from "react";

import AppleTouchIcon from "../../../../public/favicon/apple-touch-icon.png";
import Favicon16 from "../../../../public/favicon/favicon-16x16.png";
import Favicon32 from "../../../../public/favicon/favicon-32x32.png";
import Favicon from "../../../../public/favicon/favicon.ico";
import OpenGraphDefaultImg from "../../../../public/img/logo_open_graph.png";

interface NextSeoProps {
  robots: "index,follow" | "noindex,nofollow";
  title: string;
  keywords: string;
  description: string;
  og_image?: string;
  og_url?: string;
}

const NextSeo = ({
  title,
  description,
  keywords,
  robots,
  og_image,
  og_url,
}: NextSeoProps) => {
  return (
    <Head>
      <link rel="shortcut icon" href={Favicon.src} />
      <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={Favicon16.src} />

      <title>{title}</title>
      <meta name="robots" content={robots} key="robots" />
      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} key="keywords" />

      {/* OpenGraph */}
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:site_name" content="Goraku" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:image"
        content={og_image ?? OpenGraphDefaultImg.src}
        key="og:image"
      />
      <meta property="og:url" content={og_url} key="og:url" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        property="twitter:domain"
        content="goraku.iro.ooo"
        key="twitter:domain"
      />
      <meta property="twitter:url" content={og_url} key="twitter:url" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta
        name="twitter:image"
        content={og_image ?? OpenGraphDefaultImg.src}
        key="twitter:image"
      />
    </Head>
  );
};

export default NextSeo;
