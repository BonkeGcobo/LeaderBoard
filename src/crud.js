import Score from './score.js';

const scoreSec = document.querySelector('.listScores');

// Creating a add function
export const add = (name, score, scores)=> {
  const newScore = new Score(name, score);
  scores.push(newScore);
}

// Create a  display function
export const display =(scores)=> {
  scoreSec.innerHTML = '';
  scores.forEach((itemScore) => {
    const eachScore = `<p class="eachScore">${itemScore.name}:${itemScore.score}</p><hr>`;
    scoreSec.insertAdjacentHTML('beforeend', eachScore);
  });
}