import React from 'react'

function Dashboard() {
  return (
    <div>
     {/* Right side column. Contains the navbar and content of the page */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <h1>
      Dashboard
      <small>Control panel</small>
    </h1>
    <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
      <li className="active">Dashboard</li>
    </ol>
  </section>
  {/* Main content */}
  <section className="content">
    {/* Small boxes (Stat box) */}
    <div className="row">
      <div className="col-lg-3 col-xs-6">
        {/* small box */}
        <div className="small-box bg-aqua">
          <div className="inner">
            <h3>150</h3>
            <p>New Orders</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
        </div>
      </div>{/* ./col */}
      <div className="col-lg-3 col-xs-6">
        {/* small box */}
        <div className="small-box bg-green">
          <div className="inner">
            <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
            <p>Bounce Rate</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
        </div>
      </div>{/* ./col */}
      <div className="col-lg-3 col-xs-6">
        {/* small box */}
        <div className="small-box bg-yellow">
          <div className="inner">
            <h3>44</h3>
            <p>User Registrations</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
        </div>
      </div>{/* ./col */}
      <div className="col-lg-3 col-xs-6">
        {/* small box */}
        <div className="small-box bg-red">
          <div className="inner">
            <h3>65</h3>
            <p>Unique Visitors</p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
        </div>
      </div>{/* ./col */}
    </div>{/* /.row */}
    {/* Main row */}
    <div className="row">
      {/* Left col */}
      <section className="col-lg-7 connectedSortable">
        {/* Custom tabs (Charts with tabs)*/}
        <div className="nav-tabs-custom">
          {/* Tabs within a box */}
          <ul className="nav nav-tabs pull-right">
            <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
            <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
            <li className="pull-left header"><i className="fa fa-inbox" /> Sales</li>
          </ul>
          <div className="tab-content no-padding">
            {/* Morris chart - Sales */}
            <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}} />
            <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}} />
          </div>
        </div>{/* /.nav-tabs-custom */}
        
        {/* /.box */}
      </section></div></section></div>



    </div>
  )
}

export default Dashboard
