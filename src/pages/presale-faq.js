import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import Layout from 'components/layout';
import { jsx, Flex, Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import {isMobile} from 'react-device-detect';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
//39419b
export default function IndexPage() {

  let paddingTop = isMobile ? '20%' : '10%';

  const addTokenToMetamask = async () => {

    const tokenAddress = '0x25bf213773E5FC3644Da4F134de310370DCAA3E8';
    const tokenSymbol = 'pLYS';
    const tokenDecimals = 18;
    const tokenImage = 'https://raw.githubusercontent.com/ElysianFinance/elysian-assets/master/images/pLYS.png';
    const { ethereum } = window;
    if (typeof ethereum !== 'undefined') {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next gen reserve backed token for DeFi 3.0 and the decentralized web."
        />
        <Box as="section" id="banner" style={{paddingTop:paddingTop}}>
          <Container sx={styles.container}>
            <Box sx={styles.content}>
              <Heading as="h1"> 
                <span style={{color:"#905bc4", fontSize:"36px"}}>{"Presale FAQ"}</span>{" "}<br/>
                </Heading>
              <br />
              <table >
                <tr>  
                  <td>
                    <h3>{"When is the presale?"}</h3>
                  </td>
                  <td>
                    <p>{"The presale has begun and will last until all tokens are exhausted."}</p>
                  </td>
                </tr>
                <tr>  
                  <td>
                    <h3>{"How do I purchase pLYS token?"}</h3>
                  </td>
                  <td>
                    <p>{"Accepted currencies are ETH, BNB, DAI, USDC, USDT and sUSD."}</p>
                  </td>
                </tr>
                <tr>  
                  <td>
                    <h3>{"On which blockchain is the presale happening?"}</h3>
                  </td>
                  <td>
                    <p>{"The presale will take place simultaneously on Ethereum and Binance Smart Chain (BSC). If you buy on BSC, you will be able to redeem your tokens on Ethereum."}</p>
                  </td>
                </tr>
                <tr>  
                  <td>
                    <h3>{"What is pLYS price during the private sale?"}</h3>
                  </td>
                  <td>
                    <p>{"The price during the private sale is $0.01 (US Dollars)."}</p>
                  </td>
                </tr>   
                <tr>  
                  <td>
                    <h3>{"Is there a minimum investment amount during the token sale?"}</h3>
                  </td>
                  <td>
                    <p>{"There is no minimum, however there is a maximum number of tokens allocated. The allocation is calculated as the total amount of pLYS available divided by the amount of participants and will vary if participants do not buy their whole allocation."}</p>
                  </td>
                </tr>  
                <tr>  
                  <td>
                    <h3>{"What happens if I don't buy my whole allocation?"}</h3>
                  </td>
                  <td>
                    <p>{"You won't have a second chance to buy as the amount unsold gets redistributed to the pool of investors and you lose access to the whitelist."}</p>
                  </td>
                </tr>                 
                <tr>  
                  <td>
                    <h3>{"Are there any restrictions on who can participate in the token sale?"}</h3>
                  </td>
                  <td>
                    <p>{"If you are a citizen of any US or UK sanctioned countries you shall not participate in this sale. In addition, we are not able to do business with individuals who are on sanctions lists or who are in countries on sanctions lists (e.g. North Korea, Iran, etc)."}</p>
                  </td>
                </tr>    
                <tr>  
                  <td>
                    <h3>{"How do I confirm my contribution was received?"}</h3>
                  </td>
                  <td>
                    <p>{"Your funds will be reflected on your wallet as soon as your contribution is received and has been confirmed on the network. If you don’t receive the tokens, contact an admin on Telegram or Discord."}
                    <br /><span style={{color:"#905bc4"}}><a onClick={addTokenToMetamask}>Add token to Metamask</a></span></p>
                  </td>
                </tr> 
                <tr>  
                  <td>
                  </td>
                  <td>
                  <Box sx={styles.btnWrap}>
                    <Link href={"https://launch.elysian.finance"} target="_new" sx={styles.btn}>
                      {"Go to launchpad"}
                    </Link>
                  </Box>
                  </td>
                </tr> 
              </table>


            </Box>
 
          </Container>
        </Box> 
      </Layout>
    </StickyProvider>
  );
}

const styles = {
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: [4, null, null, '25px'],
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',

    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    ml: 'auto',
    display: ['none', null, null, null, 'block'],
    navLink: {
      fontSize: '16px',
      color: '#F9F9F9',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        textShadow: '0 0 1px #F9F9F9',
      },
    },
  },
  btn: {
    backgroundColor: 'heading_secondary',
    borderRadius: '7px',
    lineHeight: 1,
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    fontWeight: 700,
    display: 'inline-flex',
    marginTop: '7px',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 300ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
};
 
