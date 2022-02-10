import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import Layout from 'components/layout';
 
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next gen reserve backed token for DeFi 3.0 and the decentralized web."
        />
        <Banner />
 
      </Layout>
    </StickyProvider>
  );
}
