//For dice 1

var randomNumber1 = Math.floor(Math.random() * 6) +1;//Generates a random number

var randomDiceImage = "dice" + randomNumber1 + ".png";//Generates a random image number dice1.png_dice6.png

var randomImageSource = "images/" + randomDiceImage;//Gives the random images a sorce

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//For dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//For the refresh action

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 won!!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player2 won!!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!"
}