let isStart = false;
    
 window.onload = function () {
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        const boundary = document.getElementsByClassName("boundary"); //array of boundaries
        const game =  document.getElementById("game");
        const stat = document.getElementById("status");
    
        //press S to start 
        start.addEventListener("mouseover", function () {
            stat.textContent = "Begin by moving your mouse over the S";
            isStart = true;
            isInMap = true;
            for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#eeeeee"; }
    
        })
    
    
        //arrives to destination and ends the game
        end.addEventListener("mouseover", function () {
            if (isStart) {
                stat.textContent = "Congratulation! You win the game!"; 
            }
            isStart = false;//to end and restart the game
        });
    
    
}
    
    


