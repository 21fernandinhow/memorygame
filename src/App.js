import './css/style.css';
import Header from "./components/Header";
import Game from './components/Game';
import { useState } from 'react';

function App() {
  
  //Variables and Arrays
  const cards = [
    {
        name: "Leão",
        img: "../../images/lion.webp",
        id: ""
    },
    {
        name: "Elefante",
        img: "../../images/elephant.webp",
        id: ""
    },
    {
        name: "Macaco",
        img: "../../images/monkey.webp",
        id: ""
    },
    {
        name: "Girafa",
        img: "../../images/giraffe.webp",
        id: ""
    },
    {
        name: "Hipopotamo",
        img: "../../images/hipo.webp",
        id: ""
    },
    {
        name: "Cobra",
        img: "../../images/snake.webp",
        id: ""
    },
    {
        name: "Leão",
        img: "../../images/lion.webp",
        id: ""
    },
    {
        name: "Elefante",
        img: "../../images/elephant.webp",
        id: ""
    },
    {
        name: "Macaco",
        img: "../../images/monkey.webp",
        id: ""
    },
    {
        name: "Girafa",
        img: "../../images/giraffe.webp",
        id: ""
    },
    {
        name: "Hipopotamo",
        img: "../../images/hipo.webp",
        id: ""
    },
    {
        name: "Cobra",
        img: "../../images/snake.webp",
        id: ""
    }
  ];
  const playingCards = [];
  const selectedCards = [];
  let [life, setLife] = useState(5);
  let [cardsToWin, setCardsToWin] = useState(cards.length);

  //Functions and Game Logic
  const startGame = () =>{
    while(cards.length>0){
      let x = Math.floor(Math.random() * cards.length);
      playingCards.push(cards[x]);
      cards.splice(x, 1);
    };
    for(let i=0;i<playingCards.length;i++){
        document.getElementById(`${i}`).addEventListener("click", handleCard);
    };
    document.getElementById("start").remove();
    quickShowCards();
  };

  const quickShowCards = () => {
      for (let i=0;i<playingCards.length;i++){
          let quickShowCard = document.getElementById(i);
          let quickCardData = playingCards[quickShowCard.id];
          quickShowCard.style.backgroundImage = "url("+quickCardData.img+")";
          quickShowCard.style.backgroundColor = "#E6E5A3";
          quickShowCard.style.borderColor = "#E6E5A3";
      };
      setTimeout(()=>{
          for (let i=0;i<playingCards.length;i++){
              let quickHideCard = document.getElementById(i);
              quickHideCard.style.backgroundImage = "none";
              quickHideCard.style.backgroundColor = "#A9AF7E";
              quickHideCard.style.borderColor = "#7D8F69";
          };
      },1500);
  };

  const handleCard = (event) => {
      let cardElement = event.target;
      let cardData = playingCards[cardElement.id];
      cardData.id = cardElement.id;
      cardElement.style.backgroundImage = "url("+cardData.img+")";
      cardElement.style.backgroundColor = "#E6E5A3";
      cardElement.style.borderColor = "#E6E5A3";
      //console.log(cardData);
      selectedCards.push(cardData);
      checkResult();
  };

  const checkResult = () => {
      if (selectedCards.length === 2){
          if (selectedCards[0].name === selectedCards[1].name){
              document.getElementById(selectedCards[0].id).removeEventListener("click", handleCard);
              document.getElementById(selectedCards[1].id).removeEventListener("click", handleCard);
              selectedCards.pop();
              selectedCards.pop();
              setCardsToWin(cardsToWin = cardsToWin-2);
          } else {
              setTimeout(()=>{
                document.getElementById(selectedCards[0].id).style.backgroundImage = "none";
                document.getElementById(selectedCards[0].id).style.backgroundColor = "#A9AF7E";
                document.getElementById(selectedCards[0].id).style.borderColor = "#7D8F69";
                document.getElementById(selectedCards[1].id).style.backgroundImage = "none";
                document.getElementById(selectedCards[1].id).style.backgroundColor = "#A9AF7E";
                document.getElementById(selectedCards[1].id).style.borderColor = "#7D8F69";
                selectedCards.pop();
                selectedCards.pop();
              },500);
              setLife(life = life-1);
          };
      };
      checkWin();
  };

  const checkWin = () => {
    const result = document.getElementById("result");
    const header = document.getElementById("header");
    if(life === 0){
      result.innerHTML = "Você perdeu!"
      header.style.transition = "0.4s";
      header.style.backgroundColor = "#e4605e";
      header.style.color = "white";
      header.style.borderColor = "white";
      for (let i=0;i<playingCards.length;i++){
        document.getElementById(i).removeEventListener("click", handleCard);;
      };
    } else if (cardsToWin === 0){
      result.innerHTML = "Você venceu!"
      header.style.transition = "0.4s";
      header.style.backgroundColor = "#469536";
      header.style.color = "white";
      header.style.borderColor = "white";
    };
  };

  //Game Screen
  return (
    <><Header lifes={life} cardsCount={cardsToWin}></Header>
    <Game start={startGame}> </Game></>
  );
}

export default App;
