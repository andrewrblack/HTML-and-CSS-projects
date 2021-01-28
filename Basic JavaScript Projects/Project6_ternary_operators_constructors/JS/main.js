function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function votingAgeFunction() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("message").innerHTML = can_vote + " to vote"
}

function Vehicle(Make, Model, Year, Color) { //object constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep" , "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//utilize the new keyword
function school(Grade, Size, Subject) {
    this.Grade = Grade;
    this.Size = Size;
    this.Subject = Subject;
}

var class1 = new school("11", "14", "Biology");
function schoolFunction() {
    document.getElementById("New_and_This").innerHTML = class1.Size;
}

//write an object constructor function
function apple(size, color, taste) {
    this.size = size;
    this.color = color;
    this.taste = taste;
}
var Honeycrisp = new apple("medium", "red and yello", "tart and sweet");
var GrannySmith = new apple("small", "green", "sour");
function appleFunction() {
    document.getElementById("appleType").innerHTML = GrannySmith.taste;
}

//Nested counting function

function countFunction() {
    document.getElementById("counter").innerHTML = count();
    function count() {
        var start = 1;
        function addOne() {start ++;}
        addOne();
        return start;
    }
}
