$(document).ready(function() {

    var computerChoice = Math.floor(Math.random() * 120) + 19;
    var scoreOfUser = 0;
    var gemsValue;
    var crystalArr = [];
    var wins = 0;
    console.log("Goal to reach: " + computerChoice);


    $(".crystal").each(function(index) {
        gemsValue = Math.floor(Math.random() * 12) + 1;
        crystalArr[index] = gemsValue;
        console.log("Gem " + index + ": " + crystalArr[index]);
      });


    $(".crystal").on("click", function() {

        scoreOfUser = scoreOfUser + crystalArr[$(this).index()]; 
        console.log("The score is: " + scoreOfUser);
        
        
        if (scoreOfUser === computerChoice) {
            $("#youwon").text("Good shit! You made a perfect score!");
            wins++
            $("#winning").text(wins);
        }
        
        else {
            alert("Try again, you bloody fool!");
        }
        
    });

});

