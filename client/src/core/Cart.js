import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

import Copyright from "./Copyright";
import { Button } from "@material-ui/core";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <div>
      <h2 className="mb-3">Your cart is empty!</h2>
      <img
        src="https://i.ibb.co/x19Qp9n/undraw-empty-cart-co35.jpg"
        alt="empty-cart"
        className="img-fluid w-75"
      />
      <Link to="/shop" className="my-3 d-block">
        <Button variant="contained" color="primary">
          Continue shopping
        </Button>
      </Link>
    </div>
  );

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items. Add remove checkout or continue shopping."
      className="container my-5"
    >
      <div className="row">
        <div className="col-md-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Your cart summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div>
      </div>
      <Copyright />
    </Layout>
  );
};

export default Cart;
