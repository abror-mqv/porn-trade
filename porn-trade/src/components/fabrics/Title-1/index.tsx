import styled from "styled-components";

export default function TitleOne({ children }: any) {
  const StyledTitle = styled.h1`
    font-size: 20px;
    width: 100%;
    text-align: center;
  `
  return <StyledTitle>{children}</StyledTitle>;
}
