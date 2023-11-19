import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTeaForm(props){

  function handleNewTeaSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      type: event.target.type.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewTeaSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of tea' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          name='type'
          placeholder='organic or non-organic' />
        <button type='submit'>Tea Me!</button>
      </form>
    </React.Fragment>
  );
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;