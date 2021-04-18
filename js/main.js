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
let tryNumber=0;
let cardsArray=[];
let userChoices=[];
let imgAttribut=[];
let score = 15;

let layer = document.getElementById("playLayer");
//Hide replay Button
let replayBtn= document.getElementById("replay");
replayBtn.classList.add("hidden");
//Hidden End Img
let resultImg = document.querySelectorAll('.final');
resultImg.forEach(img => img.classList.add("hidden"));
//Initial Score
scoreArea=document.getElementById("score");
scoreArea.innerHTML += `<div>Coups Restants</div><div>${score}</div>`

//extract all values of CARDS in cardsArray and set index of images
for (let i=0;i<CARDS.length;i++){
    for (let j=0;j<CARDS[i].length;j++){
        cardsArray.push(CARDS[i][j]);
        imgAttribut.push(imgArray[i])
    }
}

// Shuffle two Array at same time with same value
function shuffle(){
    let tempA;
    let tempB;
    for (let i=0;i<cardsArray.length;i++){
        tempA = cardsArray[i];
        //Shuffle first array
        tempB = Math.floor(Math.random()*cardsArray.length);
        cardsArray[i]= cardsArray[tempB];
        cardsArray[tempB]= tempA;
        // shuffle second array
        tempA = imgAttribut[i];
        imgAttribut[i]= imgAttribut[tempB];
        imgAttribut[tempB]= tempA;
    }

}
shuffle();
// -------------Create Cards

let areaGame= document.getElementById("areaGame")
for (i=0;i<cardsArray.length;i++){
    areaGame.innerHTML += `<div class="card-play" id="${cardsArray[i]}">
                        <img class="front" src="${imgAttribut[i]}">
                        <img class="back" src="img/doscarte.png">
                        </div>`;
}

const cardPlay =document.querySelectorAll('.card-play'); 
cardPlay.forEach(card => card.addEventListener("click",flip))

//add flip function
function flip(){
    this.classList.add("flip",);
    userChoices.push(this.id);
    this.removeEventListener("click",flip);
    if (userChoices.length==2){
        setTimeout(compare,1000);
    }
    
}

function compare(){
    let choicesSort= userChoices.sort().toString();
    let selectedCards = document.querySelectorAll(".flip");
        for(i=0;i<CARDS.length;i++){
            let cardsSort =CARDS[i].sort().toString();
            if(choicesSort!==cardsSort){
                //Loose
                selectedCards.forEach(cards => cards.classList.remove("flip"));
                selectedCards.forEach(cards => cards.addEventListener("click",flip));  
            }
            else{
                // Win
                selectedCards.forEach(cards => cards.classList.remove("flip"));
                selectedCards.forEach(cards => cards.classList.add("flipped"));
                selectedCards.forEach(cards => cards.removeEventListener("click",flip));
                tryNumber ++;
                break;
            }
            if(tryNumber==(CARDS.length)-1){
                winLayer();
                return;
            }
            if (score===1){
                looseLayer();
                return;
            }
        }
    userChoices=[];
    score--;
    scoreArea.innerHTML ="";
    scoreArea.innerHTML +=`<div>Coups Restants</div><div>${score}</div>`
      
}

//--------------------------------Layers------------------------

function playLayer(){
    layer.classList.add("hidden");
}

function looseLayer(){
    layer.classList.remove("hidden")
    let playBtn = document.getElementById("playBtn");
    playBtn.classList.add("hidden");
    replayBtn.classList.remove("hidden");
    let loose= document.getElementById("looseImg");
    loose.classList.remove("hidden");
}

function winLayer(){
    layer.classList.remove("hidden");
    let playBtn = document.getElementById("playBtn");
    playBtn.classList.add("hidden");
    replayBtn.classList.remove("hidden");
    let win= document.getElementById("winImg");
    win.classList.remove("hidden");
}