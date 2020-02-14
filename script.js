//set global variables
var docBod = document.body;
var count = 1;
var data = [
    {
        question : "Which of the following is not a language used in web developing?",
        answers : ["HTML", "CSS", "ACRS", "JavaScript" ],
        ra : "ACRS"
    },
    {
        question : "Where do you place a reference to a css file?",
        answers : ["<head>", "<body>", "<style>", "<script>"],
        ra : "<head>"
    },
    {
        question : "Where should you place a reference to a JavaScript file?",
        answers : ["<head>", "<body>", "<style>", "<script>"],
        ra : "<script>"
    },
    {
        question : "Which is not a position value?",
        answers : ["absolute", "hover","relative", "fixed"],
        ra : "hover"
    },
    {
        question : "Which of the following is used to anchor a hyperlink?",
        answers : ["<link>", "<button", "<p>", "<a>"],
        ra : "<a>",
    },
    {
        question : "Which is not a value in JavaScript?",
        answers : ["var", "boolean", "string", "integer"],
        ra : "var",
    },
    {
        question : "which of the following attribute sets a unique identifier to an element?",
        answers : ["class", "src", "id", "title"],
        ra : "id",
    },
    {
        question : "Which of the following identifies a selector as a class?",
        answers : ["#", "$", "/", "."],
        ra : ".",
    },
    {
        question : "What is a function?",
        answers : ["array", "element", "method", "variable"],
        ra : "method",
    },
    {
        question : "what does DOM stand for?",
        answers : ["Document Object Model", "Document Orientation Method", "Document Object Method", "Document Orientation Model"],
        ra : "Document Object Model",
    }
]

onLoadFunction()

//function definitions
function onLoadFunction() {
    var navElm = document.createElement('nav');
    var createH1 = document.createElement("h1");
    var createA = document.createElement('a');
    var timeLeft = document.createElement('p');

    createA.innerText = "View Highscore";
    createH1.innerText = "Code Quiz";
    timeLeft.innerText = count + " seconds left";

    navElm.setAttribute('class', 'nav justify-content-center');
    createA.setAttribute("href", "#");

    docBod.appendChild(navElm);
    navElm.appendChild(createA);
    navElm.appendChild(createH1);
    navElm.appendChild(timeLeft);

    QuestionRotation();
}

function QuestionRotation(){
    var div1 = document.createElement('div');
    var h1Quest = document.createElement('h1');
    var pAnwers = document.createElement('p')
    var pRa = document.createElement('p');
    // var options;
    // var rightAnswer = data.ra;



    div1.setAttribute('class', 'container');

    docBod.appendChild(div1);
    for (var i = 0; i < count; i++){
        var questions = data[i].question;
        
        h1Quest.innerText = questions;

        
        div1.appendChild(h1Quest);
        div1.appendChild(pAnwers);
    }

}
