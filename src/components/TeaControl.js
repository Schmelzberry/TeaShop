import React from "react";
import NewTeaForm from './NewTeaForm'
import TeaList from "./TeaList";
import TeaDetail from "./TeaDetail";
import EditTea from "./EditTea";


class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  // Event Handling Functions

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisible: false,
        selectedTea: null,
        editing: false
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
  
  handleDeletingTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
        mainTeaList: editedMainTeaList,
        editing: false,
        selectedTea: null
      });
  }
  // Conditional Rendering

  render() {
    let currentlySeen = null;
    let buttonText = null;

    if( this.state.editing ) {
      currentlySeen = <EditTea tea = {this.state.selectedTea}  onEditTea = {this.handleEditingTeaInList}/>
      buttonText = "Return to Tea List";
    }

    else if (this.state.selectedTea != null) {
      currentlySeen = <TeaDetail
      tea = {this.state.selectedTea}
      onClickingDelete = {this.handleDeletingTea} 
      onClickingEdit = {this.handleEditClick} />
      buttonText= "Return to Tea List";
    }

    else if (this.state.formVisible) {
      currentlySeen = <NewTeaForm onNewTeaCreation={this.handleNewTea} />
      buttonText = "Return to Tea List";
    }
    else {
      currentlySeen = 
      <TeaList teaList={this.state.mainTeaList} onTeaSelection={this.handleChangingSelectedTea}/>;
      buttonText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlySeen}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TeaControl;
