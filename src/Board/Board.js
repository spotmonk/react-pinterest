import React from 'react';

class Board extends React.Component {
  render() {
    const { board } = this.props;

    return (
      <div className="card m-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-title">{board.name}</h2>
        <h5>{board.description}</h5>
        <button href="#" className="btn btn-secondary">View Board</button>
      </div>
    </div>
    );
  }
}

export default Board;
