import React, { useState, useEffect } from "react";
import { MechanicalCounter } from "mechanical-counter";
import styled from "styled-components";

export default function Results() {
  const StyledCounter = styled.p`
    width: 80%;
    text-align: center;
    margin-left: 10%;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0px;
    color: #a5e5ff;
    
  `;
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  const { format } = new Intl.NumberFormat("dot", { currency: "EUR" });
  const [text, set] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => set(text + getRandomInt(6000)), 2400);
    return () => {
      clearTimeout(timer1);
    };
  }, [text]);
  return (
    <div
      style={{
        backgroundColor: "rgb(94 109 129 / 35%)",
        backdropFilter: "blur(10px)",
        // borderRadius: "26px",
        padding: "2%",
        
        
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <MechanicalCounter text={format(text)} height={60} />
          сом
        </div>
      </div>
      <StyledCounter>
        Заработали игроки с LUCKY BOT пока вы это читаете
      </StyledCounter>
    </div>
  );
}
