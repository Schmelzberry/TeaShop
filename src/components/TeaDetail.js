import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>{tea.name} Tea Details: </h2>
      <h4>{tea.origin}</h4>
      <h4>{tea.price}</h4>
      <h4>{tea.type}</h4>
      <button onClick={ props.onClickingEdit }>Update Tea Info</button>
      <button onClick={() => onClickingDelete(tea.id) }>Delete Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;