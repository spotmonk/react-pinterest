import React from 'react';
import PropTypes from 'prop-types';

class Pin extends React.Component {
  static propTypes = {
    pin: PropTypes.object.isRequired,
    deletePin: PropTypes.func.isRequired,
    editAPin: PropTypes.func.isRequired,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { pin, deletePin } = this.props;
    deletePin(pin.id);
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { pin, editAPin } = this.props;
    editAPin(pin);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="card m-4" style={{ width: '18rem' }}>
        <div className="btn-group" role="group">
        <button className="btn btn-warning" onClick={this.editPinEvent}><i className="fas fa-edit"></i></button>
        <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
        </div>
        <img src={pin.imageUrl} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h2 className="card-title">{pin.title}</h2>
      </div>
    </div>
    );
  }
}

export default Pin;
