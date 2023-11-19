import React from "react";
import Tea from "./Tea";
import PropTypes from "prop-types";

function TeaList(props) {
  return (
    <React.Fragment>
      <h4>Current tea list:</h4>
      <hr />
      {props.teaList.map((tea) =>
       < Tea
       whenTeaClicked = { props.onTeaSelection }
       quantity={tea.quantity}
       name={tea.name}
       id={tea.id}
       key={tea.id}
       />
      )}
    </React.Fragment>
  );
}

TeaList.propTypes = {
  teaList:PropTypes.array,
  onTeaSelection: PropTypes. func
};

export default TeaList;