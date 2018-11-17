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
                    <div id = "pic"></div>`);

startGame();
// -----------------------------------------------------------------
//                           Log in & Sign in
// -----------------------------------------------------------------

// +++++++++++++++++++ Log in & Signup form +++++++++++++++++++

// $('#container').prepend(`<div id = "LogIn_signIn">
//                             <h1> Welcome to hangman </h1>
//                             <h4> Login if you dare </h4>

//                             <form id="register-form"> 
//                             <input id="name" type="text" placeholder="Name" value=""/>
//                             <input id="pw" type="password" placeholder="Password" value=""/>
//                             <input id="rgstr_btn" type="submit" value="Sign Up" onClick="store()"/> 
//                             </form>

//                             <form id="login-form"> 
//                             <input id="userName" type="text" placeholder="Enter Username" value=""/>
//                             <input id="userPw" type="password" placeholder="Enter Password" value=""/>
//                             <input id="login_btn" type="submit" value="Login"/>
//                             </form>
//                             </div>
//                             <div id = "loginimage"><img class="theImg" src="./imgs/cover1.png" style="width:500px; height:250px;"/></div>`)

// // +++++++++++++++++++ added css using jquery +++++++++++++++++++

// $("#container").css({
//     "backgroundColor": "white",
//     "width": "100%",
//     "height": "100%",
//     "position":"absolute",
//     "display": "inline-block",
//     "text-align": "center"});

//     $("#loginimage").css({
//         "margin-left": "65%",
//         "margin-top": "25%",});

//     $("#LogIn_signIn").css({
//     "left": "50%",
//     "top": "30%",
//     "position": "absolute",
//     "-webkit-transform": "translate3d(-50%, -50%, 0)",
//     "-moz-transform": "translate3d(-50%, -50%, 0)",
//     "font-family": "'Roboto Slab', serif",
//     "font-size": "30px",
//     "transform": "translate3d(-50%, -50%, 0)"})

// // +++++++++++++++++++ Log in & Signup form Logic +++++++++++++++++++

// // Name and Password from the register-form
// var nm = document.getElementById('name');
// var pw = document.getElementById('pw');
// var namesArr = [];
// var pwarray =[];
// // storing input from register-form
// function store() {
//     // localStorage.setItem('name', nm.value);  //can use localstorage too
//     // localStorage.setItem('pw', pw.value);  
// namesArr.push('name', nm.value); //Add the text 'item1' to nameArr
// localStorage.setItem('names', JSON.stringify(namesArr)); 

// pwarray.push('pw', pw.value); //Add the text 'item1' to nameArr
// localStorage.setItem('pws', JSON.stringify(pwarray));
// }
// $(function () {
//     $('#login_btn').click(function (e) {
//         e.preventDefault();
//         var storedName = JSON.parse(localStorage.getItem("names"));  
//         var storedPw = JSON.parse(localStorage.getItem("pws"));  
//         // var storedName = sessionStorage.getItem('name');
//         // var storedPw = sessionStorage.getItem('pw');

//         // entered data from the login-form
//         var userName = document.getElementById('userName');
//         var userPw = document.getElementById('userPw');
//         // console.log(names);

//         // check if stored data from register-form is equal to data from login form
//         if (userName.value == storedName && userPw.value == storedPw) {
//             alert('You are loged in.');
//             $("#container").fadeOut(1000);
//             console.log("here");
//         } else {
//             alert('Username and password not valid. Please try again.');
//         }
//         document.getElementById("welcome").innerHTML += storedName;
//     });
// });

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
        // document.getElementById("dash").innerHTML += " __ ";
    }

    var score = 0;
    // -----------------------------------------------------------------
    //                      Game Logic
    // -----------------------------------------------------------------

    // var currentword = randomword.split('');

    // $.each(currentword, function(index, value) { 
    //     alert(index + ': ' + value);

    //     if(KeyBoard[i] == currentword.value){
    //         console.log("YAY");

    //     }
    //   });


    
// I SPLIT RANDOMWORD AND APPEND EACH CAHARCTER TO CLASS 'LETTER'
    $.each(randomword.split(''), function (_i, char) {
        $('#answer').append($('<span class="letter" letter="' + char + '"></span>'));
        //$('.letter').css("font-size", "40px", "font-weight", "900");
    });

// ON BUTTIN CLICK I GET THE LENGTH OF THE RANDOM WORD
    $('button').click(function () {
        var charCount = $('#answer [letter = ' + $(this).text() + ']').each(function () {
            $(this).text($(this).attr('letter'));
        }).length;

// IF BUTTON IS CLCIKED I REMOVE ITS FUNCTIONALITY (UNCLICKABLE NOW)
        $(this).removeClass('button').unbind('click');
        if (charCount > 0) {

            var letterLeft = $(".letter:empty").length;
            console.log("Correct letter was chosen");
            document.getElementById("dash").innerHTML += KeyBoard[i];
            console.log("letter Left " + letterLeft);
            if (letterLeft <= 0) {
                console.log("WINNER")
                win += 1;
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
                // $('#answer').text("Word was: " + randomWord);
                loose += 1;
            }
        }
    });
}


    // function changeButtonOnCorrect()
    // {

    // }

    // function changeButtonOnWrong()
    // {

    // }
// -----------------------------------------------------------------
//                           TO DO
// -----------------------------------------------------------------

// MAKE SURE MORE THAN ONE USER CAN BE STORED 
// ADD GAME LOGIC
    // if button guess wrong generate new image untill game over
    // if correct display correct letter where __ is atm
// IMPLEMENT GAME OVER 
// KEEP TRACK OF SCORE 
// ADD LOG OUT BUTTON
