import React from "react";
import styled from "styled-components";

export default function DialogueLeft({ children }: any) {
  const StyledDialodue = styled.p`
    font-size: 18px;
    color: #b7b6b6;
    text-align: left;
    width: 100%;
    margin-left: 4%;
    margin-top: -16px;
    p {
      padding: 6px 4px 8px 18px;
      border-radius: 0px 16px 16px 16px;
      background-color: #000000;
      width: fit-content;
      max-width: 60%;
      line-height: 28px;
    }
  `;
  return (
    <StyledDialodue>
      <p>{children}</p>
    </StyledDialodue>
  );
}
