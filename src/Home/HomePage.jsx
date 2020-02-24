import React , {Component} from 'react';
import {Navbar, NavDropdown, Nav, Form, Button, FormControl} from 'react-bootstrap';
import './HomePage.scss';
import Footer  from "../component/Footer";

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
  
  
render() {


  return(
   
            
<div>
     <nav class="navbar navbar-expand-lg sticky-top">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <div className="navbar-brand">
         <a href="home" className="df-logo">audience<span>logy</span></a>
    </div> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#" onClick={this.CallBillingReport}>Sell Side<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Buy Side</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reports
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" >Reports</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Accounting
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" >Reports</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" >Reports</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
    <Footer />
     </div>
    
  
  );
        }
      
      }


