import React from "react";
import NewTeaForm from './NewTeaForm'
import TeaList from "./TeaList";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTeaList: [],
      selectedTea: null
    };
  }

  // Event Handling Functions

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }  
  }

  handleNewTea = (NewTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(NewTea);
    this.setState({mainTeaList: newMainTeaList,
    formVisible: false});
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }
  // Conditional Rendering

  render() {
    let currentlySeen = null;
    let btnText = null;

    if (this.state.selectedTea != null) {
      currentlySeen = <TeaDetail tea = {this.state.selectedTea} />
      btnText= "Return to Tea List";
    }

    else if (this.state.formVisible) {
      currentlySeen = <NewTeaForm onNewTeaCreation={this.handleNewTea} />
        btnText = "Return to Tea List";
    }
    else {
      currentlySeen = <TeaList teaList={this.state.mainTeaList} onTeaSelection={this.handleChangingSelectedTea}/>;
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
