import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Layout from 'components/layout';
import ContactForm from "components/contactForm"

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next generation reserve backed token for DeFi 3.0 and the decentralized web."
        />
        <div style={{position:"absolute", top:"25%", left:"25%",  minWidth: "40%"}}>
            <ContactForm />

        </div>

      </Layout>
    </StickyProvider>
  );
}
