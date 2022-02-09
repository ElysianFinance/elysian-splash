import React from "react"
//import { Button, Container, Row, Col } from 'react-bootstrap';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';

class ContactForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { fromEmail: "", subject: "", body: "" },
     submitting: false,
     error: null,
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
       <div>{this.state.error}</div>
       <form
         style={{
           display: `flex`,
           flexDirection: `column`,
           maxWidth: `800px`,
         }}
         method="post"
       >
        <h1>Pre-Elysian (pLYS) Whitelist form</h1>
        
        <label htmlFor="fromEmail" style={{fontSize:"18px"}}>Your email address:</label>
        <input
                        type="email"
                        name="fromEmail"
                        id="fromEmail"
                        value={this.state.message.fromEmail}
                        onChange={this.onChange}
                        style={{width:"70%", fontSize:"18px"}}
                        borderRadius={`10px`}>
                    </input>
         
         <br />
         <label htmlFor="subject">Ethereum wallet address:</label>
         <input
           type="text"
           name="subject"
           id="subject"
           value={this.state.message.subject}
           style={{width:"70%", fontSize:"18px"}}
           onChange={this.onChange}
         />
            <br />
         
        
        
         <Box sx={styles.btnWrap}>
            <Button   
                sx={styles.btn} 
                onClick={this.onClick}  
                disabled={this.state.submitting}>
              {"Subscribe"}
            </Button>
        </Box>

        <br />
       
        <p style={{fontSize:"11px"}}>
            The information contained in this newsletter is provided by Elysian Finance as a service/promotion to its users, subscribers, customers and possible others. It does not contain (legal) advice. Although we try to provide quality information, we do not guarantee of results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance for a particular purpose.
            In no circumstance Elysian Finance is liable to user or any other party for any damages, costs of any character including but not limited to direct or indirect, consequential, incidental or other costs or damages, via the use of the information contained in the newsletters.
        </p>  
       
       </form>

     </>
   )
 }
}
const styles = {
    btnWrap: {
        display: 'flex',
        alignItems: 'center',
       // mt: ['25px', null, null, '30px', '35px', '50px'],
        justifyContent: ['center', null, null, 'flex-start'],
    },
    disclaimer: { 
        marginTop:"90%"
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
