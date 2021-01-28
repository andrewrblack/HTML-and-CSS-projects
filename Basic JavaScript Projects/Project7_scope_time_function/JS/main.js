
//global variable function
var x = 3
var y = 4

function globalVfunction() {
    document.getElementById("global").innerHTML = (x + y);
}

//local variable function
function localVfunction() {
    var x = 10
    var y = 7
    document.getElementById("local").innerHTML = (x*y);
}

//date().getHours() method
function getDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("hours").innerHTML = "Good Morning!";
    }
}

//my if statement
function timeofday() {
    if  (new Date().getHours() < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good Afternoon";
    }
} 

//if/else statement
function drinkFunction() {
    age = document.getElementById("age").value;
    if (age >= 21) {
        drinking = "Have a drink!";
    }
    else{
        drinking = "You cannot have a drink...";
    }
    document.getElementById("canyoudrink").innerHTML = drinking;
}

//Else If Statement

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}