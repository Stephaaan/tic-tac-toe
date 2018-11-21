var firstPlayer = true;
var isRunning = true;
var roundCounter = 1;
$(document).ready(() => {
    console.log("skuska");
    gamePlan = [[0,0,0],[0,0,0],[0,0,0]];
    drawPlan();
});
//x == 1
//o == 2
var handle = function(id){
    if(gamePlan[parseInt(id/3)][id%3] == 0 && isRunning){
        if(firstPlayer){
            gamePlan[parseInt(id/3)][id%3] = 1;
        }else{
            gamePlan[parseInt(id/3)][id%3] = 2;
        }
        firstPlayer = !firstPlayer;
        if(roundCounter > 4){
            var winner = checkForWinner();
            console.log(winner);
            switch(winner){
                case 1:
                    document.getElementById("info").innerHTML = "Player 1 win";
                    isRunning = false;
                    break;
                case 2:
                    document.getElementById("info").innerHTML = "Player 2 win";
                    isRunning = false;
                    break;
            }
        }
        roundCounter++;
        drawPlan();
    }
}
var drawPlan = function(){
    if(isRunning){
        if(firstPlayer)
            document.getElementById("info").innerHTML = "Player 1 turn";
        else {
            document.getElementById("info").innerHTML = "Player 2 turn";
        }
    }
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            if(gamePlan[i][j] == 0){
                document.getElementById(""+i+j+"x").style.display="none";
                document.getElementById(""+i+j+"o").style.display="none";
            }else if(gamePlan[i][j] == 1){
                document.getElementById(""+i+j+"x").style.display="block";
                document.getElementById(""+i+j+"o").style.display="none";
            }else{
                document.getElementById(""+i+j+"x").style.display="none";
                document.getElementById(""+i+j+"o").style.display="block";
            }
        }
    }
}
var checkForWinner = function(){
    var winner = 0;
//IFLAND
    //collumn
    if((gamePlan[0][0] === gamePlan[0][1]) && (gamePlan[0][1] === gamePlan[0][2])){
        winner = gamePlan[0][0];
    }
    if((gamePlan[1][0] === gamePlan[1][1]) && (gamePlan[1][1] === gamePlan[1][2])){
        winner = gamePlan[1][0];
    }
    if((gamePlan[2][0] === gamePlan[2][1]) && (gamePlan[2][1] === gamePlan[2][2])){
        winner = gamePlan[2][0];
    }
    //row
    if((gamePlan[0][0] === gamePlan[1][0]) && (gamePlan[2][0] === gamePlan[2][0])){
        winner = gamePlan[2][0];
    }
    if((gamePlan[0][1] === gamePlan[1][1]) && (gamePlan[1][1] === gamePlan[2][1])){
        winner = gamePlan[2][1];
    }
    if((gamePlan[0][2] === gamePlan[1][2]) && (gamePlan[1][2] === gamePlan[2][2])){
        winner = gamePlan[2][1];
    }
    if((gamePlan[0][0] === gamePlan[1][1]) && (gamePlan[1][1] === gamePlan[2][2])){
        winner = gamePlan[2][2];
    }
    if((gamePlan[2][0] === gamePlan[1][1]) && (gamePlan[1][1] === gamePlan[0][2])){
        winner = gamePlan[2][0];
    }
    return winner;

}
