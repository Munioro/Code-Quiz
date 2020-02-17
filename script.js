//set global variables
var docBod = document.body;
var timeLeft = document.createElement('p');
var list = document.createElement('ul');
    var navElm = document.createElement('nav');
    var createH1 = document.createElement("h1");
    var createA = document.createElement('a');
    var h1Quest = document.createElement('h1');
    //var pAnwers = document.createElement('p');
    var pRa = document.createElement('p');


var timeRemaining;
var seconds = 100;
var count = 0;
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


onLoadFunction()
//function definitions
function onLoadFunction() {
    timeInterval();
    


    createA.innerText = "View Highscore";
    createH1.innerText = "Code Quiz";

    navElm.setAttribute('class', 'nav justify-content-center');
    createA.setAttribute("href", "#");

    docBod.appendChild(navElm);
    navElm.appendChild(createA);
    navElm.appendChild(createH1);
    navElm.appendChild(timeLeft);

    QuestionRotation();
}

function QuestionRotation(){
    var currentData = data[count];
    var list = document.createElement('ul');
    var div1 = document.createElement('div');


    // var options;
    var rightAnswer = currentData.ra;
    
    div1.setAttribute('class', 'container');


    docBod.appendChild(div1);

    


        var questions = currentData.question;
//        var options = currentData.answers;
        

        h1Quest.innerText = questions;
   //     pAnwers.innerText = options;


        
        div1.appendChild(h1Quest);
        div1.appendChild(list);

    
        for (var o = 0; o < currentData.answers.length; o++){
            var item = document.createElement('li');
            item.innerHTML = currentData.answers[o];
            list.appendChild(item);

            
        }
    
    list.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.innerText === rightAnswer){
            count ++;
            console.log(count)
            console.log(event.target)
            console.log(rightAnswer);
            pRa.innerText = "Correct!";
            div1.appendChild(pRa);
            setTimeout(function (){clearDiv(), QuestionRotation()}, 1000);
                
        }else {
            pRa.innerText = "Incorrect";
            seconds -= 10;
            console.log(seconds);
            div1.appendChild(pRa);
            console.log(this)
            setTimeout(function (){clearDiv(), QuestionRotation()}, 1000);
        }

    });
console.log(count)
}

function clearDiv(){ 
    var getDiv = document.querySelector('div');

    getDiv.remove();
            
    //return QuestionRotation();
    
}


function timeInterval(){
        timeRemaining = setInterval(() => {
        seconds --;

        timeLeft.innerText = seconds +" seconds left";


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


    loseH1.innerText = "Sorry, you lose!";
    loseP.innerHTML = "Brush up on the content then try again later";
    tryAgain.innerText = "Try Again";

    docBod.appendChild(losePage)
    losePage.appendChild(loseH1);
    losePage.appendChild(loseP);
    losePage.appendChild(tryAgain);

    tryAgain.addEventListener('click', () => {clearDiv(); count=0;seconds=100; QuestionRotation();timeInterval();});



}