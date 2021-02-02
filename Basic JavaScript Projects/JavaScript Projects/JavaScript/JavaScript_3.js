

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " spend most of their time in the " + character.innerHTML + " .");
}