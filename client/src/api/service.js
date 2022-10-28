// src/api/service.js

import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getGames = () => {
  return api.get("/games")
    .then((res) => res.data)
    .catch(errorHandler);
};

const getGame = (id) => {
  return api.get(`/games/${id}`)
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api.post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

const createGame = (newGame) => {
  return api.post("/games", newGame)
    .then(res => res.data)
    .catch(errorHandler);
};

const delGame = (id) => {
  return api.delete(`/games/${id}`)
    .then(res => res.data)
    .catch(errorHandler);
};

const editGame = (data, id) => {
  return api.put(`/games/edit/${id}`, data)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
  getGames,
  uploadImage,
  createGame,
  delGame,
  editGame,
  getGame
};
