/*Event handler, could also use addEventListener("load", (event) => {}); OR onload = (event) => {};*/
window.onload = function() {

/*Create variables, Local Scope, append=adding adding or attaching something, getElementById=uses the id in html*/
    var seconds = "00";
    var tens = "00";
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");

/*Interval variable, Interval function exicutes a specified function at fixed time intervals.
It takes 2 paramenters: function to be exicuted and the interval (milliseconds) at which the 
function should be called.*/
    var Interval ;

/*Calls function when user clicks on the button.*/
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

/*Timer function*/    
    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}