var relisy=require("readline-sync");
const chalk=require('chalk');
var red=chalk.red.bold;

var uname=relisy.question("What's your name?");
console.log(chalk.blue("Welcome ")+chalk.underline(uname.toUpperCase()));
console.log("How well do you know",chalk.blue.underline.bgWhite("nitheesh"),"?");
console.log(chalk.green.bgMagenta.bold("Get ready for a quiz!"));
var score=0;
var high=[{
  name:"Nitheesh-->Score-5"
},
{
  name:"Karthik-->Score-4"
}
];

function play(questioon,answer)
{
  var uans=relisy.question(questioon);
  if(uans==answer)
  {
    console.log('Right!');
    score=score+1;
  }
  else{
    console.log(red("Wrong!"));
  }
}

var questions=[
{
  questioon: "Where does he lives?",
  answer : "hyderabad"
},
{
  questioon: "Where does he works?",
  answer : "microsoft"
},
{
  questioon: "On what programming language is he presently working on?",
  answer : "javascript"
},
{
  questioon :"Does he know spanish?",
  answer : "yes"
},
{
questioon :"Is he an athlete too?",
answer :  "yes"
},
{
  questioon : "He is currently living in which state?",
  answer  : "telangana"
}
];
for(var i=0;i<questions.length;i++)
{
  var currentq=questions[i];
  play(currentq.questioon,currentq.answer);
}
console.log(chalk.keyword('orange')("Hurray!check out your score below"));
console.log("Your score is "+chalk.blue(score));
if(score==5){
  console.log("That's great!Your are now one of the top scorers!");
  console.log("Send the screenshot of the result of your game to us");
}
else if(score==4)
{
  console.log("Good!You got penultimate highest score");
  console.log("Send the screenshot of your game to us and try to be the  top scorer");
}
else if(score>=3 && score<5){
  console.log("You are much nearer to beat the highest score");
  console.log("KEEP PLAYING");
}
else{
  console.log("Try to do your best");
}
console.log("The present high scores are");
for(var j=0;j<high.length;j++)
{
  var curname=high[j];
  console.log(curname.name);
}
