
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
const score_number_desktop = document.querySelector(".score-number-desktop");
const the_score = document.querySelector(".the-score");
const question_page = document.querySelector(".question");
const page_1 = document.querySelector(".page-1")
const quizzes_type_name = document.querySelector(".quiz-type-name");
const quizzes_type_img = document.querySelector(".quiz-type-img")
const quizzes_type_name_mobile = document.querySelector(".quiz-type-name-mobile");
const quizzes_type_img_mobile = document.querySelector(".quiz-type-img-mobile");
const play_again_btn = document.querySelector(".play-again-btn-tablet-mobile");
const play_again_btn_desktop = document.querySelector(".play-again-btn");
const quiz_completed = document.querySelector(".quiz-completed")

// Color theme light and dark mode
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

const play_again_mobile = document.querySelector(".play-again-btn-tablet-mobile")
const css = document.querySelector(".CSS")

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    html.addEventListener("click", htmlQuiz)
    css.addEventListener("click", cssQuiz);
}


function htmlQuiz() {
     fetch('/starter-code/data.json').then((response) => {
    if(!response.ok) return console.log('Opps! Something went wrong.')

    return response.json();
    }).then((data) => {
        console.log("htmlQuiz") 


        
        showQuestion()
        function showQuestion(){
            resetState()
            const data_file = data;
            const question_content_data = data_file.quizzes[0].questions[currentQuestionIndex].question
            console.log(data_file.quizzes[0].questions[currentQuestionIndex])
            number.innerHTML = currentQuestionIndex + 1;
            question_content.textContent = question_content_data;
        
            data_file.quizzes[0].questions[currentQuestionIndex].options.forEach(answer => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("btn");
                answer_container.appendChild(button);
                if (answer.correct == data.quizzes[0].questions[currentQuestionIndex].answer) {
                    console.log("run this line for correct answer")
                    console.log(correct)
                }
                button.addEventListener("click", selectAnswer)
                });
        }

        function resetState() {
            nextButton.style.display = "none";
            while(answer_container.firstChild) {
                answer_container.removeChild(answer_container.firstChild)
            }
        }

        function selectAnswer(e) {
            const selectBtn = e.target;
            const isCorrect = selectBtn.textContent === data.quizzes[0].questions[currentQuestionIndex].answer

            if (isCorrect) {
                selectBtn.classList.add("correct")
                score++
            } else {
                selectBtn.classList.add("incorrect")
            }
            Array.from(answer_container.children).forEach(button => {
                if (button.innerHTML === data.quizzes[0].questions[currentQuestionIndex].answer) {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            answer_container.appendChild(nextButton);
            nextButton.style.display = "block";
        }

            function showScore() {
                resetState();
                score_number.textContent =  `${score} out of ${questions.length}!`
                score_number_desktop.textContent =  `${score} out of ${questions.length}!`

                quizzes_type_name.textContent = `HTML`;
                quizzes_type_img.src = "./starter-code/assets/images/icon-html.svg"
                quizzes_type_img_mobile.src = "./starter-code/assets/images/icon-html.svg"
                quizzes_type_name_mobile.textContent = `HTML`;
            }

        function handleNextButton(){
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            } 
        }
        const questions = data.quizzes[0].questions

        nextButton.addEventListener("click", ()=>{
            if (currentQuestionIndex < questions.length) {
                handleNextButton()
            } else {
                startQuiz();
            }
        })

        play_again_btn.addEventListener("click", ()=> {
            console.log("Restart the quiz")
            // page_1.style.display = "flex";
            // currentQuestionIndex = 0;
            // score = 0;
            window.location.reload();
        })

    });

}

function cssQuiz() {
     fetch('/starter-code/data.json').then((response) => {
    if(!response.ok) return console.log('Opps! Something went wrong.')

    return response.json();
    }).then((data) => {
        console.log("htmlQuiz") 


        
        showQuestion()
        function showQuestion(){
            resetState()
            const data_file = data;
            const question_content_data = data_file.quizzes[1].questions[currentQuestionIndex].question
            console.log(data_file.quizzes[1].questions[currentQuestionIndex])
            number.innerHTML = currentQuestionIndex + 1;
            question_content.textContent = question_content_data;
        
            data_file.quizzes[1].questions[currentQuestionIndex].options.forEach(answer => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("btn");
                answer_container.appendChild(button);
                if (answer.correct == data.quizzes[1].questions[currentQuestionIndex].answer) {
                    console.log("run this line for correct answer")
                    console.log(correct)
                }
                button.addEventListener("click", selectAnswer)
                });
        }

        function resetState() {
            nextButton.style.display = "none";
            while(answer_container.firstChild) {
                answer_container.removeChild(answer_container.firstChild)
            }
        }

        function selectAnswer(e) {
            const selectBtn = e.target;
            const isCorrect = selectBtn.textContent === data.quizzes[1].questions[currentQuestionIndex].answer

            if (isCorrect) {
                selectBtn.classList.add("correct")
                score++
            } else {
                selectBtn.classList.add("incorrect")
            }
            Array.from(answer_container.children).forEach(button => {
                if (button.innerHTML === data.quizzes[1].questions[currentQuestionIndex].answer) {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            answer_container.appendChild(nextButton);
            nextButton.style.display = "block";
        }

            function showScore() {
                resetState();
                score_number.textContent =  `${score} out of ${questions.length}!`
                score_number_desktop.textContent =  `${score} out of ${questions.length}!`

                quizzes_type_name.textContent = `CSS`;
                quizzes_type_img.src = "./starter-code/assets/images/icon-css.svg"
                quizzes_type_img_mobile.src = "./starter-code/assets/images/icon-css.svg"
                quizzes_type_name_mobile.textContent = `CSS`;
            }

        function handleNextButton(){
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showScore();
            } 
        }
        const questions = data.quizzes[0].questions

        nextButton.addEventListener("click", ()=>{
            if (currentQuestionIndex < questions.length) {
                handleNextButton()
            } else {
                startQuiz();
            }
        })

        play_again_btn.addEventListener("click", ()=> {
            console.log("Restart the quiz")
            // page_1.style.display = "flex";
            // currentQuestionIndex = 0;
            // score = 0;
            window.location.reload();
        })

    });

}


startQuiz()
