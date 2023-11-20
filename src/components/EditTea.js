import React from "react";
import ReuseForm from "./ReuseForm";
import PropTypes from "prop-types";

function EditTea(props) {

  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value, 
      type: event.target.type.value, 
      id: tea.id, 
      quantity: parseInt(event.target.quantity.value, 10) || 0,
    });
  }



  return (
    <React.Fragment>
      <h2>Edit Tea Information Below:</h2>
      <ReuseForm
      formSubmissionHandler={handleEditTeaFormSubmission}
        buttonText="Update Tea" />
    </React.Fragment>
  );
}

EditTea.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};


export default EditTea;
