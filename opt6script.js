const quizQuestions = [
    {
        question: "How many Sustainable Development Goals are there?",
        options: ["15", "17", "20", "18"],
        answer: "17"
    },
    {
        question: "Which SDG aims to end poverty in all its forms?",
        options: ["Goal 1", "Goal 2", "Goal 3", "Goal 4"],
        answer: "Goal 1"
    },
    {
        question: "What is the focus of SDG 13?",
        options: ["Quality Education", "Climate Action", "Clean Water", "Sustainable Cities"],
        answer: "Climate Action"
    },
    {
        question: "Which goal promotes gender equality?",
        options: ["Goal 5", "Goal 6", "Goal 7", "Goal 8"],
        answer: "Goal 5"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("quiz-result");
    resultContainer.innerHTML = ""; // Clear previous result
    quizContainer.style.display = "block"; // Show quiz container

    let currentQuestionIndex = 0;

    function loadNextQuestion() {
        const questionElement = document.getElementById("quiz-question");
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = ""; // Clear previous options

        if (currentQuestionIndex < quizQuestions.length) {
            questionElement.textContent = quizQuestions[currentQuestionIndex].question;
            quizQuestions[currentQuestionIndex].options.forEach(option => {
                const button = document.createElement("button");
                button.classList.add("btn", "cosmic-btn", "mt-2");
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsContainer.appendChild(button);
            });
        } else {
            quizContainer.style.display = "none"; // Hide quiz container
            resultContainer.textContent = "Quiz completed! Refresh to try again.";
        }
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
            alert("Correct!");
        } else {
            alert("Wrong answer. Try again!");
        }
        currentQuestionIndex++;
        loadNextQuestion();
    }

    loadNextQuestion(); // Load the first question
}
