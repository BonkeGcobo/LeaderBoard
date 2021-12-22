import './style.css';
import {add,display} from "./crud.js"
let name = document.getElementById("name")
let score = document.getElementById("score")

const subBtn = document.querySelector('.subBtn');
const refreshBtn = document.querySelector(".refreshBtn")

//setting up array of scores
let scores = [];


//setting up localstorage
if(JSON.parse(localStorage.getItem('scores')!==null)){
   scores = JSON.parse(localStorage.getItem('scores'));
}else{
  localStorage.setItem('scores',JSON.stringify(scores));
}



subBtn.addEventListener('click',()=>{
  add(name.value,score.value,scores);
  localStorage.setItem('scores',JSON.stringify(scores));
  display(scores);
});

refreshBtn.addEventListener('click',()=>{
  localStorage.clear();
  display(score);
});