
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ReportTable from './billingReport';
import moment from 'moment';
class SellSideLink extends Component { 
    constructor(props) {
        super(props);
        console.log("DB1 props",this.props);
        console.log("DB1 sessionid in constructor",this.props.location.state.SessId);
        console.log("DB1 API in constructor",this.props.location.state.ApiKey);
     
            this.state = { 
            Start_Date :'2020-02-01',
            End_Date : moment(),
            Interval :'Daily',
            Dimension :'',
            Filters :'-1',
            Imp_Start :'0',
            Imp_End :"100000000000",
            
         }
         this.payload={
            Sid:this.props.location.state.SessId,
            Apikey :this.props.location.state.ApiKey,
         }
         
         this.callTableAsync=this.callTableAsync.bind(this);
         this.resultData=this.resultData.bind(this);
        //  this.passTableData=this.passTableData.bind(this);
    }
  

    resultData= async() =>{
    //   console.log("Payload",this.payload);
      
   
     
    
    const a = await this.callTableAsync();
    // console.log("DB:Inside resultData:",a);
    var respData = await a.json();

    // Final array
     console.log("DB:RespData2 text",respData); 
    console.log("DB:Result Array impressions:",respData.Data);
     const tableArray=respData.Data;
     
    this.setState({ tableArray:respData.Data}) 
     console.log("DB:const array variable",tableArray);
     this.props.history.push('/billingReport',tableArray);
    }
    
    
callTableAsync = async() =>{
   
//   console.log("DB:inside callTableAsync",this.payload);
//   console.log("Session id in call table async",Sid);
    var myHeaders = new Headers();
    myHeaders.append("SessionId",this.payload.Sid);
    myHeaders.append("APIKey",this.payload.Apikey);
    // console.log("DB:inside header session id",this.payload.Sid);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(this.state);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
   var tableData = await fetch("http://api6.audiencelogy.com/adx_reporting/billingReport", requestOptions)
    
      return tableData;

}
functionTwo() {
    (async () => {
        await this.resultData();
    })();
}




     render() {
        
       return<div> {this.functionTwo()} </div>;
     }
    }
  
  
export default SellSideLink;