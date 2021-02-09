
//alerts if name is not filled out
function validateForm() {
    var x = document.forms["form"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


//gets the pop up form to work
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }