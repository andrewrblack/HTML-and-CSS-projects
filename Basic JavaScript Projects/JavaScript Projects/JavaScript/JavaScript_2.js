//validate form
function validateFunction() {
    var x = document.forms["submitForm"]["fname"].value;
        if(x=="") {
            alert("First name must be filled out");
            return false;
        }
    var y = document.forms["submitForm"]["lname"].value;
        if(y=="") {
            alert("Last name must be filled out");
            return false;
        }
}