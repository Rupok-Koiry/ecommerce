import { Container } from '@material-ui/core';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserAnalytics = () => {
    const data = [
        {
          name: 'Jan',
          Purchased: 1000,
        },
        {
          name: 'Feb',
          Purchased: 3000,
        },
        {
          name: 'Mar',
          Purchased: 2000,
        },
        {
          name: 'Apr',
          Purchased: 4000,
        },
        {
          name: 'May',
          Purchased: 2000,
        },
        {
          name: 'June',
          Purchased: 3000,
        },
        {
          name: 'July',
          Purchased: 1000,
        },
        {
          name: 'Aug',
          Purchased: 9000,
        },
        {
          name: 'Sep',
          Purchased: 3000,
        },
        {
          name: 'Oct',
          Purchased: 2000,
        },
        {
          name: 'Nov',
          Purchased: 5000,
        },
        {
          name: 'Dec',
          Purchased: 3000,
        },
    
        
      ];
    return (
        <Container style={{marginTop:"10%"}}>
          <div className='chart'>
            <h3 className='chartTitle'>Purchased Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey="Purchased" stroke="#5550bd" />
        <Tooltip></Tooltip>
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
        </div>
        </Container>
    );
};

export default UserAnalytics;