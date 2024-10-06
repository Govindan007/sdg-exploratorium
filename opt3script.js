const quizQuestions = [
    {
        question: "What is a major impact of climate change on agriculture?",
        options: ["Increased yields", "Drought and crop failure", "Stable weather patterns", "Less pesticide use"],
        answer: "Drought and crop failure"
    },
    {
        question: "Which region is most at risk due to rising sea levels?",
        options: ["Deserts", "Coastal areas", "Mountains", "Forests"],
        answer: "Coastal areas"
    },
    {
        question: "How does climate change affect human health?",
        options: ["Decreased disease spread", "More heat-related illnesses", "Increased mental well-being", "No effects"],
        answer: "More heat-related illnesses"
    },
    {
        question: "What can climate change cause in ecosystems?",
        options: ["Increased biodiversity", "Species extinction", "Stable habitats", "More food resources"],
        answer: "Species extinction"
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
