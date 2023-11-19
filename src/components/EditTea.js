import React from "react";
import ReuseForm from "./ReuseForm";
import PropTypes from "prop-types";

function EditTea(props) {

  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({name: event.target.name.value, origin: event.target.origin.value, price: event.target.price.value, type: event.target.type.value, id: tea.id, quantity: tea.quantity});
  }

  
  return (
    <React.Fragment>
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
