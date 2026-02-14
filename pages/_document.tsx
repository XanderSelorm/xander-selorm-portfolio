import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:site_name" content="Xander Selorm" />
        <meta property="og:title" content="Xander Selorm" />
        <meta property="og:description" content="Xander Selorm is a software engineer based in Accra, Ghana. He is passionate about building software that solves real-world problems." />
        <meta property="og:image" content="https://www.xanderselorm.com/imgs/my-portrait.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:secure_url" content="https://www.xanderselorm.com/imgs/my-portrait.png" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xander Selorm" />
        <meta name="twitter:description" content="Xander Selorm is a software engineer based in Accra, Ghana. He is passionate about building software that solves real-world problems." />
        <meta name="twitter:image" content="https://www.xanderselorm.com/imgs/my-portrait.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
