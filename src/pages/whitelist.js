import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Layout from 'components/layout';
import ContactForm from "components/contactForm"
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import {isMobile} from 'react-device-detect';

export default function IndexPage() {
  console.log(`Is mobile ${isMobile}`)

  return (
    <StickyProvider>
      <Layout pageFrom={"whitelist"}>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next generation reserve backed token for DeFi 3.0 and the decentralized web."
        />
        <Box style={
              isMobile ? 
              { position:"absolute",top:"10%",left:"10%", minWidth: "40%", height:"100%" } :  
              { position:"absolute",top:"10%",left:"10%", minWidth: "40%", height:"100%" }}>
            <ContactForm />
        </Box>

      </Layout>
    </StickyProvider>
  );
}
