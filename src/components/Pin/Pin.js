import React from 'react';
import PropTypes from 'prop-types';

class Pin extends React.Component {
  static propTypes = {
    deletePin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="card m-4" style={{ width: '18rem' }}>
        <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
        <img src={pin.imageUrl} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h2 className="card-title">{pin.title}</h2>
      </div>
    </div>
    );
  }
}

export default Pin;
