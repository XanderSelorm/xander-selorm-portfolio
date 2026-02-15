import Layout from 'components/Layout';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <Layout
      title="Contact"
      description="Get in touch with Alexander Selorm Kubi — available for freelance work, collaborations, and engineering opportunities."
      canonicalPath="/contact"
      footerHasBorderTop={false}
    />
  );
};

export default Contact;
