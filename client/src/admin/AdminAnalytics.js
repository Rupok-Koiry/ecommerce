import { Container } from '@material-ui/core';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminAnalytics = () => {
    const data = [
        {
          name: 'Jan',
          Sales: 3000,
        },
        {
          name: 'Feb',
          Sales: 4000,
        },
        {
          name: 'Mar',
          Sales: 1000,
        },
        {
          name: 'Apr',
          Sales: 4000,
        },
        {
          name: 'May',
          Sales: 2000,
        },
        {
          name: 'June',
          Sales: 4000,
        },
        {
          name: 'July',
          Sales: 4000,
        },
        {
          name: 'Aug',
          Sales: 9000,
        },
        {
          name: 'Sep',
          Sales: 4000,
        },
        {
          name: 'Oct',
          Sales: 4000,
        },
        {
          name: 'Nov',
          Sales: 5000,
        },
        {
          name: 'Dec',
          Sales: 3000,
        },
    
        
      ];
    return (
        <Container style={{marginTop:"10%"}}>
          <div className='chart'>
            <h3 className='chartTitle'>Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey="Sales" stroke="#5550bd" />
        <Tooltip></Tooltip>
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
        </div>
        </Container>
    );
};

export default AdminAnalytics;