import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import logo from './img15.png';
// import './App.css';
import {Button, Form} from 'react-bootstrap';
import Request from 'superagent';
import _ from "lodash";
import AdminHome from './component/AdminHome';
import HomePage from './Home/HomePage';
import SellSideLink from './Home/sellSideLink';
import BillingReport from './Home/billingReport';

 class App extends React.Component {
 render(){
   return(
     
     <Router>
       <Switch>
       <Route path={"/"} exact={true} component={AdminHome}/>
       <Route path={"/HomePage"} exact={true} component={HomePage}/>
         <Route path ={"/sellSideLink"} component={SellSideLink}/>
         <Route path ={"/billingReport"} component={BillingReport}/>



     </Switch>
     
     </Router>
     
   )
 } 
  
}
export default App;


 