$(document).ready(function() {

    var computerChoice = Math.floor(Math.random() * 120) + 19;
    var scoreOfUser = 0;
    var gemsValue;
    var crystalArr = [];
    var wins = 0;
    var losses = 0;

    console.log("Score to reach: " + computerChoice);
    $("#scores").text("Score to reach: "  + computerChoice);
    
    
    
    $(".crystal").each(function(index) {
        gemsValue = Math.floor(Math.random() * 12) + 1;
        crystalArr[index] = gemsValue;
        console.log("Gem " + index + ": " + crystalArr[index]);
    });
    
    
    $(".crystal").on("click", function() {
        
        scoreOfUser = scoreOfUser + crystalArr[$(this).index()]; 
        console.log("The score is: " + scoreOfUser);
        $("#myscore").text("My score: " + scoreOfUser);
        
        
        if (scoreOfUser < computerChoice) {
            console.log(scoreOfUser);
        }

        else if (scoreOfUser === computerChoice) {
            $("#youwon");
            wins++
            $("#winning").text(wins);
            alert("AYEEEEEEEEE LETS GET IT BITCH!")
        }
        
        else {
            $("#youlost");
            losses++
            $("#losing").text(losses);
            alert("TRY AGAIN STUPID ASS!");
        }
        
    });

});

