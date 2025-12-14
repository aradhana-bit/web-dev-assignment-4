const questions = [
  "What is the capital of India?",
  "Which planet is known as the Red Planet?",
  "What is the chemical symbol of water?",
  "Who wrote the Ramayana?",
  "Which language is used to style web pages?"
];

const answers = [
  "delhi",
  "mars",
  "h2o",
  "valmiki",
  "css"
];


let score = 0;


for (let i = 0; i < questions.length; i++) {

 
  let userInput = prompt(questions[i]);

  
  userInput = userInput.trim().toLowerCase();


  if (userInput === answers[i]) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer is: " + answers[i]);
  }
}


alert("Quiz finished! Your final score is: " + score + "/" + questions.length);
