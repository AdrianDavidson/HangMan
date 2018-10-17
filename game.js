// -----------------------------------------------------------------
//                           My JQuery divs
// -----------------------------------------------------------------

$('#parent').append(`<div id = "Category">Category: </div>
                    <div id = "words">The random word is: </div>
                    <div id = "dash"></div>
                    <div id = "pic"></div>`);

// -----------------------------------------------------------------
//                           My Arrays
// -----------------------------------------------------------------

 var KeyBoard = ["Q","W","E","R","T","Y","U","I","O","P",
                    "A","S","D","F","G","H","J","K","L",
                        "Z","X","C","V","B","N","M"];

var Categories = ["Sport","School Subject","Country"];
var Sports = ["soccer","rugby","tennis"];
var School_subjects = ["Art","History","Geography"];
var Countries = ["Germany","Ireland","Egypt"];

// -----------------------------------------------------------------
//                           My Variables
// -----------------------------------------------------------------
var randomCategorie;

// -----------------------------------------------------------------
//                           My Functions
// -----------------------------------------------------------------

function generateKeyBoard () {
    for (var i = 0; i < KeyBoard.length; i++) {
      document.getElementById("kb").innerHTML += "<button>" + KeyBoard[i] + "</button>";
      $("button").css({width: '55px',
                        margin: '10px',
                         height: '50px'});

      $(document).ready(function(){
        $("button").click(function () 
        {
        var text = $(this).text();
        $("input").val(text);
        });
     });
    }
    $('button')
    .on('mouseenter', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: -10,
            width: "+=10",
            height: "+=10"
        }, 'fast');
    })
    .on('mouseleave', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            margin: 10,
            width: "-=10",
            height: "-=10"
        }, 'fast');
    })
  }
  generateKeyBoard();

function getsCategory () {
    randomCategorie = Categories[Math.floor(Math.random()*Categories.length)];
    document.getElementById("Category").innerHTML += randomCategorie;
  }
  getsCategory();

// If category == array choose random word in array
function getWord(){
    if(randomCategorie == "Sport"){
        var randomSport = Sports[Math.floor(Math.random()*Sports.length)];
        document.getElementById("words").innerHTML += randomSport;
        for(i = 0; i < randomSport.length; i++){
            document.getElementById("dash").innerHTML += " __ ";
        }
    }
    if(randomCategorie == "School Subject"){
        var randomSubject = School_subjects[Math.floor(Math.random()*School_subjects.length)];
        document.getElementById("words").innerHTML += randomSubject;
        for(i = 0; i < randomSubject.length; i++){
            document.getElementById("dash").innerHTML += " __ ";
        }
    }
    if(randomCategorie == "Country"){
        var randomCountry = Countries[Math.floor(Math.random()*Countries.length)];
        document.getElementById("words").innerHTML += randomCountry;
        for(i = 0; i < randomCountry.length; i++){
            document.getElementById("dash").innerHTML += " __ ";
        }
    }
}
getWord();

function displayImg(){
    $("#pic").html('<img src="./imgs/hangman-1.png" alt="Smiley face">');
}
displayImg();

// Still to do
// Load in all images 
// Link if wrong letter make image appear
// if correct no image appears
// if all correct --> welldone
// if all wrong --> game over