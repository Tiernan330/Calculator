

let AnswerBoard = document.querySelector('.answer');

function buttonPress(button){
    if(button == "AC"){
        AnswerBoard.textContent = "";
        return;
    }
    if(button == "oParenth"){
        button = "("
    }
    if(button == "cParenth"){
        button = ")"
    }
    if(button == "^"){
        button = "**"
    }
    if(button == "="){
        console.log(AnswerBoard.textContent);
        AnswerBoard.textContent = eval(AnswerBoard.textContent);
        return;
    }
    console.log(button);
    AnswerBoard.textContent = AnswerBoard.textContent + button;
    AnswerBoard.textContent = AnswerBoard.textContent;
}

function equal(){
    AnswerBoard.textContent = evaluate(AnswerBoard.textContent);
}