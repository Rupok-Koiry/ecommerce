import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Myreview = () => {
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
    <div style={{ margin: "20% 30%" }} className="form-group">
      <h3 style={{ textAlign: "center" }}>My Review</h3>
      <label className="text-muted">My review</label> <br />
      <TextField
        style={{ width: "100%" }}
        type="text"
        className="form-control"
      />
      <Button variant="contained" className={classes.btn}>
        Submit
      </Button>{" "}
      <br />
      {/* Rating */}
      <div>
        <h3>Give Your Rating</h3>
        <ul style={{ listStyle: "none", color: "goldenrod", display: "flex" }}>
          <li>
            <StarIcon />
          </li>
          <li>
            <StarHalfIcon />
          </li>
          <li>
            <StarBorderIcon />
          </li>
          <li>
            <StarBorderIcon />
          </li>
          <li>
            <StarBorderIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Myreview;
