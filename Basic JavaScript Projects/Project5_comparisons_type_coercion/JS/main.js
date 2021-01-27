document.write(typeof "Word") //displays string


function my_function() { //to display NaN
    document.getElementById("test").innerHTML = 0/0;
}

function my_function2() { //to display true
    document.getElementById("test2").innerHTML = isNaN("words are not numbers");
}

function my_function3() { //to display false
    document.getElementById("test3").innerHTML = isNaN("1234");
}


function infinityFunction() { //displays "infinity"
    var num = (3E310);
    document.getElementById("infinity").innerHTML = num;
}

function negInfinityFunction() { //output "-infinity"
    var negNum = (-3E310);
    document.getElementById("negativeInfinity").innerHTML = negNum;
}

document.write(5 > 6); //output is false

document.write(6 < 7); //output is true

console.log(2 + 5);

document.write("10" + 5); //type coercion

//challenge display false in console using boolean logic and console.log method
console.log(6 >7);

// == checks  that the values on the left and right of the equal signs are equal

document.write(5 == 5); //true

document.write(4 == 5);//false

//triple equal signs check for equality in data AND data type
function tripleE1() { //returns true
    x = 10;
    y = 10;
    document.getElementById("triple1").innerHTML = (x === y);
}

function tripleE2() { //returns false values and types different
    x = 7;
    y = "5";
    document.getElementById("triple2").innerHTML = (x === y);
}

function tripleE3() { // returns false values same but types different
    x = 5;
    y = "5";
    document.getElementById("triple3").innerHTML = (x === y);
}

function tripleE4() { //returns false values different types same
    x = 8;
    y = 6;
    document.getElementById("triple4").innerHTML = (x === y);
}

function andOpFunction() { //and operator will return true if both statements are true
    document.getElementById("andOp").innerHTML = (5>3 && 3>2);
}

function andOpFunctionF() {
    document.getElementById("andOpF").innerHTML = (5>9 && 3>2);
}

function orOpFunction() { //or operator 1 or both true returns true, both false returns false
    document.getElementById("orOp").innerHTML = (5>4 || 7>9);
}

function orOpFunctionF() {
    document.getElementById("orOpF").innerHTML = (5>8 || 7>9);
}

function notFunction() { //not operator if it is false return true not false returns false
    document.getElementById("not").innerHTML = !(20 > 15);
}

function notFunction2() {
    document.getElementById("not2").innerHTML = !(20 < 10);
}