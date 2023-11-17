import React from "react";
import PropTypes from "prop-types";

function Tea(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.origin}</p>
      <p>{props.price}</p>
      <p>{props.type}</p>
      <hr/>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Tea;