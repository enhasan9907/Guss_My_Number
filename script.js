'use strict';
let message = document.querySelector(".message");
let scoure = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let btnAgin = document.querySelector(".again");
let inputGuess = document.querySelector('.guess');
let btnCheck = document.querySelector(".check");

let randomNum = Math.trunc(Math.random()*20)+1;
console.log(randomNum);
let x =20;



btnCheck.addEventListener("click", function(){
    //big img
    let guess = Number(inputGuess.value);
    
    if(guess <= 20 && guess >=1){
        if(guess === randomNum){
            document.querySelector("body").style.backgroundColor='green';
            message.textContent='secsece';
            document.querySelector(".number").textContent = randomNum;
            highScore.textContent=x;
        }
        else if (guess < randomNum){
            message.textContent = "number is too low";
            x=x-1;
            scoure.textContent = x;
            if(x < 0){
                document.querySelector("body").style.backgroundColor='red';
                alert("you lost");
            }
        }
        else {
            message.textContent = "number is too high";
            x=x-1;
            scoure.textContent = x;
            if(x < 0){
                document.querySelector("body").style.backgroundColor='red';
                alert("you lost");
            }
        }
    }
    else {
        message.textContent="wrong number";
    }
    
    
});
btnAgin.addEventListener("click",function(){
console.log("hasan");
x = 20;
randomNum = Math.trunc(Math.random() * 20) + 1;
message.textContent = 'Start guessing...';
scoure.textContent = 20;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
})
