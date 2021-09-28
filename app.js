// reference to the button inside JS
// query slector is a way of asking the browser the element u need which has a particular id as in by inputting a paticular id 
//the browser gives the particular element to u 


var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text

}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again after sometime")
}

function clickHandler(){
    // outputDiv.innerText="aajajajajajja " + txtInput.value;
    var inputText = txtInput.value;  // taking input 

    //callin server for processing 
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)   
};

btnTranslate.addEventListener("click", clickHandler)  //  taken the input(in var) wired the click handler (here)thus in the function part 




