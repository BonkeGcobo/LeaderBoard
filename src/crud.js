import { Score } from "./score.js";

const scoreSec = document.querySelector(".listScores");


//Creating a add function
export function add (name, score, scores){
  let newScore = new Score(name, score);
  scores.push(newScore);
}


//Create a  display function
export function display(scores){
    scoreSec.innerHTML = '';
    scores.forEach((itemScore) => {
      const eachScore = `<p class="eachScore">${itemScore.name}:${itemScore.score}</p><hr>`
      scoreSec.insertAdjacentHTML('beforeend', eachScore);
  });        
}