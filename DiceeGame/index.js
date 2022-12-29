
var randomNumber1=Math.floor(Math.random()*6)+1;//it will generate number from 1 to 6

var randomDiceImage="dice" + randomNumber1 + ".png"; //dice1-dice6

var randomImageSorce="images/"+randomDiceImage;//image/dice1.png-image/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSorce);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//if player one win
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
    document.querySelector("body").style.backgroundColor="yellow";
    //if 2nd player win
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
    document.querySelector("body").style.backgroundColor="aqua";
//if draw
}else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
    // document.querySelector("body").style.backgroundColor="lightred";

}