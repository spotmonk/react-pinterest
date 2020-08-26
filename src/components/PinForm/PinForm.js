import React, { useState, useEffect } from 'react';
import authData from '../../helpers/data/authData';

const PinForm = (props) => {
  const [pinName, setPinTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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
    const newPin = {
      boardId: props.boardId,
      imageUrl,
      title: pinName,
      uid: authData.getUid(),
    };
    if (isEditing) {
      props.putPin(props.pinToEdit.id, newPin);
    } else {
      props.addPin(newPin);
    }
  };
  useEffect(() => {
    if (props.pinToEdit.title) {
      setPinTitle(props.pinToEdit.title);
      setImageUrl(props.pinToEdit.imageUrl);
      setIsEditing(true);
    }
  }, []);

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
          <button className="btn btn-primary" onClick={savePinEvent}>{isEditing ? 'Edit' : 'Create'} Pin</button>
        </form>
      </div>
    </div>
  );
};

export default PinForm;
