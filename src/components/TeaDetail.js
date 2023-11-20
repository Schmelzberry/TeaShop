import React from "react";
import PropTypes from "prop-types";

function TeaDetail(props) {
  const { tea, onClickingDelete, onClickingEdit, onSellTea } = props;

  const handleSellClick = () => {
    // Call the onSellTea function with the tea id or any other necessary information
    onSellTea(tea.id);
  };
  return (
    <React.Fragment>
      <h2>{tea.name} Tea Details: </h2>
      <h4>{tea.origin}</h4>
      <h4>{tea.price}</h4>
      <h4>{tea.type}</h4>
      <h4>Quantity: {tea.quantity}</h4>
      <button onClick={handleSellClick}>Sell Tea</button>
      <hr />
      <h4>Change/Remove Tea Below</h4>
      <button onClick={ onClickingEdit }>Update Tea </button><br></br>
      <button onClick={() => onClickingDelete(tea.id) }>Delete Tea</button>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSellTea: PropTypes.func
};

export default TeaDetail;