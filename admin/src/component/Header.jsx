import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className="main-header">
  {/* Logo */}
  <a href="index2.html" className="logo"><b>Admin</b>LTE</a>
  {/* Header Navbar: style can be found in header.less */}
  <nav className="navbar navbar-static-top" role="navigation">
    {/* Sidebar toggle button*/}
    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        {/* Messages: style can be found in dropdown.less*/}
        <li className="dropdown messages-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope-o" />
            <span className="label label-success">4</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 4 messages</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>{/* start message */}
                  <a href="#">
                    <div className="pull-left">
                      <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      Support Team
                      <small><i className="fa fa-clock-o" /> 5 mins</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>{/* end message */}
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="user image" />
                    </div>
                    <h4>
                      AdminLTE Design Team
                      <small><i className="fa fa-clock-o" /> 2 hours</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="user image" />
                    </div>
                    <h4>
                      Developers
                      <small><i className="fa fa-clock-o" /> Today</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="dist/img/user3-128x128.jpg" className="img-circle" alt="user image" />
                    </div>
                    <h4>
                      Sales Department
                      <small><i className="fa fa-clock-o" /> Yesterday</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="dist/img/user4-128x128.jpg" className="img-circle" alt="user image" />
                    </div>
                    <h4>
                      Reviewers
                      <small><i className="fa fa-clock-o" /> 2 days</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer"><a href="#">See All Messages</a></li>
          </ul>
        </li>
        {/* Notifications: style can be found in dropdown.less */}
        <li className="dropdown notifications-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o" />
            <span className="label label-warning">10</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 10 notifications</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>
                  <a href="#">
                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the page and may cause design problems
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-users text-red" /> 5 new members joined
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user text-red" /> You changed your username
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer"><a href="#">View all</a></li>
          </ul>
        </li>
        {/* Tasks: style can be found in dropdown.less */}
        <li className="dropdown tasks-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-flag-o" />
            <span className="label label-danger">9</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 9 tasks</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Design some buttons
                      <small className="pull-right">20%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>{/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Create a nice theme
                      <small className="pull-right">40%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">40% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>{/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Some task I need to do
                      <small className="pull-right">60%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>{/* end task item */}
                <li>{/* Task item */}
                  <a href="#">
                    <h3>
                      Make beautiful transitions
                      <small className="pull-right">80%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>{/* end task item */}
              </ul>
            </li>
            <li className="footer">
              <a href="#">View all tasks</a>
            </li>
          </ul>
        </li>
        {/* User Account: style can be found in dropdown.less */}
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
            <span className="hidden-xs">Alexander Pierce</span>
          </a>
          <ul className="dropdown-menu">
            {/* User image */}
            <li className="user-header">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            {/* Menu Body */}
            <li className="user-body">
              <div className="col-xs-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div className="col-xs-4 text-center">
                <a href="#">Friends</a>
              </div>
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <div className="pull-left">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href="#" className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>


<aside className="main-sidebar">
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
    {/* Sidebar user panel */}
    <div className="user-panel">
      <div className="pull-left image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
      </div>
      <div className="pull-left info">
        <p>Alexander Pierce</p>
        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
    {/* search form */}
    <form action="#" method="get" className="sidebar-form">
      <div className="input-group">
        <input type="text" name="q" className="form-control" placeholder="Search..." />
        <span className="input-group-btn">
          <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" /></button>
        </span>
      </div>
    </form>
    {/* /.search form */}
    {/* sidebar menu: : style can be found in sidebar.less */}
    <ul className="sidebar-menu">
      <li className="header">MAIN NAVIGATION</li>
      <li className="active treeview">
        <NavLink to="/dashboard">
          <i className="fa fa-dashboard" /> <span>Dashboard</span> 
        </NavLink>
        
      </li>
     
      <li className="treeview">
        <NavLink to="/contact">
          <i className="fa fa-table" /> <span>Contact</span>
                 </NavLink>
              </li>
     
      <li className="treeview">
        <NavLink to="/forms">
          <i className="fa fa-edit" /> <span>Forms</span>
                  </NavLink>
        
      </li>
      <li className="treeview">
        <NavLink to="/table">
          <i className="fa fa-table" /> <span>Tables</span>
                 </NavLink>
              </li>
              
     
              <li className="treeview">
        <NavLink to="/product">
          <i className="fa fa-table" /> <span>Product</span>
                 </NavLink>
              </li>
              <li className="treeview">
        <NavLink to="/addproduct">
          <i className="fa fa-table" /> <span>add Product</span>
                 </NavLink>
              </li>
         </ul>
  </section>
  {/* /.sidebar */}
</aside>


    </div>
  )
}

export default Header
