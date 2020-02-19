import React , {Component} from 'react';
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap';
import './HomePage.scss';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    // console.log("HN props",this.props);
    this.CallBillingReport = this.CallBillingReport.bind(this);

    this.state = {
     stateTableData : []
    }
    this.payloadHN = {
      SessId:'',
      ApiKey:''
    }
 }

 CallBillingReport = async () => {
   this.payloadHN.SessId=this.props.location.SId;
   this.payloadHN.ApiKey=this.props.location.APIKey;
  //  console.log("HN session id",Sid);
  //  console.log("HN API key",Apikey);
  //  console.log("HN props sending",this.props);
  // this.props.history.push('/dashboard1', Sid, Apikey); 
  this.props.history.push('/sellSideLink', this.payloadHN);
  
   }

render(){

  return (
   
            <Navbar className="navbar navbar-header navbar-fixed-top">
            <Navbar.Brand href="#home"><font color="white"><b>audience</b></font><font color="#0168fa">logy</font></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" ><font color="white" onClick={this.CallBillingReport} >SellSide</font></Nav.Link>
              <Nav.Link href="#link"><font color="white">BuySide</font></Nav.Link>
             
            </Nav>
            </Navbar.Collapse>
            </Navbar>

    
   );
  }
}
