import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { ControlLabel } from 'react-bootstrap';
import logo from './img15.png';
import './Login.scss';
import md5 from 'md5';
import Footer from './Footer';

//  First page admin authentication


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : '',
            password : '',
            user_agent : '',
            ip : '',
            error : '',
            
        }     
    

        this.submitHandler = this.submitHandler.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.callAPIAsync = this.callAPIAsync.bind(this);
        this.dismissError=this.dismissError.bind(this);
    }
    dismissError() {
      this.setState({ error: "" });
    }
  
submitHandler= async(e) =>{
e.preventDefault();

this.state.error = null;

    if (!this.state.username || !this.state.password) {
      return this.setState({ error: "Invalid Credentials" });
    }
    if (this.state.error) {
      return this.setState({ error: "" });
    }

const a = await this.callAPIAsync();
console.log("LHP:Inside Submithandler:",a);
var respData = await a.json();
console.log("LHP:RespData2 text",respData);
console.log("LHP:respData session id:",respData.session_id);
console.log("LHP:API Key from response",respData.apikey);

const Sid = respData.session_id;
const APIkey = respData.apikey;
console.log("LHP:Session id variable",Sid);
console.log("LHP:Api key variable",APIkey);

if (Sid != null){

  this.setState({ Sid:respData.session_id  }) 
  this.setState({ APIkey:respData.apikey  }) 
  
  console.log("LHP:Session id variable after set state",Sid);
  console.log("LHP:Api key variable after set state",APIkey);
  this.props.history.push({
    pathname : '/HomePage',
    SId : Sid,
     APIKey : APIkey
     } 
  );
}
else{
  this.setState({ error: "Invalid Credentials" });

}

 }


callAPIAsync = async () => {
  var myHeaders = new Headers();
  myHeaders.append("URL", "admin5.audiencelogy.com");
  myHeaders.append("APIKey", "e0c46ddc4168a98561cc819e0b68b4c6");
  myHeaders.append("Content-Type", "application/json");
  this.state.password=md5(this.state.password);
  console.log("LHP:md5 password",this.state.password);
  
  var raw = JSON.stringify(this.state);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  console.log("LHP:Request option",requestOptions);

  var responseData = await  fetch("http://api6.audiencelogy.com/adxadminapiv4/admin_auth", requestOptions);
   
    
    console.log("LHP:Response text",responseData);
    console.log("LHP:sesion ID",responseData.session_id);
    console.log("LHP:API Key from response",responseData.APIKey);
    return responseData;
}

handleUserChange(evt) {
    this.setState({
        // console.log("handleuserchange:",this.state.username);
      username: evt.target.value,

    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }


    render() {

        return ( 
      
        <div className="content content-fixed content-auth">
        <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                <div className="media-body align-items-center d-none d-lg-flex">
                    <div className="mx-wd-600">
                        <img src={logo} className="img-fluid" alt=""/>
                    </div>
                </div>
                {/* -- media-body - */}
                <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                    <div className="wd-100p">
                        <h3 className="tx-color-01 mg-b-5">Admin Console</h3>
                        <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
                        {/* <div id="divMessage" className="alert alert-solid alert-danger" role="alert" style={{display:"none"}}></div> */}
                        <div className="Login">
                       <form onSubmit={this.submitHandler} method="post" action="" role="form" className="align-left">
          
                      {this.state.error && (
                    
                     <h5 data-test="error" onClick={this.dismissError}>
                  
                     {this.state.error}
                    </h5>
                     )}
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" id="username" className="form-control" placeholder="username" value={this.state.username} onChange={this.handleUserChange}/>
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between mg-b-5">
                                <label className="mg-b-0-f">Password</label>
                            </div>
                            <input name="password" type="password" id="password" className="form-control" placeholder="Enter your password" value={this.state.password} onChange={this.handlePassChange}/>
                        </div>
                         <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input name="remembercheckbox" type="checkbox" id="remembercheckbox" className="custom-control-input" />
                          <label className="custom-control-label" for="remembercheckbox">Remember me</label>
                        </div>
                             </div>
                        <button className="btn-brand-02 btn-block" type="submit"  value="Log In" data-test="submit">Sign In</button>
                  </form>
                </div>
                {/* -- sign-wrapper - */}
            </div>
            {/* -- media -- */}
        </div>
        {/* -- container - */}
    </div>
    </div>
    </div>
    
    
    
    
         );
    }

  }

 
export default withRouter (Login);