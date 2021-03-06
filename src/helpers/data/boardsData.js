import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => resolve(utils.responseToArray(res.data)))
    .catch((err) => reject(err));
});

const getSingleBoard = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

const addBoard = (boardObj) => axios.post(`${baseUrl}/boards.json`, boardObj);

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const updateBoard = (boardId, boardObj) => axios.put(`${baseUrl}/boards/${boardId}.json`, boardObj);

export default {
  getBoardsByUid,
  getSingleBoard,
  deleteBoard,
  addBoard,
  updateBoard,
};
