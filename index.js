var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?\n");
var score = 0;
console.log("Welcome " + userName + " to quiz of Arspl0it");
console.log("Press Q to exit");

function play(question, answer) {
  var userAnswer = readlineSync.question(`${question}\nYour Answer: `).toUpperCase();
  if (userAnswer === answer) {
    console.log("Right Answer!");
    score = score + 1;
  } else {
    if (userAnswer === "Q") {
      return "Quit";
    }
    console.log("Wrong Answer!");
  }
  console.log("Your current score is: " + score);
  console.log("-------------");
  if (score === 10) {
    console.log("\n🎉Congratulations!! You scored 10/10🎉.\n \n😎You have a very great knowledge of CyberSecurity😎\n");
  }
  else{
    console.log("You need to increase your CyberAwarness");
  }
  // if (score === 1, 2 ,3 ,4, 5) {
  //   console.log("You need to increase your CyberAwarness");
  // }
}

// array

var questions = [{
  question: `Ⅰ. What are malwares?
  A. Malicious piece of code
  B. Kernel
  C. Reconnaissance
  D. Enumeration`,
  answer: "A"
}, {
  question: `Ⅱ. Who is the assembler of WannaCry v1.0 Malware?
  A. Edward Snowden
  B. Kevin Poulsen
  C. Marcus Hutchins
  D. Albert Gonzalez`,
  answer: "C"
}, {
  question: `Ⅲ. Software that enables to obtain information about another computer's activities?
  A. Malware
  B. Adware
  C. Trackware
  D. Spyware`,
  answer: "D"
}, {
  question: `Ⅳ. What is the latest and more secure than HTTPS?
  A. SSH
  B. HSTS
  C. HTTPX
  D. SSL`,
  answer: "B"
}, {
  question: `Ⅴ. What is Email spoofing?
  A. Checking mails integrity
  B. Sending mails to unknown people
  C. Email messages with forged sender address
  D. Adding pictures to email`,
  answer: "C"
}, {
  question: `Ⅵ. Can an APPLE device be hacked?
  A. Yes
  B. Mostly No
  C. Maybe 
  D. No`,
  answer: "A"
},{
  question: `Ⅶ. Which attack is related to Man In The Middle?
  A. ARP Spoofing
  B. SQL injection attack
  C. Malware Attack
  D. DDoS Attack`,
  answer: "A"
}, {
  question: `Ⅷ. What is difference between HTTPS and HTTP?
  A. SSH
  B. SSL/TLS
  C. DOS
  D. DHCP`,
  answer: "B"
}, {
  question: `Ⅸ. What comes in with the movies we download from torrent?
  A. TOR address
  B. Database
  C. BOT
  D. Bitcoin Address`,
  answer: "C"
}, {
  question: `Ⅹ. What is the biggest concern for big corportes?
  A. Economics
  B. Budget
  C. Cyber Awarness
  D. Espionage`,
  answer: "D"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  const result = play(currentQuestion.question, currentQuestion.answer);
  if (result === "Quit") {
    console.log(`Bye see you soon again.`)
    break;
  }

}
console.log(`${userName} your final score is: ${score}.\n \nThank you for playing....`);