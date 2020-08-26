import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((res) => resolve(utils.responseToArray(res.data)))
    .catch((err) => reject(err));
});

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const addPin = (pinObj) => axios.post(`${baseUrl}/pins.json`, pinObj);

const updatePin = (pinId, pinObj) => axios.put(`${baseUrl}/pins/${pinId}.json`, pinObj);

export default {
  getPinsByBoardId,
  deletePin,
  addPin,
  updatePin,
};
