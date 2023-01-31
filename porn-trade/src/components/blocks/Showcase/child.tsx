import React from "react";
import styled from "styled-components";
import ShowBrick from "../../fabrics/ShowBrick";

function ShowcaseChild(props: any) {
  const StyledShowcase = styled.div`
    position: relative;
    width: 90%;
    margin-left: 5%;
    height: 400px;
    .Bricks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
  `;

  const Cases = [];
  for (let i = 0; i <= 36; i++) {
    Cases.push(i);
  }

  return (
    <StyledShowcase>
      <div className="Bricks">
        {Cases.map((i) => {
          return <ShowBrick activeId={props.lo} text={i} />;
        })}
      </div>
    </StyledShowcase>
  );
}

export default ShowcaseChild;
