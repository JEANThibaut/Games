const CARDS =[
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7"
];

let aleatoire=[];



    let cards = CARDS.slice(0);
    while(aleatoire.length<14){
        //Replace 1 items from card to aleatoire; 
    let selectcard = (cards.splice(Math.floor(Math.random()*cards.length),1));
        //push in aleatoir the selectcard at index 0
    aleatoire.push(selectcard[0]);
        
    }
    console.log(aleatoire);
    let playedCard=document.querySelector("section");
    for(let select in aleatoire){
       playedCard.innerHTML += `<div class="cardPlay">`+ aleatoire[select] + `</div>`;
    }