import React, {useState} from "react"
//import { Button, Container, Row, Col } from 'react-bootstrap';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import w3utils from "web3-utils";
import { navigate } from "gatsby";
 
const functionURL = "https://bubbles-locust-6581.twil.io/send-email"

class ContactForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { fromEmail: "", subject: "", body: "" },
     submitting: false,
     error: null
   }
 }

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

 sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
 }

 onClick = async event => {
   
  event.preventDefault()
  this.setState({ submitting: true })
       
    let { fromEmail, address, body } = this.state.message
  
    const isAddress = w3utils.isAddress(address)
    const isEmail = this.validateEmail(fromEmail)

    console.log(`Is Address ${address} ${isAddress} isEmail ${fromEmail} ${isEmail}`)

    if (isEmail === null) {
      this.setState({
        success: false,
        submitting: false,
        error: "Invalid email address"
      })
      return
    }

    if (!isAddress) {
      this.setState({
        success: false,
        submitting: false,
        error: "Invalid Ethereum address"
      })
      return
    }


    let subject = "whitelist participation";
    body = `I want to be whitelisted for the Pre-Elysian Token Sale, address: ${address}`

    await this.sleep(1500)

    const response = await fetch(functionURL, {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({ fromEmail, subject, body }).toString(),
    })
     
    if (response.status === 200) {
      this.setState({
        error: null,
        submitting: false,
        success: true,
        message: {
          fromEmail: "",
          subject: "",
          body: "",
        },
      })
    } else {
      const json = await response.json()
      this.setState({
        error: json.error,
        submitting: false,
      })
    }
   
}


 onChange = event => {
   const name = event.target.getAttribute("name")
   this.setState({
     message: { ...this.state.message, [name]: event.target.value },
   })
 }
 render() {
   

   return (
     <>
        {this.state.error !== null ? 
        <>
        <p style={{fontSize:"18px", color:"#905BC4", fontWeight:"bold", marginTop:"15%"}}>{this.state.error} 
        <br /> <br /> 
        <Button sx={styles.btn}  onClick={() => navigate(-1)}>Go Back</Button>
        </p> 
        </> : this.state.success === true ?
         <center><p style={{fontSize:"18px", marginTop:"15%"}}>{"Thank you for your interest."}  <br /> {"We will get in touch soon."}</p></center>  : 
       <form
         style={{
           display: `flex`,
           flexDirection: `column`,
           maxWidth: `800px`,
         }}
         method="post"
       >
        <h1><span style={{color:"#3844cd"}}>Pre-Elysian (pLYS)</span><span style={{color:"#905bc4"}}> whitelist form</span></h1>
        <label htmlFor="fromEmail" style={{fontSize:"18px"}}>Your email address:</label>
        <input
            type="email"
            name="fromEmail"
            id="fromEmail"
            value={this.state.message.fromEmail}
            onChange={this.onChange}
            style={{width:"60%", fontSize:"18px"}}
             >
        </input>
         <br />
         <label htmlFor="subject">Ethereum wallet address:</label>
         <input
           type="text"
           name="address"
           id="address"
           value={this.state.message.address}
           style={{width:"60%", fontSize:"18px"}}
           onChange={this.onChange}
         />
        <br />
         <Box sx={styles.btnWrap}>
            <Button   
                sx={styles.btn} 
                onClick={this.onClick}  
                disabled={this.state.submitting}>
              {this.state.submitting === true ? "..." : this.state.success === true ? "Done" : "Participate"}
            </Button>
        </Box>
        <br />
        <br />
        <p style={{fontSize:"13px", color:"#3844cd", fontWeight:"bold"}}>Please note, submitting the same email and/or Ethereum address twice will cause <span style={{color:"#905BC4"}}>disqualification</span>.</p>
        <br />
        <span style={{fontSize:"13px", justifyContent:"left", fontWeight: "bold", alignItems:"left", maxWidth:"90%"}}>
          {"Legal notice:"}
        </span>
        <p style={{fontSize:"11px", justifyContent:"left", alignItems:"left", maxWidth:"90%"}}>
 
            The information contained in this newsletter is provided by Elysian Finance as a service/promotion to its users, subscribers, customers and possible others. It does not contain (legal) advice. Although we try to provide quality information, we do not guarantee of results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance for a particular purpose.
            In no circumstance Elysian Finance is liable to user or any other party for any damages, costs of any character including but not limited to direct or indirect, consequential, incidental or other costs or damages, via the use of the information contained in the newsletters.
            Citizens, nationals, residents (tax or otherwise) and/or green card holders of each of: (i) the United States of America; (ii) the People’s Republic of China; (iii) South Korea; (iv) Vietnam; and (v) any other jurisdiction which prohibits the possession, dissemination or communication 
            of the Available Information and/or prohibits participation in the Token Sale or the purchase of Tokens or the offer for sale of the Tokens or any similar activity or product (collectively the “Restricted Jurisdictions”) or any other Restricted Persons are not permitted to participate 
            in the Token Sale. The term “Restricted Persons” refers to any firm, company, partnership, trust, corporation, entity, government, state or agency of a state or any other incorporated or unincorporated body or association, association or partnership (whether or not having separate legal personality) 
            that is established and/or lawfully existing under the laws of a Restricted Jurisdiction (including in the case of United States of America, under the federal laws of the United States of America or under the laws of any of its States).
        </p>  
        <div className="g-recaptcha" data-sitekey="6LcX5GseAAAAALCUW3QhxEdYhHc1NJzCu44dBM4S"></div>

       </form>}
     </>
   )
 }
}
const styles = {
    btnWrap: {
        display: 'flex',
        alignItems: 'left',
        // mt: ['25px', null, null, '30px', '35px', '50px'],
        justifyContent: ['left', null, null, 'flex-start'],
    },
    disclaimer: { 
        marginTop:"90%", 
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

export default ContactForm
