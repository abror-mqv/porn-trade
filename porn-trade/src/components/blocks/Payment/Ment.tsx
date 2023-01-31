import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Ment(props: { textColor: string; color: string; link: any; char: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ico: any; }) {
  const StyledMent = styled(Link)`
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: ${props.color};
    align-items: center;
    padding: 20px;
    text-decoration: none;
    color: ${props.textColor};
    width: 90%;
    font-size: 1.2rem;
    border-radius: 30px;
    font-weight: 300;    
    img {
      height: 80px;
    }
    
  `;
  return (
    <StyledMent to={`/payment/${props.link}`}>
      <p>{props.char}</p>

      <img src={`/media/payments/${props.ico}`}/>
    </StyledMent>
  );
}

export default Ment;
