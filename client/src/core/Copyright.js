import { Container, Typography } from "@material-ui/core";
import React from "react";

const Copyright = () => {
  return (
    <footer
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#fff8f8",
      }}
    >
      <div class="container">
        <div class="row">
          <div className="col-md-4">
            <div>
              <img
                style={{ width: "50px" }}
                src="https://i.ibb.co/Tqg8DtS/shopping-1.png"
                alt=""
              />
            </div>
            <a href="/" style={{ color: "#ff9900", textDecoration: "none" }}>
              <Typography style={{ fontSize: "20px" }} variant="h6" noWrap>
                <i>Easy Shop</i>
              </Typography>
            </a>
            <p style={{ margin: "20px 0px" }}>
              There are many variations of passages of ecommerce website
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#ff9900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                }}
              >
                <i
                  className="fab fa-facebook-square"
                  style={{ color: "3B5999" }}
                ></i>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#ff9900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                }}
              >
                <i
                  className="fab fa-instagram-square"
                  style={{ color: "3B5999" }}
                ></i>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#ff9900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                }}
              >
                <i
                  className="fab fa-twitter-square"
                  style={{ color: "3B5999" }}
                ></i>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: "white",
                  backgroundColor: "#ff9900",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                }}
              >
                <i
                  className="fab fa-facebook-square"
                  style={{ color: "3B5999" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 style={{ marginBottom: "30px", color: "#ff9900" }}>
              Useful Links
            </h3>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <li style={{ width: "50%", marginBottom: "10px" }}>Home</li>
              <li style={{ width: "50%", marginBottom: "10px" }}>
                Man Fashion
              </li>
              <li style={{ width: "50%", marginBottom: "10px" }}>
                Woman Fashion
              </li>
              <li style={{ width: "50%", marginBottom: "10px" }}>Cart</li>
              <li style={{ width: "50%", marginBottom: "10px" }}>Accounts</li>
              <li style={{ width: "50%", marginBottom: "10px" }}>Terms</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 style={{ marginBottom: "30px", color: "#ff9900" }}>Contact</h3>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="fas fa-map-marker-alt"
              ></i>{" "}
              622 Dixie Path , South Tobinchester 98336
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i style={{ marginRight: "10px" }} className="fas fa-phone"></i>{" "}
              +1 234 56 78
            </div>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                style={{ marginRight: "10px" }}
                className="far fa-envelope"
              ></i>
              easyshop@gmail.com
            </div>
            <img
              style={{ width: "50%" }}
              src="https://i.ibb.co/Qfvn4z6/payment.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
