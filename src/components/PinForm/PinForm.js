import React, { useState } from 'react';
import authData from '../../helpers/data/authData';

const PinForm = (props) => {
  const [pinName, setPinTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const pinTitleEvent = (e) => {
    e.preventDefault();
    setPinTitle(e.target.value);
  };

  const imageUrlEvent = (e) => {
    e.preventDefault();
    setImageUrl(e.target.value);
  };

  const savePinEvent = (e) => {
    e.preventDefault();
    console.warn(props);
    const newPin = {
      boardId: props.boardId,
      imageUrl,
      title: pinName,
      uid: authData.getUid(),
    };
    props.addPin(newPin);
  };

  return (
    <div>
      <div className="BoardForm mt-2 mb-2">
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="pinTitle">Pin Title</label>
            <input type="text" className="form-control" id="pinTitle" onChange={pinTitleEvent} placeholder={pinName} />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" className="form-control" id="imageUrl" onChange={imageUrlEvent} placeholder={imageUrl} />
          </div>
          <button className="btn btn-primary" onClick={savePinEvent}>Save Pin</button>
        </form>
      </div>
    </div>
  );
};

export default PinForm;
