import styled from "styled-components";

export default function TitleTwo({ children }: any) {
  const StyledTitle = styled.h1`
    font-size: 16px;
    width: 100%;
    text-align: center;
    color: #ffffffa2;
    font-weight: 300;
  
  `
  return <StyledTitle>{children}</StyledTitle>;
}
