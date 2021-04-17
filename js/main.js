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



function createCards(){
    let areaGame= document.getElementById("areaGame");
    for (i=0;i<cardsArray.length;i++){
     areaGame.innerHTML += `<div class="card-play back-card " id="${cardsArray[i]}" </div>`;
    }
    addClick();
}  
   
    //add click function
function addClick(){
    let cards=document.getElementsByClassName("card-play");
    for (i=0; i<cards.length;i++){
        cards[i].addEventListener("click", makeChoice); 
    }
}

// On click, set imgage background from imgAttribut and init compare function
function makeChoice(){
    cardId = cardsArray.indexOf(this.id);
    userChoices.push(this.id);   
    this.removeEventListener("click", makeChoice);
    this.style.backgroundImage= `url(${imgAttribut[cardId]})`;
    this.style.backgroundSize="contain";
    this.style.backgroundColor= "white";
    if(userChoices.length==2){
        score --;
        scoreArea.innerText="";
        scoreArea.innerText = `Coups Restants ${score}`
        
        setTimeout(compare,1000);
        

    }
}



function remove(elt){
    elt.style.removeProperty("background-image");
    elt.style.removeProperty("background-size");
    elt.addEventListener("click", makeChoice);
}

function compare(){
    let concat = userChoices.sort().toString() 
    for (let i=0; i<userChoices.length; i++){
        let element=document.getElementById(`${userChoices[i]}`);
        for (let j=0; j<CARDS.length; j++){
           let array= CARDS[j].sort().toString();
            if(concat==array){
                    console.log("trouvé");
                    element.classList.remove("back-card");
                    element.style.backgroundColor="";
                    element.style.backgroundImage= `url(${imgAttribut[j]})`;
                    element.classList.add("greencard")
            }
            else{
                console.log(score);
                remove(element);
            }
        }
    }
     userChoices=[];
     
}

        
       console.log(imgAttribut);


