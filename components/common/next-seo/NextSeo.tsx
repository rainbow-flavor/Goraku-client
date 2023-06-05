import Head from "next/head";

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
        content={og_image ?? "/img/logo_open_graph.png"}
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
        content={og_image ?? "/img/logo_open_graph.png"}
        key="twitter:image"
      />
    </Head>
  );
};

export default NextSeo;
