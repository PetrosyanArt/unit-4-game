// global variables
//---------------------------------------------------

// crystals
var crystal = {
    blue: 
    {
        name: "Blue",
        value: 0
    },
    red: 
    {
        name: "Red",
        value: 0
    },
    green: 
    {
        name: "Green",
        value: 0
    },

    purple: 
    {
        name: "Purple",
        value: 0
    }
};

//scores
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;



//functions
//---------------------------------------------------

//Getting random numbers for crystals
var getRandom = function(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

// Starts and restarts the game
var startGame = function(){

    // reset the score
    currentScore = 0;
    
    // set a new target score between 19 and 120
    targetScore = getRandom(19, 120)
    
    // set different values for crystals between 1 and 12

    crystal.blue.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);
    crystal.purple.value = getRandom(1,12);

    // testing
    console.log("________________________");
    console.log("target score" + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Read: " + crystal.red.value + " | Green " + crystal.green.value + " | Purple " + crystal.purple.value);
    console.log("________________________");

    // change DOM to reflect changes

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

}

// Respond to clicks on the crystals

var addValues = function(crystal){

    // change current score
    currentScore = currentScore + crystal.value;

    // change html to reflect current score
    $("#yourScore").html(currentScore);
    
    // call the checkWin function
    checkWin();

    // testing
    console.log("Your Score: " + currentScore);
}

// check if user won or lost

var checkWin = function(){
    
    // check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("You lost!");
        console.log("You lost!");
        
        // add to loss counter
        lossCount++;
        
        // change lossCount HTML
        $("#lossCount").html(lossCount);

        // restart the game
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("You won!");
        console.log("You won!");

        // add to win counter
        winCount++;

        // change winCount HTML
        $("#winCount").html(winCount);

        // restart the game
        startGame();
    }
}

// main process
//---------------------------------------------------

// Starts the game
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});

$("#red").click(function(){
    addValues(crystal.red);
});

$("#green").click(function(){
    addValues(crystal.green);
});

$("#purple").click(function(){
    addValues(crystal.purple);
})