import React from "react";
import styled from "styled-components";
import ParticlesComponent from "../../particles";
const StyledTelegram = styled.div`
  position: relative;
  .Title {
    .division {
      height: 19px;
    }
    h2 {
      margin: 0;
      background-color: #6d8aa388;
      margin-left: 82px;
      width: fit-content;
      text-align: center;
      padding: 7px 10px;
      font-weight: 300;
      border-radius: 5px;
      max-width: 300px;
      backdrop-filter: blur(3px);
      font-size: 1.2rem;
    }
  }
  main {
    margin-top: 40px;
    width: calc(90%);
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-bottom: 60px;
    .Digit {
      background-color: #6d8aa360;
      backdrop-filter: blur(3px);
      padding: 8px 24px;
      width: max-content;
      border-radius: 3px;
      font-size: 4.5vh;
      font-family: "Plaster", cursive;      
    }
    .Block {
      padding: 12px;
      backdrop-filter: blur(7px);
      border: 2px solid #01d69632;
      border-radius: 12px;
      color: #f5f5f5aa;
      /* -webkit-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
        -moz-box-shadow: 0px 0px 29px -12px rgba(1, 214, 149, 1);
        box-shadow: -4px 2px 20px -12px rgba(1, 214, 149, 1); */
      font-weight: 2300;
      font-size: 1.1rem;
      line-height: 140%;
      letter-spacing: 0.10rem;
    }
  }
`;
function Telegram() {
  return (
    <StyledTelegram>
      <ParticlesComponent theme="light" />
      <div className="Title">
        <div className="division"></div>
        <h2>Как оплатить через Telegram</h2>
      </div>
      <main>
        <p className="Digit">1</p>
        <div className="Block">
          {localStorage.id} 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint,
          minima, eaque voluptates aliquid cum ipsa, alias assumenda adipisci
          doloribus amet? Mollitia dolor odit beatae enim? Sapiente quod impedit
          eveniet?
        </div>
        <p className="Digit">2</p>
        <div className="Block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nisi, ad hic maxime architecto ipsa fuga provident voluptatibus ipsam
          repellendus dicta error pariatur minima autem earum beatae laudantium
          placeat voluptatem.
        </div>
        <p className="Digit">3</p>
        <div className="Block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          nisi, ad hic maxime architecto ipsa fuga provident voluptatibus ipsam
          repellendus dicta error pariatur minima autem earum beatae laudantium
          placeat voluptatem.
        </div>
      </main>
    </StyledTelegram>
  );
}

export default Telegram;
