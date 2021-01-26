function mathFunction() { //defines all variables and adds them togetet
    var A = "2348";
    var B = "3781";
    var C = parseFloat(A) + parseFloat(B)
    document.getElementById("Math").innerHTML = C;
}

function subtractFunction() {   // utilizes subtract function
    var subtraction = 974 - 437;
    document.getElementById("Subtract").innerHTML = "974 - 437 = " + subtraction;
}

function multiplyFunction() {   //multiplication function
    var multiply = 12 * 13;
    document.getElementById("multiply").innerHTML = "13 x 12 = " + multiply;
}

function divideFunction() { //uses the divide function 
    var divide = 500 / 2;
    document.getElementById("divide").innerHTML = "500 / 2 =" + divide;
}

function bigFunction() { //utilizes all mathmatical operators
    var big = (5 + 5) * 4 / 2 - 3;
    document.getElementById("bigone").innerHTML = "5 + 5 x 4 / 2 - 3 = " + big;
}

function modulusFunction() { //modulus gives the remainder  
    var mod = 7 % 2;
    document.getElementById("modulus").innerHTML = "when you divide 7 by 2 you have a remainer of: " + mod;
}

function negationFunction() { //negation function displays the negative of the variables
    var y = 9
    document.getElementById("negation").innerHTML = -y;
}

function incrementFunction() { //increment increases the variable by 1
    var x = 6;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function decrementFunction() { //decrement decreases the variable by 1
    var y = 6;
    y--;
    document.getElementById("decrement").innerHTML = y;

}

window.alert(Math.random() * 10000); // this is a window that displays a random number between zero and 10,000

function methodFunction() { // this rounds to the nearest integar
    
    document.getElementById("mathmethod").innerHTML = Math.round(7.8);
}