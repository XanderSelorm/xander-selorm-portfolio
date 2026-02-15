import { Html, Head, Main, NextScript } from 'next/document';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexander Selorm Kubi',
  alternateName: 'Xander Selorm',
  url: 'https://www.xanderselorm.com',
  image: 'https://www.xanderselorm.com/imgs/my-portrait.png',
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Accra',
    addressCountry: 'GH',
  },
  sameAs: [
    'https://github.com/xanderselorm',
    'https://linkedin.com/in/xanderselorm',
  ],
};

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {/* Site-wide defaults — per-page values in Layout.tsx override these */}
        <meta property="og:site_name" content="Xander Selorm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:secure_url" content="https://www.xanderselorm.com/imgs/my-portrait.png" />
        <meta property="og:image:type" content="image/png" />

        {/* Structured data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
