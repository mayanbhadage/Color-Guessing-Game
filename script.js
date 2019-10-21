
var numSquares = 6; //Default case

// Give random colors to our squares

//Colors for our square
var colors = generateRandomColors(numSquares);

//Selecting the H1

var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
// var to keep track of number of squares for each mode


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

//Selecting the reset button
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click",reset_func);
easyButton.addEventListener("click",easy_func);
hardButton.addEventListener("click",hard_func);



//Function to change the color of all square on selection the right Answer

function changeColor(color)
{

    // Also changing the h1 color

    h1.style.backgroundColor = color;
    h2.style.backgroundColor = color;
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
        resetButton.textContent = "Play Again?"
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

function reset_func()
{
   // alert("Clicked Reset Button");

    // Generate All New Colors 
    colors = generateRandomColors(numSquares);

    // Pick a new Random Color from array
    pickedColor = pickColor();


    // Change ColorDisplay
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    // Reset H1 background color

    h1.style.backgroundColor = "steelblue";
    h2.style.backgroundColor = "steelblue";
    this.textContent = "New Colors"
    messageDisplay.textContent = ""; 
}


function easy_func()
{

    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");

// Delete last 3 squares
for(var i = 3; i < squares.length; i ++)
{
    squares[i].style.display = "none";
    squares[i].removeEventListener("click",squareClicked);
}

numSquares = 3;
// Generate 3 New Colors 
colors = generateRandomColors(numSquares);

// Pick a new Random Color from array
pickedColor = pickColor();


// Change ColorDisplay
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

// Reset H1 background color

h1.style.backgroundColor = "steelblue";
h2.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";

}

function hard_func()
{
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");


    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].addEventListener("click", squareClicked);
    }

    numSquares = 6; 
    // Generate All New Colors 
    colors = generateRandomColors(numSquares);

    // Pick a new Random Color from array
    pickedColor = pickColor();


    // Change ColorDisplay
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    // Reset H1 background color

    h1.style.backgroundColor = "steelblue";
    h2.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    
}