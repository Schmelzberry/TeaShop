import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.origin}</p>
        <p>{props.price}</p>
        <p>{props.type}</p>
        <p>Quantity: {props.quantity}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string,
  quantity: PropTypes.number,
  whenTeaClicked: PropTypes.func
};

Tea.defaultProps = {
  quantity: 130,
};

export default Tea;