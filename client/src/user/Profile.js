import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const Profile = ({ match }) => {
  const useStyles = makeStyles((theme) => ({
    btn: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      marginLeft: "45%",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 20px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  }));
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { token } = isAuthenticated();
  const { name, email, password, error, success } = values;

  const init = (userId) => {
    // console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(match.params.userId, token, { name, email, password }).then(
      (data) => {
        if (data.error) {
          // console.log(data.error);
          alert(data.error);
        } else {
          updateUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };

  const redirectUser = (success) => {
    if (success) {
      return <Redirect to="/user/dashboard" />;
    }
  };

  const profileUpdate = (name, email, password) => (
    <form>
      <div style={{ marginLeft: "30%" }} className="form-group">
        <label className="text-muted">Name</label> <br />
        <TextField
          style={{ width: "50%" }}
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div style={{ marginLeft: "30%" }} className="form-group">
        <label className="text-muted">Email</label> <br />
        <TextField
          style={{ width: "50%" }}
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div style={{ marginLeft: "30%" }} className="form-group">
        <label className="text-muted">Password</label> <br />
        <TextField
          style={{ width: "50%" }}
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>

      <Button
        style={{ marginLeft: "30%" }}
        onClick={clickSubmit}
        variant="contained"
        className={classes.btn}
      >
        Submit
      </Button>
    </form>
  );

  return (
    <Layout
      title="Profile"
      description="Update your profile"
      className="container-fluid"
    >
      <h2
        style={{
          marginLeft: "30%",
          marginTop: "5%",
          marginBottom: "5%",
          fontWeight: "500",
        }}
        className="mb-4"
      >
        Profile update
      </h2>
      {profileUpdate(name, email, password)}
      {redirectUser(success)}
    </Layout>
  );
};

export default Profile;
