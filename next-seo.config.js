import { DefaultSeoProps } from "next-seo";

const defaultSeoProps: DefaultSeoProps = {
  title: "Goraku | 오락실 찾기 서비스",
  description:
    "Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다",
  canonical: "https://goraku.iro.ooo/",
  openGraph: {
    type: "website",
    url: "https://goraku.iro.ooo/",
    title: "Goraku | 오락실 찾기 서비스",
    description:
      "Goraku는 지역별, 기체별 검색을 통해 한국 오락실을 검색할 수 있는 사이트입니다",
    images: [
      {
        url: "/assets/",
        alt: "Goraku",
      },
    ],
    siteName: "Goraku",
  },
  twitter: {
    handle: "@gorakulist",
    site: "@gorakulist",
    cardType: "summary_large_image",
  },
};

export default defaultSeoProps;
