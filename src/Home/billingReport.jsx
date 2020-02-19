import React, { Component } from 'react';
import HomePage from './HomePage';
import { MDBDataTable , MDBContainer} from 'mdbreact';
import moment from 'moment';
import Chart from 'chart.js';
import "./HomePage.scss";
import Footer from "../component/Footer";

export default class BillingReport extends Component {

    constructor(props) {
        super(props);
        // console.log("RT:Constr Props:",this.props);

        
        

        this.state = { 
            billingReport :[],
            DaysPrev:[],
        
         }
         this.state.billingReport=this.props.location.state;
         this.DaysPrevious = this.DaysPrevious.bind(this);
         this.showChart=this.showChart.bind(this);
         this.chartArrayImps=this.chartArrayImps.bind(this);
         this.chartArrayLogDt=this.chartArrayLogDt.bind(this);
         this.pegTable=this.pegTable.bind(this);
        }
       
   
    //  last7Days=(d)=> {
    //   d = +(d || new Date()), days = [], i=7;
    //   while (i--) {
    //     days.push(formatUSDate(new Date(d-=8.64e7)));
    //   }
    //   console.log("days in a week",days);
    //   return days;
    // }
showChart = () => {
    var ctx = 'myChart';
    var logDateChart = [];
    logDateChart = this.chartArrayLogDt();
    console.log("logDateChart:",logDateChart);
    var logImpsChart = [];
    logImpsChart = this.chartArrayImps();
    console.log("logImpsChart:",logImpsChart);

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: logDateChart,
            datasets: [{
                label: 'impression',
                data: logImpsChart ,
                // backgroundColor: [
                //      'blue','blue','blue','blue','blue','blue','blue','blue'
                // //   'chart-six' 
                // ],
                // borderColor: [
                //     // 'chart-six'
                // ],
                // borderWidth: 1
            }]
        },
        // options: {
        //     scales: {
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero: true
        //             }
        //         }]
        //     }
        // }
    });
}

basicBarChart = () =>{
    var ctx = 'myChart2';
    var logImpsChart = [];
    logImpsChart = this.chartArrayImps();
    // console.log("logImpsChart:",logImpsChart);

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // labels: this.logDateChart,
            datasets: [{
                label: ' total impression',
                data: logImpsChart ,
                // backgroundColor: [
                //      'blue','blue','blue','blue','blue','blue','blue','blue'
                // //   'chart-six' 
                // ],
                // borderColor: [
                //     // 'chart-six'
                // ],
                // borderWidth: 1
            }]
        },
        // options: {
        //     scales: {
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero: true
        //             }
        //         }]
        //     }
        // }
    });
}



    
  DaysPrevious = () => {
      var DayArray = [];
      console.log("Moment: ",moment()); 

        for(var i=1; i<=7; i++) {
            DayArray[i] = moment().subtract(i, 'days').format("DD MMM YYYY")

        console.log("days ago:",DayArray); 
    }
  }


chartArrayImps = () => {
    //  var chartData = [],
    // chartData=this.state.billingReport;
  
    // return chartData.map(bl => {
    //    return <div>{bl.impressions}</div>
     
     
    var tmpArray = [],
    tmpArray=this.state.billingReport;
    // console.log("BR tmpArray:",tmpArray);
    var impression = [];
       for (var i = 0; i<tmpArray.length; i++) {
          impression.push(tmpArray[i].impressions);
          
           
       }
        // console.log("Impr array for chart needed",impression);
        return impression;
    // })
 }
 
 chartArrayLogDt = () => {
    var tmpLogDt = [],
    tmpLogDt=this.state.billingReport;
    var logDate = [];
       for (var i = 0; i<tmpLogDt.length; i++) {
          logDate.push(tmpLogDt[i].log_dt);
        //   console.log("Date tmpLogDt[i].log_dt",tmpLogDt[i].log_dt)
           
       }
     
       console.log("Log Dt array for date log chart needed",logDate);
       return logDate;
 }


pegTable = () =>{
    const data = {
        columns: [
          {
            label: 'CPM',
            field: 'cpm',
            sort: 'asc',
            width: 150
          },
          {

            label:'IMPS',
  
            field:'impressions',
            sort: 'asc',
            width: 150
  
          },
  
          {
  
            label:'BUYERS EARNING',
  
            field:'buyer_affiliate_earnings',
            sort: 'asc',
            width: 150
  
          },
  
          {
  
            label:'NETWORKING EARNING',
  
            field:'network_earnings',
            sort: 'asc',
            width: 150
  
          },
         
           
          
           
            {
  
              label:'CLICKS',
    
              field:'clicks',
              sort: 'asc',
            width: 150
    
            },
            {
  
              label:'RPM',
    
              field:'rpm',
              sort: 'asc',
            width: 150
            },
            {
  
              label:'PUB EARNING',
    
              field:'publisher_earnings',
              sort: 'asc',
            width: 150
    
            },
            
          
          
         ],
         rows:this.state.billingReport
      }

   return data;

}



  render()
  { 

     
        return (
        <div>
        <HomePage />
      
         {/* {this.state.billingReport.map(bl=> (
        <div>{bl.impressions}</div> 
    
         ))}  */}
         
        {/* <div className="container"> */}
           
        <div className="row">
           <div className ="col-md-12 col-md-12 col-sm-12-col-xs-12 ">
           <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-6 pb-2 mb-3 border-bottom">
                 {/* <div className="card">   */}
               <div className="chart-six">
               {this.showChart()} 

        <canvas class="chart-six" id="myChart"></canvas>
        </div>
         {/* </div>  */}
         </div> 
         </div>
    
        
        {/* <div className="row">
 
        <div className ="col-md-3">
           <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-6 pb-2 mb-3 border-bottom">
                 {/* <div className="card">   */}
               {/* <div className="chart-six">
               {this.basicBarChart()} 

        <canvas class="chart-six" id="myChart1"></canvas>
        </div>
        </div>
        </div> */}
        {/* </div> */} 
        {/* </div> */}
        
        </div>
        <div className="row">
    <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-6 pb-2">
   <MDBDataTable
    // bordered
    // small
    data={this.pegTable()}/>  
    </div>
    </div>
    </div>
    <Footer />

 
  </div>
        );
     }
    
    }

