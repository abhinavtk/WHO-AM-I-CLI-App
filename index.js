var readlineSync = require('readline-sync');

var score = 0;
var playerName = readlineSync.question("Please enter your name: ");
console.log("Welcome "+playerName+" !\nLet's play WHO AM I?");
console.log("-------------------------------")

questionList = [
  {question: "What is my name? \n", answer:"Abhinav"},
  {question: "How old am I? \n", answer:"22"},
  {question: "Where am I from? \n", answer:"Kannur"},
  {question: "What is my mother tongue? \n", answer:"Malayalam"},
  {question: "What I am currently pursuing?\n", answer:"Engineering"}
  ]

highScores= [
  {name: "Vyshnav",score:4},
  {name:"Anju", score:3}
]

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log("Congrats you are right!");
    score+=1;
  }
  else{
    console.log("Sorry you are wrong!");
  }
  console.log("Current score: "+ score)
  console.log("-------------------------------")
}

var playAgain = "yes";
while (playAgain==="yes"){
  score =0;
  for (var i=0; i<questionList.length; i++){
    quiz(questionList[i].question,questionList[i].answer)
  }
  playAgain = readlineSync.question("Do you wanna play again? (yes/no)").toLowerCase()
}



console.log("Your final score: "+score);
console.log("-------------------------------");

console.log("Check out the high scores, if you scored more ping me and I'll update it.")

highScores.map(score => console.log(score.name, " : ", score.score));

console.log("-------------------------------");
console.log("Thank You for playing :)");

