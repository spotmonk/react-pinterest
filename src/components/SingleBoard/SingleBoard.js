import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';

import Pin from '../Pin/Pin';
import PinForm from '../PinForm/PinForm';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
    formOpen: false,
    editPin: {},
  }

  goGetPins = () => {
    const { boardId } = this.props;

    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((err) => console.error('get pins failed', err));
  }

  componentDidMount() {
    const { boardId } = this.props;
    boardsData.getSingleBoard(boardId)
      .then((response) => this.setState({ board: response.data }))
      .catch((err) => console.error('get single board failed', err));

    this.goGetPins();
  }

  deletePin = (pinId) => {
    pinData.deletePin(pinId)
      .then(() => this.goGetPins())
      .catch((err) => console.error('get pins failed', err));
  }

  addPin = (pinObj) => {
    pinData.addPin(pinObj)
      .then(() => {
        this.goGetPins();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('Create Pin Broke', err));
  }

  editAPin = (pinToEdit) => {
    this.setState({ formOpen: true, editPin: pinToEdit });
  }

  putPin = (pinId, pinObj) => {
    pinData.updatePin(pinId, pinObj)
      .then((resp) => {
        console.warn(resp);
        this.goGetPins();
        this.setState({ formOpen: false, editPin: {} });
      })
      .catch((err) => console.warn("can't update pins", err));
  }

  render() {
    const {
      board,
      pins,
      formOpen,
      editPin,
    } = this.state;
    const { boardId, setSingleBoard } = this.props;

    const pinCards = pins.map((pin) => <Pin key={pin.id} pin={pin} editAPin={this.editAPin} deletePin={this.deletePin} />);

    return (
      <div>
        <h4>{board.name}</h4>
        <button className="btn btn-warning" onClick={ () => { this.setState({ formOpen: !formOpen }); }}>Add Pin</button>
        {formOpen ? <PinForm putPin={this.putPin} pinToEdit={editPin} boardId={boardId} addPin={this.addPin}/> : ''}
        {pinCards}
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
      </div>
    );
  }
}

export default SingleBoard;
