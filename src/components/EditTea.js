import React from "react";
import ReuseForm from "./ReuseForm";
import PropTypes from "prop-types";

function EditTea(props) {

  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value || tea.name,
      origin: event.target.origin.value || tea.origin,
      price: event.target.price.value || tea.price, 
      type: event.target.type.value || tea.type, 
      id: tea.id, 
      quantity:tea.quantity
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
