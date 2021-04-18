const CARDS =[
    ["card1" , "card8"],
    ["card2" , "card9"],
    ["card3" , "card10"],
    ["card4" , "card11"],
    ["card5" , "card12"],
    ["card6" , "card13"],
    ["card7" , "card14"]
];

let imgArray=[
    "img/coeur.png",
    "img/pique.png",
    "img/carreau.png",
    "img/trefle.png",
    "img/Roi.png",
    "img/Reine.png",
    "img/Valet.png"
]

let imgSource;
let cardsArray=[];
let userChoices=[];
let imgAttribut=[];
let score = 10;
let cardId;
scoreArea=document.getElementById("score");
scoreArea.innerText = `Coups Restants ${score}`


//extract all values of CARDS in cardsArray and set index of images
for (let i=0;i<CARDS.length;i++){
    for (let j=0;j<CARDS[i].length;j++){
        cardsArray.push(CARDS[i][j]);
        imgAttribut.push(imgArray[i])
    }
}
// Shuffle two Array at Same
function shuffle(){
    let tempA;
    let tempB;
    for (let i=0;i<cardsArray.length;i++){
        tempA = cardsArray[i];
        tempB = Math.floor(Math.random()*cardsArray.length);
        cardsArray[i]= cardsArray[tempB];
        cardsArray[tempB]= tempA;

        tempA = imgAttribut[i];
        imgAttribut[i]= imgAttribut[tempB];
        imgAttribut[tempB]= tempA;
    }

}
shuffle();


// function createCards(){
    let areaGame= document.getElementById("areaGame")
    for (i=0;i<cardsArray.length;i++){

     areaGame.innerHTML += `<div class="card-play" id="${cardsArray[i]}">
                            <img class="front" src="${imgAttribut[i]}">
                            <img class="back" src="img/doscarte.png">
                            </div>`;
    }
// }  

const cards=document.querySelectorAll('.card-play'); 
cards.forEach(card => card.addEventListener("click",flip))

//add flip function
function flip(){
    this.classList.add("flip");
    userChoices.push(this.id);
    if (userChoices.length==2){
        compare();
    }
}

function compare(){
    let choicesSort= userChoices.sort().toString();
        for(i=0;i<CARDS.length;i++){
            let cardsSort =CARDS[i].sort().toString();
                if(choicesSort!==cardsSort){
                    let selectedCards = document.querySelectorAll(".flip");
                    console.log (selectedCards)
                    break;
                }
                
            
        }
        userChoices=[];
}

console.log(imgAttribut)