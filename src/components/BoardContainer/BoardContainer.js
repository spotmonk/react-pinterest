import React from 'react';
import boardsData from '../../helpers/data/boardsData';
import authData from '../../helpers/data/authData';
import Board from '../../Board/Board';

class BoardContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardsData.getBoardsbyUID(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke', err));
  }

  render() {
    const { boards } = this.state;
    console.warn(boards);
    const boardCard = boards.map((board) => <Board key={board.id} board={board}/>);

    return (
      <div className="card-columns">
        {boardCard}
      </div>
    );
  }
}

export default BoardContainer;
