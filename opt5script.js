const quizQuestions = [
    {
        question: "What is a major benefit of renewable energy?",
        options: ["It is inexpensive to produce", "It is non-polluting", "It requires fossil fuels", "It is inconsistent"],
        answer: "It is non-polluting"
    },
    {
        question: "Which of the following is a climate action solution?",
        options: ["Deforestation", "Reforestation", "Increasing waste", "Burning coal"],
        answer: "Reforestation"
    },
    {
        question: "What is one way to improve energy efficiency?",
        options: ["Using incandescent bulbs", "Switching to LED lighting", "Keeping old appliances", "Increasing heating"],
        answer: "Switching to LED lighting"
    },
    {
        question: "How can public transportation help reduce climate change?",
        options: ["By increasing emissions", "By reducing the number of cars on the road", "By promoting fossil fuels", "By expanding urban areas"],
        answer: "By reducing the number of cars on the road"
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
