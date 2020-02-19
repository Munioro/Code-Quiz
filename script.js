//set global variables
var docBod = document.body;
var timeLeft = document.createElement('p');
var list = document.createElement('ul');
var navElm = document.createElement('nav');
var createH1 = document.createElement("h1");
var createA = document.createElement('a');
var h1Quest = document.createElement('h1');
var pRa = document.createElement('p');
var timeRemaining;
var Highscores = [];
var seconds = 100;
var count = 0;
//enter data for questions
var data = [
    {
        question : "Which of the following is not a language used in web developing?",
        answers : ["HTML", "CSS", "ACRS", "JavaScript" ],
        ra : "ACRS"
    },
    {
        question : "Where do you place a reference to a css file?",
        answers : ["head", "body", "style", "script"],
        ra : "head"
    },
    {
        question : "Where should you place a reference to a JavaScript file?",
        answers : ["head", "body", "style", "script"],
        ra : "script"
    },
    {
        question : "Which is not a position value?",
        answers : ["absolute", "hover","relative", "fixed"],
        ra : "hover"
    },
    {
        question : "Which of the following is used to anchor a hyperlink?",
        answers : ["link", "button", "p", "a"],
        ra : "a",
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
];

//call on load function
onLoadFunction()

//creat click event to view Highscore
createA.addEventListener('click', function(){
    clearInterval(timeRemaining);
    clearDiv();

    var storedScores = JSON.parse(localStorage.getItem('Highscores'));
    var divHS = document.createElement('div');
    var h1HS = document.createElement('h1');
    var listHS = document.createElement('ol');
    var startQuiz = document.createElement('button');
    
    if (storedScores !== null){
        Highscores = storedScores;
    }
    //rendor highscore page
    h1HS.innerText = 'HighScrore'
    startQuiz.innerText = "Start Quiz";

    divHS.setAttribute('class', 'card');

    docBod.appendChild(divHS);
    divHS.appendChild(h1HS);
    divHS.appendChild(listHS);
    divHS.appendChild(startQuiz);
    //reset quiz when button is clicked
    startQuiz.addEventListener('click', () => {clearDiv(); count=0;seconds=100; QuestionRotation();timeInterval();});

    //rendor list of saved High Scores
    for(var i = 0; i < Highscores.length; i++){
        var highScr = document.createElement('li');


        highScr.innerText = Highscores[i];

        listHS.appendChild(highScr);

    }

})
//function definitions
function onLoadFunction() {
    timeInterval();
    

    //create navbar
    createA.innerText = "View Highscore";
    createH1.innerText = "Code Quiz";

    navElm.setAttribute('class', 'nav justify-content-center');
    createA.setAttribute("href", "#view-highscore");

    docBod.appendChild(navElm);
    navElm.appendChild(createA);
    navElm.appendChild(createH1);
    navElm.appendChild(timeLeft);

    //call function to start quiz
    QuestionRotation();
}

function QuestionRotation(){
    var currentData = data[count];
    var list = document.createElement('ul');
    var div1 = document.createElement('div');
    var rightAnswer = currentData.ra;
    var questions = currentData.question;
    
    //create div to insert data
    div1.setAttribute('class', 'card');

    docBod.appendChild(div1);

    //rendor questions
    h1Quest.innerText = questions;    
    div1.appendChild(h1Quest);
    div1.appendChild(list);

    //rendor answers
    for (var o = 0; o < currentData.answers.length; o++){
        var item = document.createElement('button');
        var listItem = document.createElement('div');
       
        item.setAttribute('type', 'button');
        item.setAttribute('class', 'btn btn-outline-dark');
        item.innerHTML = currentData.answers[o];
        list.appendChild(listItem);
        listItem.appendChild(item);      
    }
    
    //add event listner for answers
    list.addEventListener('click', function(event) {
        event.preventDefault();
        //target correct answer
        if (event.target.innerText === rightAnswer){
            count ++;
            console.log(count)
            console.log(event.target)
            console.log(rightAnswer);
            pRa.innerText = "Correct!";
            div1.appendChild(pRa);
            //clear old question and write next one
            if(count !== data.length){
            setTimeout(function (){clearDiv(), QuestionRotation()}, 1000);
            }else {
                //call form function when questions end
                clearInterval(timeRemaining);
                h1Quest.remove();
                list.remove();
                enterHighscore(div1);
            }              
        }else {
            //show incorrect if wrong answer is clicked
            pRa.innerText = "Incorrect";
            seconds -= 10;
            console.log(seconds);
            div1.appendChild(pRa);
            console.log(this);
            if (seconds > 0){
            setTimeout(function (){clearDiv(), QuestionRotation()}, 1000);
            }
        }
    });
console.log(count)
}

function clearDiv(){ 
    var getDiv = document.querySelector('div');

    getDiv.remove();    
}

//create time interval
function timeInterval(){
    timeRemaining = setInterval(() => {
        seconds --;

        timeLeft.innerText = seconds +" seconds left";

        //stop time when it reaches 0
        if(seconds <= 0){
            clearInterval(timeRemaining);
            clearDiv();
            youLose();
        }
    }, 1000);
}
function youLose(){
    
    var losePage = document.createElement('div');
    var loseH1 = document.createElement('h1');
    var loseP = document.createElement('p');
    var tryAgain = document.createElement('button');

    losePage.setAttribute('class', 'card');
    
    loseH1.innerText = "Sorry, you lose!";
    loseP.innerHTML = "Brush up on the content then try again later";
    tryAgain.innerText = "Try Again";

    docBod.appendChild(losePage)
    losePage.appendChild(loseH1);
    losePage.appendChild(loseP);
    losePage.appendChild(tryAgain);

    tryAgain.addEventListener('click', () => {clearDiv(); count=0;seconds=100; QuestionRotation();timeInterval();});
}
//create form when quiz is over
function enterHighscore(divForm){
    var formHS = document.createElement('form');
    var labelName = document.createElement('label');
    var inputName = document.createElement('input');

    labelName.setAttribute('for', 'name');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');

    labelName.innerText = "Enter Name";

    divForm.appendChild(formHS);
    formHS.appendChild(labelName);
    formHS.appendChild(inputName);
    //add submit listener
    formHS.addEventListener('submit', function (event) {
        event.preventDefault();
        
        var inputText = inputName.value.trim();
        var score = inputText + ' ' + seconds;

        //save form to memory
        Highscores.push(score);
        Highscores.sort(function (a, b){return b - a});
        localStorage.setItem('highscores', JSON.stringify(Highscores));
        console.log(Highscores);
        console.log(localStorage);

        //reset quiz
        clearDiv();
        count = 0;
        seconds = 100
        QuestionRotation();
        timeInterval();
    })
}