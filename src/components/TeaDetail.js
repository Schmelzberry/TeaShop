import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea } = props;

  return (
    <React.Fragment>
      <h2>{tea.name} Tea Details: </h2>
      <h4>{tea.origin}</h4>
      <h4>{tea.price}</h4>
      <h4>{tea.type}</h4>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object
};

export default TeaDetail;