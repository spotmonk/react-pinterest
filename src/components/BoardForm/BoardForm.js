import React from 'react';
import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  state = {
    name: '',
    description: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const newBoard = {
      name,
      description,
      uid: authData.getUid(),
    };
    console.warn('new board:', newBoard);
  }

  render() {
    return (
      <div>
      <div className="BoardForm mt-2 mb-2">
        <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="boardName">Board Name</label>
        <input type="text" className="form-control" id="boardName" onChange={this.changeNameEvent} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" className="form-control" id="description" onChange={this.changeDescriptionEvent} />
      </div>
      <button className="btn btn-primary" onClick={this.saveBoardEvent}>Save Baord</button>
    </form>
    </div>
    </div>
    );
  }
}

export default BoardForm;
