import React, { useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link as NavLink } from 'react-router-dom';
import { createCategory } from './apiAdmin';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const AddCategory = () => {
  const useStyles = makeStyles((theme) => ({
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: "5%",
        marginLeft: "45%",
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
}));
const classes = useStyles();
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError('');
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div style={{ margin: "10% 20%" }}  className='form-group'>
        <h3 style={{ textAlign: "center" }}>Add Category</h3>
        <label className='text-muted'>Name</label>
        <TextField
        style={{ width: "100%" }}
          type='text'
          className='form-control'
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
        <Button variant='contained' className={classes.btn}>
                    Submit
                </Button>
      </div>
      
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className='text-success'>{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className='text-danger'>Category should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className='mt-3'>
      <NavLink style={{textDecoration:"none"}} to='/admin/dashboard' className='text-warning'>
        Back to Dashboard
      </NavLink>
    </div>
  );

  return (
    <Layout
      title='Add a new category'
      description={`Hey ${user.name}, ready to add a new category?`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
