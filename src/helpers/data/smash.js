import boardsData from './boardsData';
import pinData from './pinData';

const deletePinsByBoard = (boardId) => new Promise((resolve, reject) => {
  pinData.getPinsByBoardId(boardId)
    .then((resp) => {
      const pins = resp;
      pins.forEach((pin) => {
        pinData.deletePin(pin.id);
      });
      boardsData.deleteBoard(boardId)
        .then(() => resolve());
    })
    .catch((err) => reject(err));
});

export default { deletePinsByBoard };
