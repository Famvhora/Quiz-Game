const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighTech Modern Language", "HyperTransfer Markup Language", "HyperText Machine Learning"],
        answer: "HyperText Markup Language"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "What is the correct JavaScript syntax to print 'Hello World' in the console?",
        options: ["print('Hello World');", "console.log('Hello World');", "echo 'Hello World';", "document.write('Hello World');"],
        answer: "console.log('Hello World');"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Character", "Number"],
        answer: "Character"
    },
    {
        question: "What symbol is used for comments in Python?",
        options: ["//", "/* */", "#", "--"],
        answer: "#"
    },
    {
        question: "Which of the following is used to style a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which keyword is used to define a variable in JavaScript?",
        options: ["let", "var", "const", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does 'DOM' stand for in JavaScript?",
        options: ["Document Object Model", "Data Object Model", "Dynamic Object Management", "Document Order Model"],
        answer: "Document Object Model"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");

    optionsEl.innerHTML = "";
    questionEl.innerText = quizData[currentQuestionIndex].question;

    quizData[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(button, option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(button, selectedOption) {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    document.getElementById("score").innerText = `Score: ${score}`;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert(`Quiz Completed! Your final score is ${score}/${quizData.length}`);
        location.reload();
    }
}

loadQuestion();
