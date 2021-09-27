// reference to the button inside JS
// query slector is a way of asking the browser the element u need which has a particular id as in by inputting a paticular id 
//the browser gives the particular element to u 


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

console.log("txtInput")


function clickHandler(){
    console.log("clicked!");
    console.log("input", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)



// listening to events occuring due to user interaction 

//call back - whem this event happens do this 
//function clickEventHandler() {
//   console.log("clicked!")         this entire function is call back 

