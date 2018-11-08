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
                    <div id = "pic"></div>
                    <div id = "pic_container"></div>`);

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
var randomword;
// var randomSubject;
// var randomCountry;

// -----------------------------------------------------------------
//                           My Functions
// -----------------------------------------------------------------

function loginscreen(){
    $('#hiddencontent').hide();
    $('#login').append(`<form name="login">
    Username<input type="text" name="userid"/>
    Password<input type="password" name="pswrd"/>
    <input type="button" onclick="check(this.form)" value="Login"/>
    <input type="reset" value="Cancel"/>
    </form>`);
}
 //loginscreen();

function generateKeyBoard () {
    for (var i = 0; i < KeyBoard.length; i++) {
      document.getElementById("kb").innerHTML += "<button>" + KeyBoard[i] + "</button>";
      $("button").css({width: '55px',
                        margin: '10px',
                         height: '50px',
                        color: 'black'});

      $(document).ready(function(){
        $("button").click(function () 
        {
        var text = $(this).text();
        $("input").val(text);
        console.log(text);
        // if(randomSport.indexOf(text) || randomSubject.indexOf(text) || randomCountry.indexOf(text) != -1){
        //     console.log(text + " found");
        // }
        });
     });
    }
    $("button").mouseover(function(){
        $(this).css("background-color", "grey");
    });
    $("button").mouseout(function(){
        $(this).css("background-color", "lightblue");
    });
  }

generateKeyBoard();

function getsCategory () {
    randomCategorie = Categories[Math.floor(Math.random()*Categories.length)];
    document.getElementById("Category").innerHTML += randomCategorie;
  }
  getsCategory();

// If category == array choose random word in array
function getWord(){
    if(randomCategorie == "Sport" && "School Subject" && "Country"){
        randomword = Sports[Math.floor(Math.random()*Sports.length)];
        randomword = School_subjects[Math.floor(Math.random()*School_subjects.length)];
        randomword = Countries[Math.floor(Math.random()*Countries.length)];

        document.getElementById("words").innerHTML += randomword;
        for(i = 0; i < randomword.length; i++){
            document.getElementById("dash").innerHTML += " __ ";
        }
    }
}
getWord();

function displayImg(){
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

                        // USE THIS TO MOVE ACCROS 250 px
                        // $(document).ready(function(){
//     $("button").click(function(){
//         $("theIMG").animate({left: '250px'});
//     });
// });

}
displayImg();


// for (var i = 0; i < randomword.length; i++) {
//     alert(randomword.charAt(i));
//     if(button != randomword.charAt(i))
//     {
//         // Move onto next picture
//     }
//     else{
//         //Display button value instead of __
//     } 
//   }
 



// Still to do
// Load in all images 
// Link if wrong letter make image appear
// if correct no image appears
// if all correct --> welldone
// if all wrong --> game over