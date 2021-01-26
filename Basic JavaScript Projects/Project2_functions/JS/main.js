function changeColor() { //this function changes the colors of variable text and variable button

var text = document.getElementById ("color-change").style.color = "blue";

var button = document.getElementById ("button").style.backgroundColor = "red";

}

function cFunction() {  //this function concatenates the variable sentence with the additional string 
    var sentence = "I have transformed";
    sentence += " into a brand new sentence.";
    document.getElementById("concatenate").innerHTML = sentence;
}

function mixColors() {

var colorButton = document.getElementById("mix").style.backgroundColor = "purple";

}