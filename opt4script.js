const quizQuestions = [
    {
        question: "What is a primary cause of habitat loss?",
        options: ["Urbanization", "Increased biodiversity", "Wildlife conservation", "Planting more trees"],
        answer: "Urbanization"
    },
    {
        question: "Which of the following can be an invasive species?",
        options: ["Bamboo", "Goldfish", "Bluebells", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How does climate change impact ecosystems?",
        options: ["It stabilizes habitats", "It has no effect", "It shifts species distributions", "It increases biodiversity"],
        answer: "It shifts species distributions"
    },
    {
        question: "What effect does pollution have on ecosystems?",
        options: ["Improves habitat quality", "Increases biodiversity", "Harms wildlife", "No impact"],
        answer: "Harms wildlife"
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
