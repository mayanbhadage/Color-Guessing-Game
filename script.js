// Give random colors to our squares


//Colors for our square
var colors = generateRandomColors(6);

//Selecting the H1

var h1 = document.querySelector("h1");

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

    // Also changing the h1 color

    h1.style.backgroundColor = color;
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

function generateRandomColors(num)
{
    //Create an Empty Array
    var result = []
    //Add num random colors to the array
    for(var i = 0; i < num ; i++)
    {
       color = randomColor();
        // push into array
        result.push(color);
    }
    // Return the array
    return result;
}

function randomColor()
{
    // return a randomly generated color
    //Generate three Random INT for R G B

    var R = Math.floor(Math.random() * 256) // Floor that why 256 
    var G = Math.floor(Math.random() * 256) // Floor that why 256 
    var B = Math.floor(Math.random() * 256) // Floor that why 256 

    var result = "rgb("+ R +", " +G+", "+B+")";
 
    return result;
}