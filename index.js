var ranNum1 = Math.floor(Math.random() * 6) + 1;
var ranNum2 = Math.floor(Math.random() * 6) + 1;

var diceImg1 = "images/" + "dice" + ranNum1 + ".png";
var diceImg2 = "images/" + "dice" + ranNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImg1);
document.querySelectorAll("img")[1].setAttribute("src", diceImg2);

if(ranNum1 > ranNum2) {
    document.querySelector("h1").innerHTML = "Player 1 won";
} else if(ranNum2 > ranNum1) {
    document.querySelector("h1").textContent = "Player 2 won"; // or textContent
} else {
    document.querySelector("h1").innerHTML = "Draw"; 
}
