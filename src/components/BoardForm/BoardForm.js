import React from 'react';

import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class BoardForm extends React.Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
    putBoard: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
  }

  state = {
    name: '',
    description: '',
    isEditing: false,
  }

  componentDidMount() {
    const { board } = this.props;
    if (board.name) {
      this.setState({ name: board.name, description: board.description, isEditing: true });
    }
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
    const { board, createBoard, putBoard } = this.props;
    const { name, description, isEditing } = this.state;
    const newBoard = {
      name,
      description,
      uid: authData.getUid(),
    };
    if (isEditing) {
      putBoard(board.id, newBoard);
    } else {
      createBoard(newBoard);
    }
  }

  render() {
    const { name, description, isEditing } = this.state;
    return (
      <div>
      <div className="BoardForm mt-2 mb-2">
        <form className="col-6 offset-3">
      <div className="form-group">
        <label htmlFor="boardName">Board Name</label>
        <input type="text" className="form-control" id="boardName" onChange={this.changeNameEvent} value={name}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" className="form-control" id="description" onChange={this.changeDescriptionEvent} value={description}/>
      </div>
      <button className={isEditing ? 'btn btn-light' : 'btn btn-primary'} onClick={this.saveBoardEvent}>{isEditing ? 'Edit' : 'Save'} Board</button>
    </form>
    </div>
    </div>
    );
  }
}

export default BoardForm;
