import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import ModalVideo from 'react-modal-video';
import { IoIosPlayCircle } from 'react-icons/io';
import { useStaticQuery, graphql } from 'gatsby';
const BANNER_DATA = {     
  title1: "Next Gen", 
  title2: "Reserve backed ",
  title3: "token",
  text:
    'We are building a next generation reserve backed token for DeFi 3.0 and the decentralized web. Our goal is to build a non-custodial protocol focused on algorithmic assets emission and advanced on-chain asset management. Elysian treasury will engage in strategies ranging from arbitraging to market making, robo trading and ETFs. Our smart contracts provide full transparency about how the strategies are performing and how they are composed and operated. Elysian token (LYS) is backed by a basket of assets in the treasury, which combined with risk free value (RFV) gives it intrinsic worth and ensures 1 LYS minted is always backed by $1.',
  button: {
    link: 'https://launch.elysian.finance',
    label: 'Launch dApp',
  },
  videoBtn: {
    link: '#',
    label: 'White paper',
  },
};

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 740) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { title1, title2, title3, text, button, videoBtn } = BANNER_DATA;
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" id="banner" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.content}>
          <Heading as="h1">
            <span style={{color:"#39419b"}}>{title1}</span>{" "}<br/>
            <span style={{color:"#905bc4"}}>{title2}</span>
            <span style={{color:"#39419b"}}>{title3}</span>
            </Heading>
          <br />
          {text}
          <Box sx={styles.btnWrap}>
            <Link href={button.link} sx={styles.btn}>
              {button.label}
            </Link>
          </Box>
        </Box>

        <Box sx={styles.sectionImage}>
          <Box sx={styles.thumbnail}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Banner Thumbnail"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: 'hidden',
    pt: ['115px', null, null, '140px', '150px', '170px', '185px'],
    pb: ['60px', '75px', null, '90px', '110px', '120px', '140px', '160px'],
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: ['column', null, null, 'row'],
  },
  content: {
    color:"#e1eef5",
    maxWidth: ['100%', null, null, '355px', '460px', '545px', null, '590px'],
    textAlign: ['left', null, null, 'left'],
    h1: {
      fontSize: ['28px', '32px', null, '34px', '40px', '48px', '54px', '58px'],
      lineHeight: [1.4, null, null, 1.35],
      color: 'heading',
      fontFamily: 'archivo',
      letterSpacing: '-1.5px',
      fontWeight: 'body',
      mx: ['0', null, null, 'auto', '0'],
    },
    p: {
      fontSize: ['15px', null, null, null, '16px', '17px'],
      lineHeight: [1.85, null, 1.9, null, 2, 2.47],
      color: 'text',
      mt: [3, null, null, '18px'],
      pr: [0, null, null, null, null, null, null, '50px'],
    },
  },
  btnWrap: {
    display: 'flex',
    alignItems: 'center',
    mt: ['25px', null, null, '30px', '35px', '50px'],
    justifyContent: ['center', null, null, 'flex-start'],
  },
  btn: {
    backgroundColor: 'heading_secondary',
    borderRadius: '7px',
    lineHeight: 1,
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 300ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  videoBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'heading_secondary',
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: 0,
    fontSize: ['13px', null, '15px', null, '17px'],
    fontWeight: 700,
    fontFamily: 'body',
    ml: ['20px', null, null, '25px', '30px'],
    outline: 'none',
    svg: {
      ml: [1, null, 2],
      fontSize: ['17px', '18px', '20px'],
      position: 'relative',
      top: '-1px',
    },
  },
  sectionImage: {
    mt: ['40px', null, null, 0],
    pl: [0, null, null, '30px', 0],
    position: 'relative',
    right: ['auto', null, null, null, '-10px', '-50px', '-70px'],
    width: [
      '100%',
      null,
      null,
      'calc(100% - 355px)',
      'calc(100% - 460px)',
      'calc(100% - 545px)',
      null,
      'calc(100% - 590px)',
    ],
    textAlign: ['center', null],
  },
  thumbnail: {
    maxWidth: '600px',
    ml: 'auto',
  },
  
};
