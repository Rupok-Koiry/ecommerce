import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import { Container } from "@material-ui/core";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title="Manage Products"
      description="Perform CRUD on products"
      className="container-fluid"
    >
      <Container>
      <div className="row">
        <div className="col-12">
          <h2 style={{marginTop:"5%"}}  className="text-center">Total {products.length} products</h2>
          <hr />
          <ul className="list-group  list-group-flush">
            {products.map((p, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong style={{fontSize:"17px"}}>{p.name}</strong>
                <Link to={`/admin/product/update/${p._id}`}>
                  <span style={{fontSize:"17px"}} className="badge badge-warning badge-pill">Update</span>
                </Link>
                <Link>
                  <span
                  style={{fontSize:"17px"}}
                    onClick={() => destroy(p._id)}
                    className="badge badge-danger badge-pill"
                  >
                    Delete
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Container>
    </Layout>
  );
};

export default ManageProducts;
