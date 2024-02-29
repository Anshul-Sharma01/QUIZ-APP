const questions = [
    {
        question: "Who won the ICC CWC23",
        optns: ["India", "Australia", "New-Zealand", "England"],
        ans: "Australia"
    },
    {
        question: "Who founded Chitkara University",
        optns: ["Ashok K chitkara", "Abdul kalam", "Narendra Modi", "Sandeep Rana"],
        ans: "Ashok K chitkara"
    },
    {
        question: "What is the Full form of CQ",
        optns: ["CodeQarat", "CatQuote", "ChinaQatar", "CodeQuotient"],
        ans: "CodeQuotient"
    },
    {
        question: "Who is Badshah",
        optns: ["Singer", "Raja", "Emperor", "Noone"],
        ans: "Noone"
    },
    
];




let CQI = 0;
let rightansc = 0;
let quiz_area = document.createElement("div");
let ques_area = document.createElement("h3");
let optn_area = document.createElement("form");
let nxtbtn = document.createElement("button");

let field = document.querySelector("fieldset");
let startbtn = document.getElementById("startbtn");
field.appendChild(quiz_area);

startbtn.addEventListener('click', quiz_start);

function ques_display() {
    let question = questions[CQI];
    ques_area.textContent = question.question;
    optn_area.innerHTML = ''; 

    question.optns.forEach((option) => {
        let optionLabel = document.createElement("label");
        let optionInput = document.createElement("input");
        optionInput.type = "radio";
        optionInput.name = "option";
        optionInput.value = option;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        optn_area.appendChild(optionLabel);
    });
}

function checkAnswer() {
    let selectedOption = optn_area.option.value;
    let ans = questions[CQI].ans;
    if (selectedOption === ans) {
        rightansc++;
    }
}

function nextQuestion() {
    checkAnswer();
    CQI++;
    if (CQI < questions.length) {
        ques_display();
    } else {
        endQuiz();
    }
}

function quiz_start() {
    startbtn.style.display = 'none'; 
    quiz_area.appendChild(ques_area);
    quiz_area.appendChild(optn_area);
    nxtbtn.textContent = "Next Question";
    nxtbtn.addEventListener('click', nextQuestion);
    quiz_area.appendChild(nxtbtn);
    ques_display();
}

function endQuiz() {
    let result = rightansc === questions.length ? "Party!!!!!" : "Bhai Fail Hogaya Tu";
    quiz_area.innerHTML = `${result}`;
}

