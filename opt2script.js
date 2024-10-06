const quizQuestions = [
    {
        question: "What is the main benefit of solar energy?",
        options: ["It is renewable", "It is cheap", "It requires fossil fuels", "It pollutes the environment"],
        answer: "It is renewable"
    },
    {
        question: "Which of the following is NOT a renewable energy source?",
        options: ["Wind", "Solar", "Coal", "Hydropower"],
        answer: "Coal"
    },
    {
        question: "What energy source utilizes the heat from the Earth's core?",
        options: ["Solar", "Wind", "Geothermal", "Biomass"],
        answer: "Geothermal"
    },
    {
        question: "Which type of renewable energy uses moving water to generate electricity?",
        options: ["Wind", "Geothermal", "Hydropower", "Biomass"],
        answer: "Hydropower"
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
