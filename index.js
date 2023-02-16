

var randomNumber1=Math.floor(Math.random()*6)+1;
randomImage="dice" + randomNumber1 + ".png";  //dice1.png
randomImageSource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage ="dice" +randomNumber2 +".png";
var imageSrc="images/" + randomImage;
var image=document.querySelectorAll("img")[1];
image.setAttribute("src",imageSrc);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 🚩";
}
else {
    document.querySelector("h1").innerHTML="DRAW ";
}