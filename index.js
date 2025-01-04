
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


const imageFile1 = `./images/dice${randomNumber1}.png`;
const imageFile2 = `./images/dice${randomNumber2}.png`;

const imageElement1 = document.querySelector("img");
const imageElement2 = document.querySelector("#img2");

imageElement1.src = imageFile1;
imageElement2.src = imageFile2;



if(randomNumber1 > randomNumber2){
    h1 = "Player 1 is Winner";
}
else if(randomNumber1 < randomNumber2){
    h1 = "Player 2 is Winner";
}
else if(randomNumber1 === randomNumber2){
    h1 = " DRAW, Roll again";
}

const h= h1;
const hp= document.querySelector("h1");
hp.innerText =h;
