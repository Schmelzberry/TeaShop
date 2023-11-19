import React from "react";
import NewTeaForm from './NewTeaForm'
import TeaList from "./TeaList";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTeaList: []
    };
  }

  handleClick = () => {
  
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleNewTea = (NewTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(NewTea);
    this.setState({mainTeaList: newMainTeaList,
    formVisible: false});
  }

  render() {
    let currentlySeen = null;
    let btnText = null;

    if (this.state.formVisible) {
      currentlySeen = <NewTeaForm onNewTeaCreation={this.handleNewTea} />
        btnText = "Return to Tea List";
    }
    else {
      currentlySeen = <TeaList teaList={this.state.mainTeaList}/>;
      btnText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlySeen}
        <button onClick={this.handleClick}>{btnText}</button>
      </React.Fragment>
    );
  }

}

export default TeaControl;
