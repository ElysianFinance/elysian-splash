import React from 'react';
import { Link } from 'theme-ui';

import Layout from 'components/layout';
import Seo from 'components/seo';

const NotFoundPage = () => (
  <Layout>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next gen reserve backed token for DeFi 3.0 and the decentralized web."
        />
        <div style={{
          position:"absolute", 
          top:"25%", 
          left:"20%",
          right: "20%",  
          minWidth: "40%"
        }}>
            <h1>Error 404.</h1>
            <h4>Congratulations, you broke it.</h4>
            <h4>Were you looking for your <a href="contact" style={{color:'#905bc4'}}>whitelist</a>?</h4>
            <h4>If you're having issues reach out via <a href='#' style={{color:'#905bc4'}}>Discord</a> or <a href='#' style={{color:'#905bc4'}}>Telegram</a> directly.</h4>

            <Link href="https://w.com/">
            </Link>
        </div>
      </Layout>
);

export default NotFoundPage;
