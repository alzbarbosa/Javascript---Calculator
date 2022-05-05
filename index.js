let firstNumDisplay = " ";
let secondNumDisplay = " ";
let signalDisplay = " ";
let resultDisplay = 0;
let firstNumActive = true;
let secondNumActive = false;
let previewFirst = "";
let previewSecond = "";

let resultEl = document.getElementById("result-el");
resultEl.textContent = 0; 

function display () {
resultEl.textContent = firstNumDisplay + " " + signalDisplay + " " + secondNumDisplay;  
}

function numberButton (num) {
  if (firstNumActive === true) {
    firstNumDisplay += num;
  } else if(secondNumActive === true) {
   secondNumDisplay += num;    
   }
  display(); 
}

function createSignal(signal) {
 if (firstNumDisplay === " ") {
  resultEl.textContent = "Digite a number first"; 
 }
 else {
 firstNumActive = false;
 secondNumActive = true;
 signalDisplay = signal; 
 display();
 }
}

function signalFac() {
   if (firstNumDisplay === " ") {
 resultEl.textContent = "Digite a number first"; 
 }
  else {
     firstNumActive = false;
 secondNumActive = true;
 signalDisplay = "!"; 
 result();
  }
 
}

function solve() {
previewFirst = firstNumDisplay;
firstNumDisplay = resultDisplay;
previewSecond = secondNumDisplay;
secondNumDisplay = "";  
resultEl.textContent = previewFirst + " " + signalDisplay + " " + previewSecond + " " + "=" + " " + resultDisplay;  
}

function result() {
if (signalDisplay === "+") {
resultDisplay = parseInt(firstNumDisplay) + parseInt(secondNumDisplay);
previewFirst = firstNumDisplay;
firstNumDisplay = resultDisplay;
previewSecond = secondNumDisplay;
secondNumDisplay = "";  
resultEl.textContent = previewFirst + " " + signalDisplay + " " + previewSecond + " " + "=" + " " + resultDisplay; 
}
if (signalDisplay === "-") {
resultDisplay = parseInt(firstNumDisplay) - parseInt(secondNumDisplay);
solve()
}
  
if (signalDisplay === "*") {
resultDisplay = parseInt(firstNumDisplay) * parseInt(secondNumDisplay); 
solve() 
}
if (signalDisplay === "/") {
resultDisplay = parseInt(firstNumDisplay) / parseInt(secondNumDisplay); 
solve()
} 
if (signalDisplay === "**") {
resultDisplay = parseInt(firstNumDisplay) ** parseInt(secondNumDisplay); 
solve()
}
if (signalDisplay === "!") {
resultDisplay = 1;
for (let i = 1; i<=parseInt(firstNumDisplay); i++) {
resultDisplay *= i;
}
previewFirst = firstNumDisplay;
firstNumDisplay = resultDisplay;
resultEl.textContent = previewFirst + " " + signalDisplay + " " + "=" + " " + resultDisplay; 
}
};

function clearAll() {
firstNumDisplay = " ";
secondNumDisplay = " ";
signalDisplay = " ";
resultDisplay = 0;
firstNumActive = true;
secondNumActive = false;
resultEl.textContent = 0 
}
