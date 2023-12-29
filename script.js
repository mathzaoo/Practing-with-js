const questions = [
{

    question: "Quando La costruzione della Torre Eiffel fu completata?",
    answers: [
                { Text: "1889 ", correct: true}, 
                { Text: "1990 ", correct: false}, 
                { Text: "1874 ", correct: false}, 
                { Text: "1880 ", correct: false}, 
    ]
},
{
    question: "Qual'e il continente piu grande del mondo ?",
    answers: [
                { Text: "Asia ", correct: true}, 
                { Text: "Australia ", correct: false}, 
                { Text: "sahara ", correct: false}, 
                { Text: "antartica ", correct: true}, 
    ] 
},
{
    question: "Qual'è il continente piu piccolo?",
    answers: [
                { Text: "Asia ", correct: false}, 
                { Text: "Australia ", correct: true}, 
                { Text: "Artic ", correct: false}, 
                { Text: "Africa ", correct: false}, 
    ]
},
{
    question: "Qual'e l'animale piu grande del mondo?",
    answers: [
                { Text: "Squallo  ", correct: true}, 
                { Text: "Blue whale ", correct: true}, 
                { Text: "Elefante ", correct: false}, 
                { Text: "Giraffa ", correct: false}, 
    ]


},

];

const questionElement= document.getElementById("question");
const answerButton= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentquestionindex = 0;
let score= 0;

function startQuiz(){
      currentquestionindex= 0;
      score= 0;
      nextButton.innerHTML= "Next";
      showQuestion();

}
function showQuestion() {
    let currentQuestion = questions [currentquestionindex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    });
}
 startQuiz();