import './style.css';
import { createGame, sendData, getData } from './crud.js';

const name = document.getElementById('name');
const score = document.getElementById('score');

const subBtn = document.querySelector('.subBtn');
const refreshBtn = document.querySelector('.refreshBtn');
const scoreSec = document.querySelector('.listScores');

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const getIdFromStorage = () => {
  const localStorageId = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : null;
  return localStorageId;
};

const display = async () => {
  scoreSec.innerHTML = '';
  const { result } = await getData(`${baseURL}games/${getIdFromStorage()}/scores`);
  result.forEach((itemScore) => {
    const eachScore = `<div class="eachScore">
    <p class="userName">${itemScore.user}</p>
    <p class="userScore">${itemScore.score}</p>
    </div>`;
    scoreSec.insertAdjacentHTML('beforeend', eachScore);
  });
};

const saveGameOnLocalStorage = () => {
  const data = {
    name: 'Game of Legends',
  };
  if (!getIdFromStorage()) {
    window.addEventListener('load', async () => {
      const { result } = await createGame(`${baseURL}games`, data);
      localStorage.setItem('id', JSON.stringify(result.substr(14, 20)));
    });
  }
};

const add = async (name, score) => {
  const data = {
    user: name,
    score,
  };

  await sendData(`${baseURL}games/${getIdFromStorage()}/scores`, data);
  display();
};

subBtn.addEventListener('click', () => {
  add(name.value, score.value);
});

refreshBtn.addEventListener('click', async () => {
  display();
});

saveGameOnLocalStorage();
