import React, { Component } from 'react';
import HomePage from './HomePage';
import { MDBDataTable , MDBContainer} from 'mdbreact';
import moment from 'moment';
import Chart from 'chart.js';
 import "./HomePage.scss";
import Footer from "../component/Footer";
// import "../styles/css/dashforge.css";

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
         this.doughnutChart=this.doughnutChart.bind(this);
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
                backgroundColor:'#4994fe',
                barThickness: 12,
               
            }]
        },
       
    });
}
doughnutChart = () =>{
    var ctx = 'myDoughnutChart';
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
            data : {
                // labels: [
                //     'Desktop',
                //     'Smartphone',
                //     'Tablet'
                // ],
                datasets: [{
                    data: ['70','30','10'],
                    label:['Desktop','Smartphone','Tablet'],
                   backgroundColor	:['pink','lightblue','lightgray'],
                }]
                
            },
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
            backgroundColor:"blue",
            datasets: [{
                label: ' total impression',
                data: logImpsChart ,
                 backgroundColor: [
                     'blue','blue','blue','blue','blue','blue','blue','blue'
                // //   'chart-six' 
                // ],
                // borderColor: [
                //     // 'chart-six'
                 ],
                 borderWidth: 1
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
          <React.Fragment>
        <HomePage />
    <div className="content content-fixed">
        <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
            <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-style1 mg-b-10">
                            <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sell Side Dashboard</li>
                        </ol>
                    </nav>
                    
                    <h4 className="mg-b-0 tx-spacing--1">Welcome to Sell Side Dashboard</h4>
                </div>
                
            </div>

            <div className="row row-xs">
                <div className="col-lg-8 col-xl-9">
                    <div className="card">
                        <div className="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-start justify-content-sm-between">
                            <div>
                                <h6 className="mg-b-5">Website Audience Metrics</h6>
                                <p className="tx-12 tx-color-03 mg-b-0">Audience to which the users belonged while on the current date range.</p>
                            </div>
                            <div className="btn-group mg-t-20 mg-sm-t-0 btn-group-sm">
                                {/* <a className="btn btn-xs btn-white btn-uppercase active">Day</a>
                                <a className="btn btn-xs  btn-uppercase">Week</a>
                                <a className="btn btn-xs  btn-uppercase">Month</a> */}
                          
                                <button type="button" class="btn btn-xs">DAY</button>
                                <button type="button" class="btn btn-xs">WEEK</button>
                                 <button type="button" class="btn btn-xs">MONTH</button>

                             </div>
                            
                            {/* <!-- btn-group --> */}
                        </div>
                        {/* <!-- card-header --> */}
                        <div className="card-body pd-lg-25">
                            <div className="row align-items-sm-end">
                                <div className="col-lg-12 col-xl-12">
                                    <div className="chart-six">
                                    {this.showChart()} 

                                        <canvas className="chart-six" id="myChart" width = "805" height = "300">

                                        </canvas>
                                        {/* <canvas id="chartBar1"></canvas> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- card-body --> */}
                    </div>
                    
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mg-t-10 mg-lg-t-0">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="mg-b-0">Report By Devices</h6>
                        </div>
                        {/* !-- card-header - */}
                        <div className="card-body pd-lg-25">
                            <div className="chart-seven">
                                {this.doughnutChart()}
                                <canvas id="myDoughnutChart" width="282" height="235"></canvas>
                            </div>
                        </div>
                        {/* -- card-body -- */}
                        <div className="card-footer pd-20">
                            <div className="row">
                                <div className="col-6">
                                    <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 tx-nowrap mg-b-5">Desktop</p>
                                    <div className="d-flex align-items-center">
                                        <div className="wd-10 ht-10 rounded-circle bg-pink mg-r-5"></div>
                                        <h5 className="tx-normal tx-rubik mg-b-0">
                                            <span id="spnDesktop"></span>
                                            <small className="tx-color-04"></small></h5>
                                    </div>
                                </div>
                                
                                <div className="col-6">
                                    <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Smartphone</p>
                                    <div className="d-flex align-items-center">
                                        <div className="wd-10 ht-10 rounded-circle bg-primary mg-r-5"></div>
                                        <h5 className="tx-normal tx-rubik mg-b-0"><span id="spnSmartphone"></span><small className="tx-color-04"></small></h5>
                                    </div>
                                </div>
                                
                                <div className="col-6 mg-t-20">
                                    <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Tablet</p>
                                    <div className="d-flex align-items-center">
                                        <div className="wd-10 ht-10 rounded-circle bg-teal mg-r-5"></div>
                                        <h5 className="tx-normal tx-rubik mg-b-0"><span id="spnTablet"></span><small className="tx-color-04"></small></h5>
                                    </div>
                                </div>
                                
                                <div className="col-6 mg-t-20" style=
                                {{display: 'none'}}>
                                    <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">Social Media</p>
                                    <div className="d-flex align-items-center">
                                        <div className="wd-10 ht-10 rounded-circle bg-orange mg-r-5"></div>
                                        <h5 className="tx-normal tx-rubik mg-b-0">1,054 <small className="tx-color-04">25%</small></h5>
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>
                        {/* <!-- card-footer --> */}
                    </div>
                    
                </div>

                <div className="col-lg-4 col-md-6 mg-t-10 py-3">
                    <div className="card">
                        <div className="card-body pd-y-20 pd-x-25">
                            <div className="row row-sm">
                                <div className="col-7">
                                    <h3 className="tx-normal tx-rubik tx-spacing--1 mg-b-5"><span id="spnImp"></span></h3>
                                    <h6 className="tx-12 tx-semibold tx-uppercase tx-spacing-1 tx-primary mg-b-5">Total Impression</h6>
                                </div>
                                <div className="col-5">
                                    <div className="chart-ten">
                                        <div id="flotChart3" className="flot-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- card-body --> */}
                    </div>
                    
                </div>
                
                <div className="col-lg-4 col-md-6 mg-t-10 py-3">
                    <div className="card">
                        <div className="card-body pd-y-20 pd-x-25">
                            <div className="row row-sm">
                                <div className="col-7">
                                    <h3 className="tx-normal tx-rubik tx-spacing--1 mg-b-5"><span id="spnClick"></span></h3>
                                    <h6 className="tx-12 tx-semibold tx-uppercase tx-spacing-1 tx-primary mg-b-5">Total Clicks</h6>
                                </div>
                                <div className="col-5">
                                    <div className="chart-ten">
                                        <div id="flotChart4" className="flot-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- card-body --> */}
                    </div>
                    
                </div>
                
                <div className="col-lg-4 col-md-6 mg-t-10 py-3">
                    <div className="card">
                        <div className="card-body pd-y-20 pd-x-25">
                            <div className="row row-sm">
                                <div className="col-7">
                                    <h3 className="tx-normal tx-rubik tx-spacing--1 mg-b-5"><span id="spnConv"></span></h3>
                                    <h6 className="tx-12 tx-semibold tx-uppercase tx-spacing-1 tx-primary mg-b-5">Total Conversions</h6>
                                </div>
                                <div className="col-5">
                                    <div className="chart-ten">
                                        <div id="flotChart5" className="flot-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  card-body  */}
                    </div>
                    
                </div>
                

                <div className="col mg-t-10 py-3">
                    <div className="card card-dashboard-table">

                        <div className="table-responsive" style={{padding: "30px"}}>
                            <div>
                                <h6 className="mg-b-5">Publisher Stats By Widget</h6>
                            </div>
                            {/* <div className ="mg-t-2"> */}
                          <MDBDataTable
                           bordered
                           small
                            data={this.pegTable()}/>  
                            {/* <table className="table" id="table1">
                            </table> */}
                            {/* </div> */}
                        </div>
                        {/* < table-responsive  */}
                    </div>
                    
                </div>
                
            </div>
           
        </div>
        
    </div>


    <Footer />
    </React.Fragment>
        );
     }
    
    }

