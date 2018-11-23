// -----------------------------------------------------------------
//                           Log in & Sign in
// -----------------------------------------------------------------

// +++++++++++++++++++ Log in & Signup form +++++++++++++++++++

$('#container').prepend(`<div id = "LogIn_signIn">
                        <h1> Welcome to hangman </h1>
                        <h4> Login if you dare </h4>

                        <form id="register-form"> 
                            <input id="regName" type="text" placeholder="Name" value=""/>
                            <input id="RegPW" type="password" placeholder="Password" value=""/>
                            <input id="rgstr_btn" type="submit" value="Sign Up" onClick="store()"/> 
                        </form>

                        <form id="login-form"> 
                            <input id="usern" type="text" placeholder="Enter Username" value=""/>
                            <input id="pword" type="password" placeholder="Enter Password" value=""/>
                            <input id="login_btn" type="submit" value="Login"/>
                            
                        </form>
                        </div>
                        <div id = "loginimage"><img class="theImg" src="./imgs/cover1.png" style="width:500px; height:250px;"/></div>`)

// +++++++++++++++++++ Log in & Signup form Logic +++++++++++++++++++

// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "test",
		password: "123"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

$(function () {
    $('#login_btn').click(function (e) {
        e.preventDefault();
        var username = document.getElementById('usern').value
	var password = document.getElementById('pword').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
            // stop the function if this is found to be true
            $("#container").fadeOut(1000);
            document.getElementById("welcome").innerHTML += username;
            return
            
        }
        
	}
	
    });
});

function store() {
    objPeople.push(username = regName.value, password = RegPW.value);
    document.getElementById("demo").innerHTML = fruits;
}


// +++++++++++++++++++ added css using jquery +++++++++++++++++++

$("#container").css({
    "backgroundColor": "white",
    "width": "100%",
    "height": "100%",
    "position":"absolute",
    "display": "inline-block",
    "text-align": "center"});

    $("#loginimage").css({
        "margin-left": "65%",
        "margin-top": "25%",});

    $("#LogIn_signIn").css({
    "left": "50%",
    "top": "30%",
    "position": "absolute",
    "-webkit-transform": "translate3d(-50%, -50%, 0)",
    "-moz-transform": "translate3d(-50%, -50%, 0)",
    "font-family": "'Roboto Slab', serif",
    "font-size": "30px",
    "transform": "translate3d(-50%, -50%, 0)"})
// // Name and Password from the register-form
// var nm = document.getElementById('name');
// var pw = document.getElementById('pw');

// // storing input from register-form
// function store() {
//     localStorage.setItem('name', nm.value);
//     localStorage.setItem('pw', pw.value);
// }
// $(function () {
//     $('#login_btn').click(function (e) {
//         e.preventDefault();
        
//        // stored data from the register-form
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');

//     // entered data from the login-form
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');

//         // check if stored data from register-form is equal to data from login form
        
//         if(userName.value == storedName && userPw.value == storedPw) {
//             alert('You are loged in.');
//             $("#container").fadeOut(1000);
//             console.log("here");
//         }else {
//             alert('ERROR.');
//         }
//         document.getElementById("welcome").innerHTML += storedName;
//     });
// });
// // -----------------------------------------------------------------
// //                           My JQuery divs
// // -----------------------------------------------------------------
$('#parent').append(`<div id = "words">
                        <div id = "welcome"> Welcome : </div>
                        <div id="won"><h5> Games you have Won:</h5></div>
                        </br>
                        <div id="lost"><h5> Games you have lost:</h5></div>  
                    </div>
                    <div id = "Category">Category: </div>
                    
                    <div id = "dash"></div>
                    <div id="kb"></div>
                    <div id = "pic"></div>
                    <input id="logout"type="submit" value="Logout" />`);

startGame();

var win = 0;
var loose = 0;

function startGame() {

    // -----------------------------------------------------------------
    //                           My Arrays
    // -----------------------------------------------------------------
    var KeyBoard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"];

    var Categories = ["Sport", "School Subject", "Country"];
    var Sports = ["soccer", "rugby", "tennis"];
    var School_subjects = ["Art", "History", "Geography"];
    var Countries = ["Germany", "Ireland", "Egypt"];
    // -----------------------------------------------------------------
    //                           My Variables
    // -----------------------------------------------------------------
    var randomCategorie;
    var randomword;
    //var text;

    // -----------------------------------------------------------------
    //                         Generates the keyboard
    // -----------------------------------------------------------------
    for (var i = 0; i < KeyBoard.length; i++) {
        document.getElementById("kb").innerHTML += "<button>" + KeyBoard[i] + "</button>";
        $("button").css({
            width: '55px',
            margin: '10px',
            height: '50px',
            color: 'black'
        });
    }
    $("button").mouseover(function () {
        $(this).css({
            "background-color": "rgba(255,69,0,0.5)",
            "font-size" : "20px"
        });

    });

    $("button").mouseout(function () {
        $(this).css({
            "background-color": "white",
            "font-size" : "10px"
        });

    });

    // -----------------------------------------------------------------
    //                      Generates a random word
    // -----------------------------------------------------------------

    randomCategorie = Categories[Math.floor(Math.random() * Categories.length)];
    document.getElementById("Category").innerHTML += randomCategorie;

    //randomword
    if (randomCategorie == "Sport") {
        randomword = Sports[Math.floor(Math.random() * Sports.length)];
    }
    else if (randomCategorie == "School Subject") {
        randomword = School_subjects[Math.floor(Math.random() * School_subjects.length)];
    }
    else if (randomCategorie == "Country") {
        randomword = Countries[Math.floor(Math.random() * Countries.length)];
    }

    document.getElementById("words").innerHTML += randomword;
    for (i = 0; i < randomword.length; i++) {
    }
    randomword = randomword.toUpperCase()
 
    // -----------------------------------------------------------------
    //                      Game Logic
    // -----------------------------------------------------------------
    var score = 0;
    
// I SPLIT RANDOMWORD AND APPEND EACH CAHARCTER TO CLASS 'LETTER'
    $.each(randomword.split(''), function (i, char) {
        $('#answer').append($('<span class="letter" letter="' + char + '"></span>'));
        //$('.letter').css("font-size", "40px", "font-weight", "900");
    });

// ON BUTTIN CLICK I GET THE LENGTH OF THE RANDOM WORD
    $('button').click(function () {
        var charCount = $('#answer [letter = ' + $(this).text() + ']').each(function () {
            $(this).text($(this).attr('letter'));
        }).length;

        console.log(KeyBoard[i]);

// IF BUTTON IS CLCIKED I REMOVE ITS FUNCTIONALITY (UNCLICKABLE NOW)
        $(this).removeClass('button').unbind('click').css({
            "background-color": "red"
        });
        if (charCount > 0) {

            var letterLeft = $(".letter:empty").length;
            
            console.log("Correct letter was chosen" + KeyBoard[i]);
            document.getElementById("dash").innerHTML += KeyBoard[i];
            console.log("letter Left " + letterLeft);
            if (letterLeft <= 0) {
                console.log("WINNER")
                win += 1;
                winnerScreen();
                // document.getElementById("welcome").innerHTML += win;
            }
        }
        else {
            score += 1;
            console.log("score " + score);
            var myImg = "<img src=" + "imgs/hangman-" + score + ".png" + ">";
            $('#pic').children("img").hide();
            $('#pic').append(myImg);
            if (score >= 10) {
                console.log("LOOSER");
                looserScreen();
                // $('#answer').text("Word was: " + randomWord);
                loose += 1;
            }
        }
    });
}
 function winnerScreen()
 {
    $('#WinnerScreen').prepend(`<h1>Congratulations! You win </h1>
    <h3>Do you wish to test your skills again?</h3>
    <input id="btn" type="button" value="button" />

    <div id = "winImg"><img class="theImg" src="https://cdn.pixabay.com/photo/2017/01/31/19/15/cartoon-2026571_960_720.png" style = width:400px height 400px/>
    </div>`)

    $("#WinnerScreen").css({
   "backgroundColor": "lightgreen",
   "width": "100%",
   "height": "100%",
   "position":"absolute",
   "display": "inline-block",
   "font-family": "'Permanent Marker', cursive",
   "text-align": "center"});

       $("#winImg").css({
       "margin-left": "70%",
       "margin-top": "15%"});
 }
 function looserScreen()
 {
     $('#LooserScreen').prepend(`<h1>Unlucky! </h1>
     <h3>Do you wish to test your skills again?</h3>
     <input id="btn" type="button" value="button" />

     <div id = "looseimg"><img class="theImg" src="http://img2.wikia.nocookie.net/__cb20130207191137/scribblenauts/images/thumb/0/01/Hangman.png/133px-Hangman.png
     "/>

     <img class="theImg" src="https://vignette.wikia.nocookie.net/kancolle/images/2/28/R.i.p..png/revision/latest?cb=20160820142228
     "/>
     </div>`)

     $("#LooserScreen").css({
    "backgroundColor": "crimson",
    "width": "100%",
    "height": "100%",
    "position":"absolute",
    "display": "inline-block",
    "font-family": "'Permanent Marker', cursive",
    "text-align": "center"});

        $("#looseimg").css({
        "margin-left": "65%",
        "margin-top": "10%"});

    // https://cdn.pixabay.com/photo/2017/01/31/19/15/cartoon-2026571_960_720.png

    // $('#btn').click(function() {
    //     startGame();
    // });
 }

//  TO DO
// 1) ON BUTTON CLICK, REPLAY GAME AT END Screen
// 2) TRACK WINS/LOSSES
// 3) CREATE MULTIPLE USER SIGN IN 
// 4) DISPLAY CORRECT LETTERS AT DASHES