
const theme_btn = document.querySelector("#theme");
const body = document.querySelector("body");
const img_sun_light = document.querySelector(".icon-sunlight");
const img_moon_light = document.querySelector(".icon-moonlight");
const intro_title = document.querySelector(".title-h1");
const paragraph_1 = document.querySelector(".p-1");
const question_number = document.querySelector(".question-number");
const question_content = document.querySelector(".question-content");
const title = document.querySelector(".title");
const score_board_tablet_mobile = document.querySelector(".score-board-tablet-mobile");
const quiz_type = document.querySelector(".quiz-type");
const score_number = document.querySelector(".score-number");
const the_score = document.querySelector(".the-score");

theme_btn.addEventListener("change", (e) => {
 if (e.target.checked) {
  body.style.background = "url('/starter-code/assets/images/pattern-background-mobile-dark.svg') no-repeat";
  body.style.backgroundColor = "var(--blue-900)";
  body.style.color = "unset"
  img_sun_light.src = "/starter-code/assets/images/icon-sun-light.svg";
  img_moon_light.src = "/starter-code/assets/images/icon-moon-light.svg";
  intro_title.style.color = "var(--white)";
  paragraph_1.style.color = "var(--blue-300)";
  question_number.style.color = "var(--blue-300)";
  question_content.style.color = "var(--white)"
  title.style.color = "var(--white)";
  score_board_tablet_mobile.style.backgroundColor = "var(--blue-850)"
  quiz_type.style.color = "var(--white)";
  score_number.style.color = "var(--white)";
  the_score.style.color = "var(--blue-300)";
 } else {
  body.style.backgroundImage = "url('/starter-code/assets/images/pattern-background-mobile-light.svg')";
  body.style.backgroundColor = "var(--grey-50)";
  img_sun_light.src = "/starter-code/assets/images/icon-sun-dark.svg";
  img_moon_light.src = "/starter-code/assets/images/icon-moon-dark.svg";
  intro_title.style.color = "var(--blue-900)";
  paragraph_1.style.color = "var(--gray-500)";
  question_number.style.color = "var(--gray-500)";
  question_content.style.color = "var(--blue-900)";
  title.style.color = "var(--blue-900)"
  score_board_tablet_mobile.style.backgroundColor = "var(--white)"
  quiz_type.style.color = "var(--blue-900)"
  score_number.style.color = "var(--blue-900)"
  the_score.style.color = "var(--grey-500)"

 }
})

const html = document.querySelector(".HTML");
const number = document.querySelector(".number")
const answer_container = document.querySelector(".answer-container")
const answer_a_content = document.querySelector(".answer-a-content");
const answer_b_content = document.querySelector(".answer-b-content");
const answer_c_content = document.querySelector(".answer-c-content");
const answer_d_content = document.querySelector(".answer-d-content");
const nextButton = document.querySelector(".submit-answer");

const css = document.querySelector(".CSS")

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    console.log("function works")
    console.log("user enter a subject")
    console.log("html")
    html.addEventListener("click", htmlQuiz)
    css.addEventListener("click", cssQuiz);
    console.log("css")
    console.log("js")
    console.log("accessibility")
}


function htmlQuiz() {
     fetch('/starter-code/data.json').then((response) => {
    if(!response.ok) return console.log('Opps! Something went wrong.')

    return response.json();
    }).then((data) => {
        console.log("htmlQuiz") 
        resetState()
        const data_file = data
        number.innerHTML = currentQuestionIndex + 1;
        question_content.innerHTML = data.quizzes[currentQuestionIndex].questions[currentQuestionIndex].question
        
        data.quizzes[currentQuestionIndex].questions[currentQuestionIndex].options.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer
            button.classList.add("btn");
            answer_container.appendChild(button);
            
            });

        function resetState() {
            nextButton.style.display = "none";
            while(answer_container.firstChild) {
                answer_container.removeChild(answer_container.firstChild)
            }
        }

        });

// html.addEventListener("click", (e) => {
 
//  fetch('/starter-code/data.json').then((response) => {
//  if(!response.ok) return console.log('Opps! Something went wrong.')

//  return response.json();
//  }).then((data) => {
//  console.log(data.quizzes[0]);
//  console.log(data.quizzes[0].questions);
//  number.innerHTML = "1";
//  console.log(number.innerHTML);
// console.log(data.quizzes[0].questions[0].options)
//  question_content.innerHTML = data.quizzes[0].questions[0].question;
//  answer_a_content.innerHTML = data.quizzes[0].questions[0].options[0];
//  answer_b_content.innerHTML = data.quizzes[0].questions[0].options[1];
//  answer_c_content.innerHTML = data.quizzes[0].questions[0].options[2];
//  answer_d_content.innerHTML = data.quizzes[0].questions[0].options[3];





    
    // showQuestion()
    // resetState()
    // selectAnswer()
    // showScore()
    // handleNextButton()
    // nextButton.addEventListener

}

function cssQuiz() {
    console.log("CSS quiz")
}


startQuiz()
