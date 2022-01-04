import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
const MakeAdmin = () => {
  const useStyles = makeStyles((theme) => ({
    btn: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      marginTop: "5%",
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
  return (
    <div>
      <div style={{ margin: "20% 30%" }} className="form-group">
        <h3 style={{ textAlign: "center" }}>Making Admin Dashboard</h3>
        <form>
          <label className="text-muted">Make Admin</label> <br />
          <TextField
            style={{ width: "100%" }}
            type="text"
            className="form-control"
            required
          />
          <Button variant="contained" className={classes.btn}>
            Submit
          </Button>{" "}
        </form>
        <br />
      </div>
    </div>
  );
};

export default MakeAdmin;
