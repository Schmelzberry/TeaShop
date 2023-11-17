import React  from "react";
import NewTeaForm from './NewTeaForm'
import TeaList from "./TeaList";


class TeaControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <React.Fragment>
        <TeaList/>
        <NewTeaForm/>
      </React.Fragment>
    );
  }

}

export default TeaControl;
