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
                            <input id="rgstr_btn" type="submit" value="Sign Up"/> 
                        </form>

                        <form id="login-form"> 
                            <input id="usern" type="text" placeholder="Enter Username" value=""/>
                            <input id="pword" type="password" placeholder="Enter Password" value=""/>
                            <input id="login_btn" type="submit" value="Login"/>
                            
                        </form>
                        </div>
                        <div id = "loginimage"><img class="theImg" src="./imgs/cover1.png" style="width:500px; height:250px;"/></div>`)

// +++++++++++++++++++ Log in & Signup form Logic +++++++++++++++++++
var username = username;
var password;
var win = 0;
var loose = 0;

// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        username: "test",
        password: "123",
        win: "",
        Loose: ""
    },
    { // Object @ 1 index
        username: "a",
        password: "1",
        win: "",
        Loose: ""
    },
    { // Object @ 2 index
        username: "b",
        password: "1",
        win: "",
        Loose: ""
    }

]
alert("Name: " + JSON.stringify(objPeople.username));

$(function () {
    $('#login_btn').click(function (e) {
        e.preventDefault();
        username = document.getElementById('usern').value
        password = document.getElementById('pword').value

        for (var i = 0; i < objPeople.length; i++) {
            // check is user input matches username and password of a current index of the objPeople array
            if (username == objPeople[i].username && password == objPeople[i].password) {
                alert(username + " is logged in!!!")
                $("#container").fadeOut(1500);
                //document.getElementById("welcome").innerHTML += username;
                // stop the function if this is found to be true
                return
            }
        }
        alert("Wrong Password and Username combination. Please try again");

        // if(username == usrnme && password ==pass){
        //     alert("Welcome back mr" + username);

        // }
    });
});

$(function () {
    $('#rgstr_btn').click(function (e) {
        e.preventDefault();

        var usrnme = document.getElementById("regName").value;
        var pass = document.getElementById("RegPW").value;
        objPeople.push({
            username: usrnme,
            password: pass,
            win: win,
            Loose: loose
        });
    });
});

// +++++++++++++++++++ added css using jquery +++++++++++++++++++

$("#container").css({
    "backgroundColor": "white",
    "width": "100%",
    "height": "100%",
    "position": "absolute",
    "display": "inline-block",
    "text-align": "center",
});

$("#loginimage").css({
    "margin-left": "65%",
    "margin-top": "25%",
});

$("#LogIn_signIn").css({
    "left": "50%",
    "top": "30%",
    "position": "absolute",
    "-webkit-transform": "translate3d(-50%, -50%, 0)",
    "-moz-transform": "translate3d(-50%, -50%, 0)",
    "font-family": "'Roboto Slab', serif",
    "font-size": "30px",
    "transform": "translate3d(-50%, -50%, 0)"
})

// // -----------------------------------------------------------------
// //                           My JQuery divs
// // -----------------------------------------------------------------


startGame();

function startGame() {



    $('#parent').append(`<div id = "words">
                        <div id = "welcome"> Welcome : `+ username + ` </div>
                        <div id="won"> Games You have won: `+ win + `</div>
                        <div id="lost"> Games You have lost: `+ loose + `</div>
                        </br>  
                    </div>
                    <div id = "Category">Category: </div>
                    
                    <div id = "dash"></div>
                    <div id="kb"></div>
                    <div id = "pic"></div>
                    <input id="logout"type="submit" value="Logout" onclick="logout()"/>`);

    // -----------------------------------------------------------------
    //                           My Arrays
    // -----------------------------------------------------------------
    var KeyBoard = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"];

    var Categories = ["Sport", "School Subject", "Country"];
    var Sports = ["Soccer", "Rugby", "Tennis", "Dodgeball", "Athletics", "Swimming", "Running", "Baseball", "Pingpong", "Hurling"];
    var School_subjects = ["Art", "History", "Geography", "English", "Maths", "Biology", "Chemistry", "Physics", "Woodwork"];
    var Countries = ["Germany", "Ireland", "Egypt","Uganda", "Jamaica", "America", "Iceland", "Greenland", "England", "France"];
    // -----------------------------------------------------------------
    //                           My Variables
    // -----------------------------------------------------------------
    var randomCategorie;
    var randomword;

    // -----------------------------------------------------------------
    //                         Generates the keyboard
    // -----------------------------------------------------------------
    for (var i = 0; i < KeyBoard.length; i++) {
        document.getElementById("kb").innerHTML += "<button class= rbutton>" + KeyBoard[i] + "</button>";
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
            "font-size": "20px"
        });

    });

    $("button").mouseout(function () {
        $(this).css({
            "background-color": "white",
            "font-size": "10px"
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
        $('#dash').append($('<span class="letter" letter="' + char + '"></span>'));
    });

    // ON BUTTIN CLICK I GET THE LENGTH OF THE RANDOM WORD
    $('button').click(function () {
        var charCount = $('#dash [letter = ' + $(this).text() + ']').each(function () {
            $(this).text($(this).attr('letter'));
        }).length;

        if (charCount > 0) {
            $(this).attr("disabled", "disabled");
            var letterLeft = $(".letter:empty").length;
            if (letterLeft <= 0) {
                document.getElementById("won").innerHTML = win++;
                winnerScreen();
            }
        }
        else {
            $(this).removeClass('button').unbind('click').css({
                "opacity": "0.1"
            });
            $(this).attr("disabled", "disabled");
            score += 1;
            var myImg = "<img src=" + "imgs/hangman-" + score + ".png" + ">";
            $('#pic').children("img").hide();
            $('#pic').append(myImg);
            if (score >= 10) {
                document.getElementById("lost").innerHTML = loose++;
                looserScreen();
            }
        }
    });
}
function winnerScreen() {
    $('#WinnerScreen').prepend(`<h1>Congratulations! You win </h1>
    <h3>Do you wish to test your skills again?</h3>
    <input id="btn" type="button" value="Go" onclick= "reload()" />

    <div id = "winImg"><img class="theImg" src="https://cdn.pixabay.com/photo/2017/01/31/19/15/cartoon-2026571_960_720.png" style = width:400px height 400px/>
    </div>`)

    $("#WinnerScreen").css({
        "backgroundColor": "lightgreen",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "display": "inline-block",
        "font-family": "'Permanent Marker', cursive",
        "text-align": "center"
    });

    $("#winImg").css({
        "margin-left": "70%",
        "margin-top": "15%"
    });
}
function looserScreen() {
    $('#LooserScreen').prepend(`<h1>Unlucky! </h1>
     <h3>Do you wish to test your skills again?</h3>
     <input id="btn" type="button" value="Go" onclick= "reload()" />

     <div id = "looseimg"><img class="theImg" src="http://img2.wikia.nocookie.net/__cb20130207191137/scribblenauts/images/thumb/0/01/Hangman.png/133px-Hangman.png
     "/>

     <img class="theImg" src="https://vignette.wikia.nocookie.net/kancolle/images/2/28/R.i.p..png/revision/latest?cb=20160820142228
     "/>
     </div>`)

    $("#LooserScreen").css({
        "backgroundColor": "crimson",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "display": "inline-block",
        "font-family": "'Permanent Marker', cursive",
        "text-align": "center"
    });

    $("#looseimg").css({
        "margin-left": "65%",
        "margin-top": "10%"
    });
}

function reload() {
    emptyContent();
    startGame();
}
function emptyContent() {
    $('#parent').empty();
    $('#WinnerScreen').fadeOut();
    $('#WinnerScreen').empty();
    $('#LooserScreen').fadeOut();
    $('#LooserScreen').empty();
}

function logout() {
    $('#parent').empty();
    $('#container').show();
    startGame();
}