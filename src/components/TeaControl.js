import React from "react";
import NewTeaForm from './NewTeaForm'
import TeaList from "./TeaList";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick = () => {
    this.setState({formVisible: true});
  }

  render() {
    let currentlySeen = null;
    let addTeaBtn = null;

    if (this.state.formVisible) {
      currentlySeen = <NewTeaForm />
    }
    else {
      currentlySeen = <TeaList />
      addTeaBtn = <button onClick={this.handleClick}>Add New Tea</button>
    }
    return (
      <React.Fragment>
        {currentlySeen}
        {addTeaBtn}
      </React.Fragment>
    );
  }

}

export default TeaControl;
