// reference to the button inside JS
// query slector is a way of asking the browser the element u need which has a particular id as in by inputting a paticular id 
//the browser gives the particular element to u 


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText="aajajajajajja " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)  //  taken the input(in var) wired the click handler (here)thus in the function part 




