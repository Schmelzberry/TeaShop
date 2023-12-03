import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props) {
  return (
    <React.Fragment>
      <h2>WBZ Tea Shop Tracker</h2>
      <h4>Enter a style of tea below and keep track of inventory as stock runs out!</h4>
      <hr />
      <h4>Current tea list:</h4>
      <hr />
      {props.teaList.map((tea) =>
       < Tea
       whenTeaClicked = { props.onTeaSelection }
       name={tea.name}
       id={tea.id}
       key={tea.id}
       quantity={tea.quantity}
       />
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList:PropTypes.array,
  onTeaSelection: PropTypes.func
};

export default TeaList;