import React from "react";
import styled from "styled-components";

function ShowBrick(props: any) {
  const StyledShowbrick = styled.div`
    width: 60px;
    height: 24px;
    background-color: ${props.activeId === props.text ? "#3f6994" : "#3f505f"};
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #07c682;
    font-weight: 900;
    font-size: 12px;
    color: #01d695;
    font-weight: 700;
    ${props.activeId !== props.text ? "border: 2px solid #385675;" : ""}
    ${props.activeId === props.text ? "width: 64px; height: 28px;" : ""}
  `;

  return <StyledShowbrick>{props.text}</StyledShowbrick>;
}

export default ShowBrick;
