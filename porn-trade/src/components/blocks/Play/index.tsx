import React from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import Randomer from "./randomer";
import { useHistory } from "react-router-dom";
const StyledPlay = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .Game {
    border-radius: 0px;
    border: #01d695 1.5px solid;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    background-color: #131b25;
    h1 {
      font-size: 30vw;
      margin: 0;
      margin-bottom: 12px;
      color: #39a7c2;
    }
  }
  .Not {
    width: 90%;
    margin-left: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 30px;
  }
  .Count {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h3 {
      font-weight: 300;
      text-align: center;
    }
    .Time {
      color: #52e72d;
    }
  }
`;
function Index() {
  const history = useHistory()
  var isAdmin;
  if (localStorage.getItem("NasWay") == "504") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  if(isAdmin){
    return(
      <StyledPlay>
      <Randomer />

      <div className="Count">
        <h3>Осталось времени</h3>
        <Countdown date={Date.now() + 3600000} className="Time" />
      </div>
    </StyledPlay>
    )
  }else{
    setTimeout(()=>{
      history.push("/payment")
    }, 3000)
    return(
      <StyledPlay>

      <div className="Count">
        <h3>Вы не купили доступ <br/>...перенаправление на страницу оплаты...</h3>
      </div>
    </StyledPlay>
    )
  }
}

export default Index;
