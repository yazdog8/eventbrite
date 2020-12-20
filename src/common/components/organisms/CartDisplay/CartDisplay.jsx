import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CheckoutCart from "common/components/molecules/CheckoutCart/CheckoutCart";
import EventCart from "common/components/molecules/EventCart/EventCart";

const CartDisplay = (props) => {
  // useEffect(() => {}, []);

  return (
    <div>
      <EventCart />
      <CheckoutCart />
    </div>
  );
};

CartDisplay.propTypes = {};
CartDisplay.defaultProps = {};

export default CartDisplay;
