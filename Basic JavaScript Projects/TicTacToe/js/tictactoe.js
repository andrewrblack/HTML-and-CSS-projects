let activePlayer = 'X'; //variable keeps track of whose turn it is
let selectedSquares = []; // this array stores an array of moves. determines win conditions

//this function is for placing an x or o in a square
function placeXOrO(squareNumber) {
//this condition ensures a square hasnt been selected already.
//the .some() method is used to check each element of selectedSquare array to see if it contains the square number clicked on
if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //this variable retrieves the html element id that was clicked.
    let select = document.getElementById(squareNumber);
    //this condition checks whos turn it is
    if (activePlayer === 'X') {
        //if activePlayer is equal to 'X', the x.png is placed in html
        select.style.backgroundImage = 'url("./images/x.png")';
        //Active Player may only be 'x' or 'o' if not x must be o
    } else {
        select.style.backgroundImage = 'url("./images/o.png")';
    }
    //squarenumber and active player are concatenated together and added to array
    selectedSquares.push(squareNumber + activePlayer);
    //this calls a function to check for any win conditions.
    checkWinConditions();
    //this condition is for changing the active player
    if (activePlayer === 'X') {
        //if active player is x change it to o
        activePlayer = 'O';
        //if active player is anything other than x
    } else {
        //change the active player to x
        activePlayer = 'X';
    }






//this function makes the sound
audio('./media/place.mp3');
//this condition checks to see if it is computers turn
if(activePlayer === 'O') {
    //this function disables clicking for computer choice
    disableClick();
    //this function waits 1 second before placing the image and enabling click
    setTimeout(function () {computersTurn(); }, 1000);
    }
//returning true is needed for out coputersTurn() function to work
    return true;
}

//this function results in a random square being selected
function computersTurn() {
    //this boolean is needed for our while loop
    let success = false;
    //this variable stores a random number 0-8
    let pickASquare;
    //this condition allows our while loop ot keep trying if a square is selected already
    while(!success) {
        pickASquare = String(Math.floor(Math.random() *9)); 
        //if the random number evaluates returns true, the square hasnt been selected yet
        if (placeXOrO(pickASquare)) {
            //this line calls the function
            placeXOrO(pickASquare);
            //this changes our boolean and ends the loop
            success = true;
            };
        }
    }
}

function checkWinConditions() {
    if (arrayInclues('0X', '1X', '2X')) { drawWinLine(50,100,558,100); }
    else if (arrayInclues('3X', '4X' , '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayInclues('6X', '7X' , '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayInclues('0X', '3X' , '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayInclues('1X', '4X' , '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayInclues('2X', '5X' , '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayInclues('6X', '4X' , '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayInclues('0X', '4X' , '8X')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayInclues('0O', '1O' , '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayInclues('3O', '4O' , '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayInclues('6O', '7O' , '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayInclues('0O', '3O' , '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayInclues('1O', '4O' , '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayInclues('2O', '5O' , '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayInclues('6O', '4O' , '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayInclues('0O', '4O' , '8O')) { drawWinLine(100, 100, 520, 520); }
    // this condition checks for tie. if none of the above conditions register and 9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays tie sound
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the reset gae is called
        setTimeout(function () { resetGame(); }, 10000);
    }

    //this function checks if array includes 3 strings it used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //the next 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if 3 variables we pass are included in array true is returned and or else if condition executes the drawwinline function
        if (a === true && b === true && c === true) { return true;}
    }

}

