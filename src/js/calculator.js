const inputField = document.querySelector(".resultbar"); 
const startValue = "";
let firstValue = "";
let lastValue = "";
let operations = "";
let tempTotal = 0;
let bufffer = 0;

function buttonClick(button){
    if(operations == "" && tempTotal == 0){
       //firstValue = button.value;
        inputField.innerText += button.value; 

    }
    else {
        lastValue = button.value;
        inputField.innerText += lastValue;
        if (tempTotal > 0){
            console.log("lastValue " + lastValue);
            switch(operations){
                case "adds":
                    tempTotal = parseInt(tempTotal) + parseInt(lastValue);
                    break;
                case "divide":
                    tempTotal = tempTotal / lastValue;
                    break;
                case "multiply":
                    tempTotal = tempTotal * lastValue;
                    break;
                case "sub":
                    tempTotal = tempTotal - lastValue;
                    break;
            } 
        }
        else {
            switch(operations){
                case "adds":
                    tempTotal = parseInt(firstValue) + parseInt(lastValue);
                    break;
                case "divide":
                    tempTotal = firstValue / lastValue;
                    break;
                case "multiply":
                    tempTotal = firstValue * lastValue;
                    break;
                case "sub":
                    tempTotal = firstValue - lastValue;
                    break;
            } 
        }
        operations = ""; 
        console.log("temptotal " + tempTotal);
    }
    
}

function doMath(first, last, mathOp){
    console.log("temptotal " + tempTotal);
    let tempT = tempTotal;
    switch(mathOp){
        case "adds":
            tempT = first + last;
            break;
        case "divide":
            tempT = first / last;
            break;
        case "multiply":
            tempT = first * last;
            break;
        case "sub":
            tempT = first - last;
            break;
    } 
    console.log(tempT);
    operations = "";
}

function operation(button){
    switch(button.value){
        case "adds":
            operations = "adds";
            break;
        case "divide":
            operations = "divide";
            break;
        case "multiply":
            operations = "multiply";
            break;
        case "sub":
            operations = "sub";
            break;
    }
    inputField.innerText=startValue;
    console.log(operations);
}

function removeNum(){
    let string = inputField.innerText;
    let newStr = string.substring(0, string.length - 1); 
    inputField.innerText = newStr;  
}

// function storeFirstValue(this){
//     firstValue = inputField.innerText;
//     console.log("firstValue: " + firstValue);
//     inputField.innerText = startValue;   
// }


function clearResult(){
    inputField.innerText = "";
    firstValue = startValue;
    lastValue = startValue;
    operations = startValue;
    tempTotal = 0;
    console.log("First value reset " + firstValue);
}



$(document).ready(function(){
    const inputField = document.querySelector(".resultbar"); 
    console.log(inputField);








































});