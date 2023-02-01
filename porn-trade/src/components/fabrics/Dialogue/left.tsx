import React from "react";
import styled from "styled-components";

export default function DialogueLeft({ children }: any) {
  const StyledDialodue = styled.p`
    font-size: 16px;
    color: #a5e5ff;
    text-align: left;
    width: 100%;
    margin-left: 4%;
    font-weight: 300;
    p {
      padding: 6px 14px 8px 18px;
      border-radius: 0px 16px 16px 16px;
      background-color: rgb(94 109 129 / 35%);
      backdrop-filter: blur(4px);
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
