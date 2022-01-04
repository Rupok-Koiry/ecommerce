import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { NavLink } from 'react-router-dom';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import CategoryIcon from '@material-ui/icons/Category';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import ControlCameraOutlinedIcon from '@material-ui/icons/ControlCameraOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Container } from '@material-ui/core';
import AdminAnalytics from '../admin/AdminAnalytics';
import Featuredinfo from '../admin/Featuredinfo';

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className='card'>
        <div className='adminwrapper'>
        <h4 style={{color:"#23a6d5",fontWeight:"800"}} className='card-header'>Admin Links</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/admin/dashboard'>
              <LineStyleIcon className='icons'/>
              Home
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/create/category'>
              <CategoryIcon className='icons'/>
              Create category
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/analytics'>
              <TrendingUpIcon className='icons'/>
              Analytics
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/create/product'>
               <AddBoxOutlinedIcon className='icons'/>
              Create product
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/admin/orders'>
              <PageviewOutlinedIcon className='icons'/>
              View Orders
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/makeadmin'>
            <AccountBoxOutlinedIcon className='icons'/>
            Make Admin
            </NavLink>
          </li>
          <li className='list-group-item'>
            <NavLink style={{color:"#ff9900",fontSize:"20px",fontWeight:"700"}} className='nav-link' to='/admin/products'>
              <ControlCameraOutlinedIcon className='icons'/>
              Manage Products
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <Container style={{marginTop:"3%"}}>
       <Featuredinfo></Featuredinfo> <br />
       <AdminAnalytics></AdminAnalytics> <br />
       
        
        <div style={{margin:"0 auto"}} className='card mb-5'>
        <h3 style={{margin:"0 auto",color:"#23a6d5",fontWeight:"800"}} className='card-header'>User information</h3>
        <ul  className='list-group'>
          <li style={{padding: "20px",fontSize:"20px",color:"#ff9900",fontWeight:"600"}} className='list-group-item'>{name}</li>
          <li style={{padding: "20px",fontSize:"20px",color:"#ff9900",fontWeight:"600"}} className='list-group-item'>{email}</li>
          <li style={{padding: "20px",fontSize:"20px",color:"#ff9900",fontWeight:"600"}} className='list-group-item'>
            {role === 1 ? 'Admin' : 'Registered user'}
          </li>
          
        </ul>
        
      </div>
      
      </Container>
    );
  };

  return (
    <Layout
      title='Dashboard'
      description={`${name}`}
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-3'>{adminLinks()}</div>
        <div className='col-md-9'>{adminInfo()}</div>
      </div>
    </Layout>

  );
};

export default AdminDashboard;

