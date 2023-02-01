import styled from "styled-components";

export default function TitleOne({ children }: any) {
  const StyledTitle = styled.h1`
    font-size: 20px;
    width: 100%;
    text-align: center;
    @media screen and (min-width: 900px) {
      font-size: 9vh;
      backdrop-filter: blur(3px);
      padding: 20px;
      letter-spacing: 12px;
      margin-bottom: 35vh;
      font-weight: 900;
      border-radius: 40px;
}

  `
  return <StyledTitle>{children}</StyledTitle>;
}
