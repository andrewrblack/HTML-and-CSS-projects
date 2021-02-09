

//json string
var cat = {animal: "cat", name:"whiskers", hair:"long"};
var myJSON = JSON.stringify(cat);
document.getElementById("cat").innerHTML = myJSON;

//json parse 

var catParse = '{"animal": "cat", "name":"whiskers", "hair":"long"}';
var JSONstring = JSON.parse(catParse);
document.getElementById("catparse").innerHTML = JSONstring.name + " is a " + JSONstring.animal;


//localstorage() method

localStorage.setItem("name", "whiskers");//sets data as keyvalue pair to be saved locally in browser
document.getElementById("storage").innerHTML = localStorage.getItem("name");

