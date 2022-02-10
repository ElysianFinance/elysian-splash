import React from 'react';
import { Link } from 'theme-ui';

import Layout from 'components/layout';
import Seo from 'components/seo';

const NotFoundPage = () => (
  <Layout pageFrom={"404"}>
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
            <h4>Were you looking for the <a href="whitelist" style={{color:'#905bc4'}}>whitelist</a>?</h4>
            <h4>If you're having issues reach out via <a href='https://discord.gg/gNFfBfV4he#' style={{color:'#905bc4'}}>Discord</a> or <a href='https://t.me/elysianfinance' style={{color:'#905bc4'}}>Telegram</a> directly.</h4>

            <Link href="https://elysian.finance">
            </Link>
        </div>
      </Layout>
);

export default NotFoundPage;
