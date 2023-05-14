import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

const Document = () => {
  return (
    <Html lang="kr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={
            "https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js"
          }
        />
      </body>
    </Html>
  );
};

export default Document;
