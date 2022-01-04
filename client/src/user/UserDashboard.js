import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link as NavLink } from 'react-router-dom';
import { getPurchaseHistory } from './apiUser';
import moment from 'moment';
import { Container } from '@material-ui/core';
import UserAnalytics from './UserAnalytics';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TimelineIcon from '@material-ui/icons/Timeline';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';



const Dashboard = () => {
  
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userLinks = () => {
    return (

      <div className='card'>
        <h4 style={{color:"#23a6d5",fontWeight:"800"}} className='card-header'>User links</h4>
        <ul className='list-group'>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink style={{color:"#ff9900"}} className='nav-link' to='/cart'>
            <IconButton aria-label='Cart'className='icons' color='inherit'>
              <ShoppingCartIcon />
            </IconButton>
             My Cart
            </NavLink>
          </li>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink style={{color:"#ff9900"}} className='nav-link' to={`/profile/${_id}`}>
            <IconButton aria-label='Cart' color='inherit'>
              <AccountCircleRoundedIcon />
            </IconButton>
              Update profile
            </NavLink>
          </li>
          
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink style={{color:"#ff9900"}} className='nav-link' to={'/useranalytics'}>
            <IconButton aria-label='TimeLine' color='inherit'>
              <TimelineIcon />
            </IconButton>
              Analytics
            </NavLink>
          </li>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink style={{color:"#ff9900"}} className='nav-link' to={'/myreview'}>
            <IconButton aria-label='TimeLine' color='inherit'>
              <RateReviewIcon />
            </IconButton>
              My Review
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <Container>
        <UserAnalytics></UserAnalytics>
        <div style={{margin:"0 auto"}} className='card mb-5'>
        <h3 style={{margin:"0 auto",color:"#23a6d5",fontWeight:"800"}} className='card-header'>User information</h3>
        <ul className='list-group'>
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

  const purchaseHistory = (history) => {
    return (
      <div className='card mb-5'>
        <h3 style={{color:"#23a6d5",fontWeight:"800"}} className='card-header'>Purchase history</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6>Product name: {p.name}</h6>
                        <h6>Product price: ${p.price}</h6>
                        <h6>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title='Dashboard'
      description={`${name}`}
      className='container-fluid'
    >
      <div style={{marginTop:"3%"}} className='row'>
        <div className='col-md-3'>{userLinks()}</div>
        <div className='col-md-9'>
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
