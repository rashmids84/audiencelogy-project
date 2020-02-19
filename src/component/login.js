import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { ControlLabel } from 'react-bootstrap';
import logo from './img15.png';
import './Login.scss';
import md5 from 'md5';

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
          <div>
           <div className="content content-fixed">
  {/* <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0"> */}
  
          <div className="row">
            <div className="column">
              <img src={logo} className="App-logo" alt="img" />
            </div>
            
            <div className="column">
             
             <div className="container">
          
          <div className="Login">
          <form onSubmit={this.submitHandler} method="post" action="" role="form" className="align-left">
          
          {this.state.error && (
                    
                    <h5 data-test="error" onClick={this.dismissError}>
                  
                      {this.state.error}
                    </h5>
                  )}
              <div class="text-left"> 
              
              <Form.Group controlId="formBasicEmail">

              <label for="exampleInputEmail1">Email address</label>
             <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.username} onChange={this.handleUserChange}/>                  

                  
              </Form.Group>
              </div>
              <div class="text-left"> 
              <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.handlePassChange}/>
                    
              </Form.Group>
              </div>
              <div class="text-left"> 
              <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              </div>
              <div class="text-left"> 
              
              <Button className="btn-lg btn-block"   type="submit"value="Log In" data-test="submit" > Sign In </Button> 
              </div>
            </form>
            </div>
        </div>
        </div>
         </div>  
         </div>     
</div>
         );
    }

  }

 
export default withRouter (Login);