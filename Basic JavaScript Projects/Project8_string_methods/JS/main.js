//concat() function
function concatFunction() {
    var grab = "Grab an orange, ";
    var peel = "peel the orange, ";
    var toss = "throw the peel away, ";
    var eat = "eat the orange. ";
    var howToEatOrange = grab.concat(peel, toss, eat);
    document.getElementById("concatprint").innerHTML = howToEatOrange;
}

//slice() function
function sliceFunction() {
    var sentence = "What is the funniest word in this sentence about a clown?"
    var word = sentence.slice(51,56);
    document.getElementById("slice").innerHTML = word;
}

//str.toUpperCase() use
function uppercaseFunction() {
    var str = "now i have become uppercase!";
    var upp = str.toUpperCase();
    document.getElementById("upper").innerHTML = upp;

}

//string search()
function stringsearchFunction() {
    var str = "would you like to know the position of goat in this string?";
    var result = str.search("goat");
    document.getElementById("searchprint").innerHTML = result;
}

//number method
function tostringFunction() {
    var x =375;
    document.getElementById("numprint").innerHTML = x.toString();
}

//toprecision() method
function toprecisionFunction() {
    var y = 12084987128471392874119874.132948713948713984;
    document.getElementById("precprint").innerHTML = y.toPrecision(7);

}

//toFixed() method
function tofixedFunction() {
    var num = 8.19287392873;
    var fixed = num.toFixed(3);
    document.getElementById("fixedprint").innerHTML = fixed;
}

//valueOf() method
function valueofFunction() {
    var str = "I could go for a cup of coffee";
    var val = str.valueOf();
    document.getElementById("valueofprint").innerHTML = val;
}