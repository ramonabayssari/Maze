let isStart = false;  
let score =0;
const username=localStorage.getItem("curr_user");
	const user=JSON.parse(localStorage.getItem(username));
	score=user["score"];
 window.onload = function () {
        const start = document.getElementById("start");
        const end = document.getElementById("end");
        const boundary = document.getElementsByClassName("boundary"); //array of boundaries
        const game =  document.getElementById("game");
        const stat = document.getElementById("status");
        const scr= document.getElementById("score");
        
    

        start.addEventListener("click", function(){
                score=0;
                scr.textContent="Your score is now: "+score;
        })

        //press S to start 
        start.addEventListener("mouseover", function () {
            stat.textContent = "_";
            isStart = true;
            for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#eeeeee"; }
        })//each time we repress S the boundaries go back to their default color 
    



        //whenever the mouse touches (mouseover) any boundary, their color turn red and the player looses the game 
        for (var i = 0; i < boundary.length; i++)
            boundary[i].addEventListener("mouseover", function () {
                    if (isStart) {
                        stat.textContent = "You hit the boundary, lost the game!";
                        score=score-10;
                        for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#FF0000"; }                       
                    }
                    isStart = false;//to end and restart the game
                    scr.textContent="Your score is now: "+score;
                });


            
        
        //to know when the mouse gets out (mouseleave so when the mouse leave the child elements it wont be 
        //triggered) of the game div to cheat 
        game.addEventListener("mouseleave", function () {
            if(isStart==true){
            score=score-10;
            stat.textContent="Nah bruh you can not cheat, LOSER!";
            for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "#FF0000"; }  
        }
            isStart=false;    
            scr.textContent="Your score is now: "+score;               
        });




        //arrives to destination and ends the game
        end.addEventListener("mouseover", function () {
            if(isStart==true){
                stat.textContent = "Congratulation! You win the game!"; 
                score=score+5;
                for (let i = 0; i < boundary.length; i++) { boundary[i].style.backgroundColor = "green"; }}
            scr.textContent="Your score is now: "+score;
            isStart = false;//to end and restart the game
            
        });
    
    
}

function store(){

    const name = document.getElementById('username');
    const psw = document.getElementById('psw');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else{
        const user = { name: username, pw: psw, score: 0 }
        localStorage.setItem(username, JSON.stringify(user));
        location.assign("index.html");
        alert('Your account has been created');
    }
}

//checking
function check(){
    
    const userName = document.getElementById('username');
    const userPw = document.getElementById('psw');
   
    const username = userName.value;
    if (username == "") {
        flag = true;
    }
    const password = userPw.value;
    if (password == "") {
        flag = true;
    }
    if (flag == false) {
        const user = JSON.parse(localStorage.getItem(username));


        if (user["pw"] == password) {
            localStorage.setItem("curr_user", username);
            location.assign("game.html");
        }


}

}
