<script src="game.js" type="text/javascript"></script>
import{score} from "./game.js"


function store(){ //stores items in the localStorage
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    window.localStorage.setItem(username,JSON.stringify({username, password, score}));  
    //converting object to string
}