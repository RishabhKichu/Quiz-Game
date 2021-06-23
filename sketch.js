let gameState = 0;
let contestantCount;
let allcontestants;
let database;
let quiz;
let question;
let contestant;
let names;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  if (contestantCount === 4) {
    gameState = 1;
  }
  if (gameState === 1) {
    quiz.play(contestant);
  }
  drawSprites();
}
