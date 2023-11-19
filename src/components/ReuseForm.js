import React from "react";
import PropTypes from "prop-types";

function ReuseForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Tea Name' />
        <input
          type='text'
          name='origin'
          placeholder='Country of Origin' />
        <input
          type='text'
          name='price'
          placeholder='Price per Pound' />
        <input
          type='text'
          name='type'
          placeholder='Organic / Non-Organic' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReuseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReuseForm;