import React from "react";

function NewTeaForm(){

  function handleNewTeaSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.type.value);
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

export default NewTeaForm;