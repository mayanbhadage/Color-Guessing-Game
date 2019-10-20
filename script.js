// Give random colors to our squares


//Colors for our square
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0 , 255)"
];

//Selecting squares
var squares = document.querySelectorAll(".square");
//Goal Color
var pickedColor = pickColor();
//Selecting the span colorDisplay
var colorDisplay = document.querySelector("#colorDisplay");
//Selecting the message
var messageDisplay = document.querySelector("#message");
// Setting the display on html
colorDisplay.textContent = pickedColor;


//Function to change the color of all square on selection the right Answer

function changeColor(color)
{
    // loop through all the square
    for (let i = 0; i < squares.length; i++) {
        // change the color of square to the given color
        squares[i].style.backgroundColor = color;
        }
    
}


// Function when clicked on the squares

function squareClicked()
{
    //Grab color of the clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare it to the picked color
    if(clickedColor === pickedColor)
    {
        messageDisplay.textContent = "Correct";
        changeColor(clickedColor);
    }
    else{
        // Make that square disapper

        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!!"
    }
    


}



// Looping the "squares and assigning them colors"

for (let i = 0; i < squares.length; i++) {
    //Adding initial colors to the square
    squares[i].style.backgroundColor = colors[i]; // background color works in all browser 

    // Adding event listner to the squares

    squares[i].addEventListener("click", squareClicked)
}
function pickColor()
{
    var index = Math.floor(Math.random() * colors.length); // Pick random num from 0 to length of array
    return colors[index]; 
}