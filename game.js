// https://drive.google.com/drive/folders/0B4fAjHGILATeNm5pZHhpYnZhaEU

// -----------------------------------------------------------------
//                           My JQuery divs
// -----------------------------------------------------------------

$('#parent').append(`<div id = "Category">Category: </div>
                    <div id = "words">
                    <h1> Your score: <h1>
                    <h3> Games you have Won:</h3>
                    </br>
                    <h3> Games you have Lost:</h3>
                    </br>
                    for me .. this is your word :  
                    </div>
                    <div id = "dash"></div>
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
// var randomSubject;
// var randomCountry;

// -----------------------------------------------------------------
//                           My Functions
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
        $(this).css("background-color", "grey");
    });
    $("button").mouseout(function () {
        $(this).css("background-color", "lightblue");
    });
}
generateKeyBoard();

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
        alert(randomword.charAt(i));
    }
}
getWord();

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

function letsee() {
    $(document).ready(function () {
        $("button").click(function () {
            text = $(this).text();
            $("input").val(text);
    
            console.log("Letter clicked = "+text);
            
            // for(var i = 0;i < randomword.length; i++){
            //     if(randomword.length != charAt(i)){
            //         console.log("no");
            //     }
            // }
            // if(text == randomword.charAt(i)){
            //     console.log("yay");
            // }
        });
    });
}



// Still to do
// Load in all images 
// Link if wrong letter make image appear
// if correct no image appears
// if all correct --> welldone
// if all wrong --> game over