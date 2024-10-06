const funFacts = [
    "Climate change is expected to affect every country on every continent.",
    "The last decade was the warmest on record.",
    "Sea levels are rising, and they could rise as much as 2 feet by 2050.",
    "Greenhouse gases trap heat in the atmosphere, leading to global warming.",
    "Renewable energy sources can help mitigate climate change.",
];

const quizQuestions = [
    {
        question: "What gas is primarily responsible for climate change?",
        options: ["Carbon Dioxide (CO2)", "Oxygen (O2)", "Nitrogen (N2)", "Methane (CH4)"],
        answer: "Carbon Dioxide (CO2)"
    },
    {
        question: "Which country is the largest emitter of CO2?",
        options: ["United States", "China", "India", "Russia"],
        answer: "China"
    },
    {
        question: "What is the main effect of climate change on oceans?",
        options: ["Cooling", "Acidification", "Reduction of salt", "Increased fish populations"],
        answer: "Acidification"
    },
    {
        question: "What international agreement aims to limit global warming?",
        options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Rio Agreement"],
        answer: "Paris Agreement"
    },
];

let currentQuestionIndex = 0;

function showQuiz() {
    document.getElementById("quiz").style.display = "block";
    currentQuestionIndex = 0;
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("quiz-question").textContent = question.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "btn btn-outline-light mr-2 mt-2";
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = quizQuestions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        alert("Correct answer!");
    } else {
        alert("Wrong answer. The correct answer is: " + question.answer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        alert("Quiz completed!");
    }
}

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById("fun-fact").textContent = funFacts[randomIndex];
}
// Initialize map
var map = L.map('map').setView([20, 0], 2);  // Centered on the equator with zoom level 2

// Add OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adding markers for climate hotspots
var marker1 = L.marker([-3.4653, -62.2159]).addTo(map) // Amazon Rainforest
    .bindPopup('<b>Amazon Rainforest</b><br>Deforestation Zone.');
var marker2 = L.marker([60.0722, -44.0377]).addTo(map) // Greenland Ice Sheet
    .bindPopup('<b>Greenland Ice Sheet</b><br>Ice melting due to rising temperatures.');
