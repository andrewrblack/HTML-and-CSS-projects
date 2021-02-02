function animalFunction() {
    var animal_output;
    var animals = document.getElementById("animalChoice").value;
    var animal_string = " is definitely the coolest animal!";
    switch(animals) {
        case "Lion":
            animal_output = "Lion" + animal_string;
        break;
        case "Tiger":
            animal_output = "Tiger" + animal_string;
        break;
        case "Bear":
            animal_output = "Bear" + animal_string;
        break;
        case "Shrew":
            animal_output = "Shrew" + animal_string;
        break;
    }
document.getElementById("animaloutput").innerHTML = "The " + animal_output;
}

//grabs elements by class instead of id
function changeFunction() {
    var A = document.getElementsByClassName("change");
    A[0].innerHTML = "h3's are different now";
}

//drawing in canvas element
var c = document.getElementById("canvasBox");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//linear gradient
var g = document.getElementById("gradient");
var gtx = g.getContext("2d");
var grd = gtx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

gtx.fillStyle = grd;
gtx.fillRect(20,20,150,100);