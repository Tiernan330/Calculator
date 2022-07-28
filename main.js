

let AnswerBoard = document.querySelector('.answer');
let mathSymbol = false;
let symbol = null;

function buttonPress(button){
    if(button == "AC"){
        AnswerBoard.textContent = "";
        mathSymbol = false;
        symbol = 0;
        numbers = [];
        return;
    }
    if(AnswerBoard.textContent == "No equation" || AnswerBoard.textContent == "Cant divide 0"){
        AnswerBoard.textContent = '';
    }
    if(button == "oParenth" || button == "cParenth" ){
        return;
    }
    if(button == "+"){
        if(mathSymbol == true){
            calculate();
            symbol = "add";
            AnswerBoard.textContent += button;
            return;
        }else{
            symbol = "add";
            AnswerBoard.textContent += button;
            mathSymbol = true;
            return;
        }
    }
    if(button == "-"){
        if(mathSymbol == true){
            calculate();
            symbol = "subtract";
            AnswerBoard.textContent += button;
            return;
        }else{
            symbol = "subtract";
            AnswerBoard.textContent += button;
            mathSymbol = true;
            return;
        }
    }
    if(button == "*"){
        if(mathSymbol == true){
            calculate();
            symbol = "multiply";
            AnswerBoard.textContent += button;
            return;
        }else{
            symbol = "multiply";
            AnswerBoard.textContent += button;
            mathSymbol = true;
            return;
        }
    }
    if(button == "/"){
        if(mathSymbol == true){
            calculate(AnswerBoard.textContent);
            symbol = "divide";
            AnswerBoard.textContent += button;
            return;
        }else{
            symbol = "divide";
            AnswerBoard.textContent += button;
            mathSymbol = true;
            return;
        }
    }
    if(button == "^"){
        if(mathSymbol == true){
            calculate(AnswerBoard.textContent);
            symbol = "exponent";
            AnswerBoard.textContent += button;
            return;
        }else{
            symbol = "exponent";
            AnswerBoard.textContent += button;
            mathSymbol = true;
            return;
        }
    }
    if(button == "="){
        calculate(AnswerBoard.textContent);
        mathSymbol = false;
        symbol = null;
        return;
    }


    AnswerBoard.textContent += button;
}

function calculate(array){
    let numbers = null;
    let answer = null;
    console.log(symbol);
    
    switch(symbol){
        case 'add':
            console.log("add");
            numbers = AnswerBoard.textContent.split('+');
            answer = add(parseFloat(numbers[0]), parseFloat(numbers[1]));
            break;
        case 'subtract':
            console.log("subtract");
            numbers = AnswerBoard.textContent.split('-');
            answer = subtract(parseFloat(numbers[0]), parseFloat(numbers[1]));
            break;
        case 'multiply':
            console.log("multiply");
            numbers = AnswerBoard.textContent.split('*');
            answer = multiply(parseFloat(numbers[0]), parseFloat(numbers[1]));
            break;
        case 'divide':
            console.log("divide");
            numbers = AnswerBoard.textContent.split('/');
            answer = division(parseFloat(numbers[0]), parseFloat(numbers[1]));
            break;
        case 'exponent':
            console.log("exponent");
            numbers = AnswerBoard.textContent.split('^');
            answer = exponent(parseFloat(numbers[0]), parseFloat(numbers[1]));
            break;
            
    }
    if(String(answer) == "NaN" || answer == null){
        NoEquation();
        return;
    }
    console.log(numbers);
    AnswerBoard.textContent = '' + answer;
    return;
}



function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function division(x, y){
    if(y == 0){
        return "Cant divide 0";
    }
    return x/y;
}
function exponent(x, y){
    return x ** y;
}

function NoEquation(){
    AnswerBoard.textContent = "No equation";
    return;
}