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
                     stat.textContent = "You hit the boundary, lost the game!";
                    if (isStart) {
                        for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#FF0000"; }                       
                    }
                    isStart = false;//to end and restart the game
                });


            
        
        //to know when the mouse gets out (mouseleave so when the mouse leave the child elements it wont be 
        //triggered) of the game div to cheat 
        game.addEventListener("mouseleave", function () {
            isInGame = false;
            stat.textContent="Nah bruh you can not cheat, LOSER!";
            for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#FF0000"; }  
            isStart=false;                     
        });




        //arrives to destination and ends the game
        end.addEventListener("mouseover", function () {
            if(isStart==true){
                stat.textContent = "Congratulation! You win the game!"; 
                for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "green"; }}
            isStart = false;//to end and restart the game
        });
    
    
}
    
    


