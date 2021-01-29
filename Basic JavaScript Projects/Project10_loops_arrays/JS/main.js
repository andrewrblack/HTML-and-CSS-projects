//Loop function
function call_loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

//.length property
function lengthFunction() {
    var sentence = "Good morning and nice to see you!";
    var characters = sentence.length;
    document.getElementById("length").innerHTML = characters;
}

//list of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array function
function arrayFunction() {
    var goat_actions = [];
    goat_actions[0] = "running";
    goat_actions[1] = "jumping";
    goat_actions[2] = "laughing";
    goat_actions[3] = "playing";
    document.getElementById("goat").innerHTML = "Today the goat is " + goat_actions[3] + "!";
}

//constants
function constantFunction () {
    const vehicle = {type:"car", color:"blue", location:"land", price:"14,000"};
    vehicle.type = "plane";
    vehicle.location = "air";
    vehicle.price = "100,000 dollars";
    document.getElementById("constant").innerHTML = " what kind of vehicle: " + vehicle.type +"." + " where it is operated: " + vehicle.location +"." + " this vehicle costs: " + vehicle.price +".";
}

//let keyword
function letFunction() {
   var X = "hello";
    {
        let X = "hi there"
        document.getElementById("let").innerHTML = X;// this returns "hi there"
    }
    //document.getElementById("let").innerHTML = X; ===This will return "hello"
}

//return function


function returnFunction() {
    var c = return_function();
    function return_function() {
        var a = 5;
        var b = 6;
        return a * b;
    }
    document.getElementById("return").innerHTML = c;
}

//create an object
function objectFunction() {
let synthesizer = {
    brand: "Roland ",
    model: "Juno-106 ",
    year: "1984 ",
    description : function() {
        return "This synthesizer is a " + this.brand + this.model + "from " + this.year + ".";
    }
};
document.getElementById("object").innerHTML = synthesizer.description();
}

//break statement
function breakFunction() {
    var text = ""
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i; 
        i++;
        if (i === 7) {
            break;
        }
    }
    document.getElementById("break").innerHTML = text;
}

//continue statement
function continueFunction() {
    var text = "";
    var y;
    for (y = 0; y < 5; y++){
        if (y===3)  {
            continue;
        }
        text += "the number is " + y + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}