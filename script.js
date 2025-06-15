const questions = [
    {
        Question: "which is largest animal in the world?",
        answers: [
          { text: "Shark", correct: false},
          { text: "Blue whale", correct: true},
          { text: "Elephant", correct: false},
          { text: "Giraffe", correct: false},
        ]
      },
      {
        question: "What data type is used to store single characters in C?",
        answers: [
          { text: "int", correct: false},
          { text: "float", correct: false},
          { text: "double", correct: false},
          { text: "char", correct: true},
        ]
      },
      {
         question: "Which statement is used to print output to the console in C?",
         answers: [ 
           { text: "read", correct: false},
           { text: "print", correct: false},
           { text: "scanf", correct: false},
           { text: "printf", correct: true},
         ]
        },
        {
         question: "What operator is used for assignment in C?",
         answers: [ 
           { text: "=", correct: true},
           { text: "==", correct: false},
           { text: "!=", correct: false},
           { text: ">", correct: false}, 
      ]
    }
];
       
      const questionElement = document.getElementById("question");
      const answerButtons = document.getElementById("answer-buttons");
      const nextButton = document.getElementById("next-btn");

     let currentQuestionIndex = 0;
     let score = 0;

     function startQuiz(){
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHtml = "Next";
      showQuestion();
     }

     function showQuestion(){
      resetState();
      let currentQuestion = questions[ currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHtml = questionNo + ". " + currentQuestion.
      question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHtml = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
      });
     }

     function resetState(){
      nextButton.style.display = "none";
      while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
      }
     }

     function selectAnswer(e){
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";
      if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
      }else{
        selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
     }

     function showScore(){
      resetState();
      questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
      nextButton.innerHTML = "play Again";
      nextButton.style.display = "block";
     }

     function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestion();
      }else{
        showScore();
      }
     }
     nextButton.addEventListener("click", ()=>{
      if(currentQuestionIndex < questions.length){
        handleNextButton();
      }
     })
     startQuiz();
