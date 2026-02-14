import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar';

interface Props {
  title: string;
  children?: ReactNode | ReactNode[];
}

const Layout = (props: Props) => {
  const router = useRouter();

  return (
    <div className="inter_font relative flex min-h-screen flex-col items-center">
      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          
          function gtag() {
            dataLayer.push(arguments);
          }
          
          gtag('js', new Date());
          gtag(
            'config',
            '${process.env.NEXT_PUBLIC_GA_ID}', 
            {page_path: window.location.pathname},
          );
        `}
      </Script>
      <Head>
        <title>{`Xander Selorm | ${props.title}`}</title>
        <link rel="icon" href="/icons/fav.ico" />
      </Head>
      <Navbar />
      <>{props.children}</>
      <Footer />
    </div>
  );
};

export default Layout;
