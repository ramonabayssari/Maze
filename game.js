let isStart = false;
let isInGame = false;    

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
            isInGame= true;
            for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#eeeeee"; }
        })//each time we repress S the boundaries go back to their default color 
    

        //whenever the mouse touches (mouseover) any boundary, their color turn red and the player looses the game 
        for (var i = 0; i < boundary.length; i++)
            boundary[i].addEventListener("mouseover", function () {
                    if (isStart) {
                        for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#FF0000"; }
                        stat.textContent = "You hit the boundary, lost the game!";
                        isStart = false;
                    }
                });

    
        //arrives to destination and ends the game
        end.addEventListener("mouseover", function () {
            if (isStart) {
                stat.textContent = "Congratulation! You win the game!"; 
            }
            isStart = false;//to end and restart the game
        });
    
    
}
    
    


