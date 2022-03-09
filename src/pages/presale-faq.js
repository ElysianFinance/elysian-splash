import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import Seo from 'components/seo';
import Banner from 'sections/banner';
import Layout from 'components/layout';
import { jsx, Flex, Container, Box, Heading, Text, Button } from 'theme-ui';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from "gatsby"

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

export default function IndexPage() {
  const breakpoints = useBreakpoint();

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
  /*<>
  {breakpoints.xs ? 
<Box as="section" id="banner" style={{paddingTop: "20%"}}> : 
<Box as="section" id="banner" style={{paddingTop: "10%"}}>}
</>*/

const content = () => {
  return (
    <div >
    <table >
        <tr>  
          <td width={"35%"} >
            <h3><b>{"When is the presale?"}</b></h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"The presale has begun and will last until all tokens are exhausted."}</p>
          </td>
        </tr>
        <tr>  
          <td>
            <h3>{"How do I purchase pLYS token?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"Accepted currencies are ETH, BNB, DAI, USDC and USDT."}</p>
          </td>
        </tr>
        <tr>  
          <td>
            <h3>{"On which blockchain is the presale happening?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"The presale will take place simultaneously on Ethereum and Binance Smart Chain (BSC). If you buy on BSC, you will be able to redeem your tokens on Ethereum."}</p>
          </td>
        </tr>
        <tr>
        <td>
            <h3>{"What's the token contract address?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"You can find the contract with verified sources on "}<Link sx={{color: '#905bc4','&.visited': {color: '#905bc4'}}}   to="https://etherscan.io/address/0x25bf213773e5fc3644da4f134de310370dcaa3e8" target="_new">Etherscan</Link>.</p>
          </td>
        </tr>
        <tr>  
          <td>
            <h3>{"Can I buy my allocation on both Ethereum and Binance Smart Chain?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"Yes you can and you are welcomed to do so."}</p>
          </td>
        </tr>
        <tr>  
          <td>
            <h3>{"What is pLYS price during the private sale?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"The price during the private sale is $0.03 (US Dollars)."}</p>
          </td>
        </tr>   
        <tr>  
          <td>
            <h3>{"Is there a minimum investment amount during the token sale?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"There is no minimum, however there is a maximum number of tokens allocated. The allocation is calculated as the total amount of pLYS available divided by the amount of participants and will vary if participants do not buy their whole allocation."}</p>
          </td>
        </tr>  
        <tr>  
          <td>
            <h3>{"What happens if I don't buy my whole allocation?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"You won't have a second chance to buy as the amount unsold gets redistributed to the pool of investors and you lose access to the whitelist."}</p>
          </td>
        </tr>                 
        <tr>  
          <td>
            <h3>{"Are there any restrictions on who can participate in the token sale?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"If you are a citizen of any US or UK sanctioned countries you shall not participate in this sale. In addition, we are not able to do business with individuals who are on sanctions lists or who are in countries on sanctions lists (e.g. North Korea, Iran, etc)."}</p>
          </td>
        </tr>    
        <tr>  
          <td>
            <h3>{"How do I confirm my contribution was received?"}</h3>
          </td>
          <td style={{paddingLeft:"50px"}}>
            <p>{"Your funds will be reflected on your wallet as soon as your contribution is received and has been confirmed on the network. If you don’t receive the tokens, contact an admin on"} <Link sx={{color: '#905bc4','&.visited': {color: '#905bc4'}}}  to="https://discord.gg/gNFfBfV4he" target="_new">Discord</Link> or <Link sx={{color: '#905bc4','&.visited': {color: '#905bc4'}}} to="https://t.me/elysianfinance" target="_new">Telegram.</Link>
            <br /><span style={{color:"#905bc4"}}><Link onClick={addTokenToMetamask}>Add token to Metamask</Link></span></p>
          </td>
        </tr> 
        <tr>  
      <td>
      </td>
      <td>
      <Box sx={styles.btnWrap} style={{paddingLeft:"50px"}}>
        <Link href={"https://launch.elysian.finance"} target="_new" sx={styles.btn}>
          {"Go to launchpad"}
        </Link>
      </Box>
      </td>
    </tr> 
  </table>
    </div>
  )
}

  return (
    <StickyProvider>
      <Layout>
        <Seo
          title="Elysian Finance"
          description="Elysian Finance is a next gen reserve backed token for DeFi 3.0 and the decentralized web."
        />
         {breakpoints.xs || breakpoints.sm ? 
         <Box as="section" id="banner" style={{paddingTop: "20%"}}>  
          <Container sx={styles.container}>
            <Box sx={styles.content}>
              <Heading as="h1"> 
                <span style={{color:"#905bc4", fontSize:"36px" }}>{"Presale FAQ"}</span>{" "}<br/>
                </Heading>
                <Box style={{marginTop:"20px"}}>
                     {content()}
                </Box>
            </Box>
 
          </Container>
        </Box>      
         :
            <Box as="section" id="banner" style={{paddingTop: "10%"}}>  
                <Container sx={styles.container}>
               <Box sx={styles.content}>
                 <Heading as="h1"> 
                   <span style={{color:"#905bc4", fontSize:"36px"}}>{"Presale FAQ"}</span>{" "}<br/>
                   </Heading>

                   <Box style={{marginTop:"40px"}}>
                     {content()}
                    </Box>
               </Box>
             </Container>
           </Box> 
           }
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
 
