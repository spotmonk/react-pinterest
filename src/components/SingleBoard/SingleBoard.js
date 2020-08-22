import React from 'react';
import PropTypes from 'prop-types';

import boardsData from '../../helpers/data/boardsData';
import pinData from '../../helpers/data/pinData';

import Pin from '../Pin/Pin';

class SingleBoard extends React.Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    setSingleBoard: PropTypes.func.isRequired,
  }

  state = {
    board: {},
    pins: [],
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

  render() {
    const { board, pins } = this.state;
    const { setSingleBoard } = this.props;

    const pinCards = pins.map((pin) => <Pin key={pin.id} pin={pin} deletePin={this.deletePin} />);

    return (
      <div>
        <h4>{board.name}</h4>
        {pinCards}
        <button className="btn btn-danger" onClick={() => { setSingleBoard(''); }}>X</button>
      </div>
    );
  }
}

export default SingleBoard;
