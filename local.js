function store(){

    const name = document.getElementById('username');
    const pw = document.getElementById('psw');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    const storedName = localStorage.getItem('name');
    const storedPw = localStorage.getItem('pw');

    const userName = document.getElementById('username');
    const userPw = document.getElementById('psw');
   

    if(userName.value == storedName && userPw.value == storedPw){
        //alert('You are logged in.');
        //window.location.href = "game.html";
        location.assign("game.html");
    }else{
        alert('Error on login');
    }

}