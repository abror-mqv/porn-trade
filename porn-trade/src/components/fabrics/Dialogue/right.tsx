import React from "react";
import styled from "styled-components";

export default function DialogueRight({ children }: any) {
  const StyledDialodue = styled.p`
    font-size: 18px;
    color: #b7b6b6;
    text-align: left;
    width: 100%;
    margin-left: 0;
    display: flex;
    justify-content: end;
    margin-left: -4%;
    margin-top: -16px;  
    p {
      background-color: #060606;
      width: fit-content;
      padding: 6px 30px 8px 4px;
      border-radius: 16px 0px 16px 16px;
      max-width: 60%;
      line-height: 28px;
      padding: 6px 4px 8px 18px;


    }
  `;
  return (
    <StyledDialodue>
      <p>{children}</p>
    </StyledDialodue>
  );
}
