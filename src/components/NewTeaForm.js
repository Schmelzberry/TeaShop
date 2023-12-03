import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReuseForm from "./ReuseForm"

function NewTeaForm(props){

  function handleNewTeaSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      type: event.target.type.value,
      quantity: 5,
      id: v4()
    });
  }
  return(
    <React.Fragment>
     <ReuseForm
     formSubmissionHandler ={handleNewTeaSubmission}
     buttonText="Tea Me!"/>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;