import Head from 'next/head';
import Script from 'next/script';
import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const SITE_URL = 'https://www.xanderselorm.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/imgs/my-portrait.png`;
const DEFAULT_DESCRIPTION =
  'Alexander Selorm Kubi is a software engineer based in Accra, Ghana, building high-traffic web applications and leading development teams.';

interface Props {
  title: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  children?: ReactNode | ReactNode[];
  footerHasBorderTop?: boolean;
}

const Layout = (props: Props) => {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    canonicalPath = '',
    ogImage = DEFAULT_OG_IMAGE,
    footerHasBorderTop,
  } = props;

  const pageTitle = `Xander Selorm | ${title}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <div className="inter_font relative flex min-h-screen flex-col items-center">
      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {page_path: window.location.pathname});
        `}
      </Script>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/icons/fav.ico" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Navbar />
      <>{props.children}</>
      <Footer hasBorderTop={footerHasBorderTop} />
    </div>
  );
};

export default Layout;
