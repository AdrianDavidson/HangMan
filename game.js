// // https://drive.google.com/drive/folders/0B4fAjHGILATeNm5pZHhpYnZhaEU

// // -----------------------------------------------------------------
// //                           My JQuery divs
// // -----------------------------------------------------------------
$('#parent').append(`<div id = "words">
                        <div id = "welcome"> Welcome : </div>
                        <h4> Your score: <h4>
                        <div id="won"><h5> Games you have Won:</h5></div>
                        </br>
                        <div id="lost"><h5> Games you have lost:</h5></div>  
                    </div>
                    <div id = "Category">Category: </div>
                    
                    <div id = "dash"></div>
                    <div id="kb"></div>
                    <div id = "pic"></div>`);
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
var text;
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
// // storing input from register-form
// function store() {
//     sessionStorage.setItem('name', nm.value);  //can use localstorage too
//     sessionStorage.setItem('pw', pw.value);
// }

// $(function () {
//     $('#login_btn').click(function (e) {
//         e.preventDefault();
//         var storedName = sessionStorage.getItem('name');
//         var storedPw = sessionStorage.getItem('pw');

//         // entered data from the login-form
//         var userName = document.getElementById('userName');
//         var userPw = document.getElementById('userPw');

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

// -----------------------------------------------------------------
//                         Generates the keyboard
// -----------------------------------------------------------------
function generateKeyBoard() {
    for (var i = 0; i < KeyBoard.length; i++) {
        document.getElementById("kb").innerHTML += "<button onclick=letsee()>" + KeyBoard[i] + "</button>";
        $("button").css({
            width: '55px',
            margin: '10px',
            height: '50px',
            color: 'black'
        });
    }
    $("button").mouseover(function () {
        $(this).css({"background-color": "orangered",
                    "width": "65px",
                    "height": "60px",
                    "border-radius": "200%"});
        
    });

    $("button").mouseout(function () {
        $(this).css({"background-color": "grey",
        "width": "55px",
        "height": "50px",
        "border-radius": "0px"});
        
    });
    // Hover function gives a slower animation but it acts weird
    // $("button").hover(function(){
    //     $(this).animate({ width: "65px",
    //                         height: "60px", });
    // }, function() {
    //     $(this).animate({ width: "55px",
    //                          height: "50px", });
    // });
}
generateKeyBoard();

// -----------------------------------------------------------------
//                      Generates a random word
// -----------------------------------------------------------------

function getsCategory() {
    randomCategorie = Categories[Math.floor(Math.random() * Categories.length)];
    document.getElementById("Category").innerHTML += randomCategorie;
}
getsCategory();

// If category == array choose random word in array
function getWord() {
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
        document.getElementById("dash").innerHTML += " __ ";
    }
}
getWord();

// -----------------------------------------------------------------
//                           the images go here
// -----------------------------------------------------------------
function displayImg() {
    $('#pic').prepend(`<img class="theImg" src="./imgs/hangman-0.png" style="width:250px; height:250px;"/>
                        <img class="theImg" src="./imgs/hangman-1.png" style="width:250px; height:250px;"/>
                        <img class="theImg" src="./imgs/hangman-2.png" style="width:250px; height:250px;" />
                        <img class="theImg" src="./imgs/hangman-3.png" style="width:250px; height:250px;" />
                        <img class="theImg" src="./imgs/hangman-4.png" style="width:250px; height:250px;" />
                        <img class="theImg" src="./imgs/hangman-5.png" style="width:250px; height:250px;" />
                        <img class="theImg" src="./imgs/hangman-6.png" style="width:250px; height:250px;" />
                        <img class="theImg" src="./imgs/hangman-7.png" style="width:250px; height:250px;"/>
                        <img class="theImg" src="./imgs/hangman-8.png" style="width:250px; height:250px;"/>
                        <img class="theImg" src="./imgs/hangman-9.png" style="width:250px; height:250px;"/>`)
}
displayImg();

//game functionality

// Prints button clicked but keeps adding one each time..
// prints no all the time even if match
function letsee() {
    var wrong_letters;
    var correct_letters;

    $(document).ready(function () {
        $("button").click(function () {
            text = $(this).text();
            console.log("Letter clicked = " + text);

            for(var i = 0;i < randomword.length; i++){
                for(var x =0; x < KeyBoard.length;x++){
                    if(text != randomword[i]){
                        console.log("there is NO match");
                    }
                    else{
                        console.log("There IS a match")
                    }
                }
             }
            // if(text == randomword.charAt(i)){
            //     console.log("yay");
            // }
        });
    });
}

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
